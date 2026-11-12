import { useState } from 'react';
import { ShieldCheck, ExternalLink, Eye, Award } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData.ts';
import type { Certificate, CertificateCategory } from '../types/index.ts';
import CertificateModal from './CertificateModal.tsx';
import OrganizationLogo from './OrganizationLogo.tsx';

interface CertificatesProps {
  onOpenCertificate?: (certificate: Certificate) => void;
}

export default function Certificates({ onOpenCertificate }: CertificatesProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>('all');
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  const handleOpenCertificate = (cert: Certificate) => {
    if (onOpenCertificate) {
      onOpenCertificate(cert);
    } else {
      setActiveModalCert(cert);
    }
  };

  const categories: { label: string; value: CertificateCategory; count: number }[] = [
    { label: 'All Certificates', value: 'all', count: CERTIFICATES.length },
    {
      label: 'AI & Machine Learning',
      value: 'ai-ml',
      count: CERTIFICATES.filter((c) => c.category === 'ai-ml').length,
    },
    {
      label: 'Data & Analytics',
      value: 'data',
      count: CERTIFICATES.filter((c) => c.category === 'data').length,
    },
    {
      label: 'Programming',
      value: 'programming',
      count: CERTIFICATES.filter((c) => c.category === 'programming').length,
    },
    {
      label: 'Publications',
      value: 'publication',
      count: CERTIFICATES.filter((c) => c.category === 'publication').length,
    },
  ];

  const filteredCertificates =
    selectedCategory === 'all'
      ? CERTIFICATES
      : CERTIFICATES.filter((cert) => cert.category === selectedCategory);

  return (
    <section id="certificates" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
              Verified Credentials
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-display">
              Certificates & Publications
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Official industry and academic credentials accredited by Microsoft, AICTE, TechSaksham (Microsoft & SAP), TCS iON, and the International Journal of Research and Applications.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>9 Verified Documents Attached</span>
          </div>
        </div>

        {/* Filter Bar with Smooth Pill Transitions */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl mb-8 overflow-x-auto border border-zinc-200 dark:border-zinc-800 shadow-xs">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 active:scale-95 ${
                selectedCategory === cat.value
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 shadow-xs font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'
              }`}
              type="button"
            >
              <span>{cat.label}</span>
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">
                ({cat.count})
              </span>
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid with Elevated Hover States */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 shadow-xs group"
            >
              <div>
                {/* Header Line: Category badge & Date */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 dark:text-blue-400 font-semibold flex items-center gap-1">
                    {cert.category === 'publication' && <Award className="w-3.5 h-3.5" />}
                    {cert.category === 'publication' ? 'Peer-Reviewed Journal' : cert.duration || 'Verified Credential'}
                  </span>

                  <span className="text-xs text-zinc-400 dark:text-zinc-500 tabular-nums">
                    {cert.date}
                  </span>
                </div>

                {/* Certificate Title: Main Visual Focus */}
                <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-100 font-display leading-snug mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {cert.title}
                </h3>

                {/* Issuing Organization: 24x24 px Square Logo + Name with 8px gap */}
                <div className="flex items-center gap-2 mb-3">
                  <OrganizationLogo organization={cert.issuer} />
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate" title={cert.issuer}>
                    {cert.issuer}
                  </span>
                </div>

                {cert.credentialId && (
                  <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-3 truncate">
                    ID: {cert.credentialId}
                  </p>
                )}

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Competencies */}
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 mb-4 flex flex-wrap gap-x-2 text-[11px] text-zinc-500 dark:text-zinc-400">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                      {skill}{idx < cert.skills.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>

                {/* Buttons: Interactive Preview Modal or Direct Link */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenCertificate(cert)}
                    className="group/btn flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 rounded-xl transition-all duration-150 cursor-pointer"
                    type="button"
                    aria-label={`View Credential for ${cert.title}`}
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 transition-transform duration-200 group-hover/btn:scale-115" />
                    <span>View Credential</span>
                  </button>

                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:scale-105 active:scale-95 rounded-xl transition-all duration-150"
                    title="Open in new tab"
                    aria-label={`Open document for ${cert.title} in new tab`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog for Certificate PDF Preview (local fallback) */}
      {!onOpenCertificate && (
        <CertificateModal
          certificate={activeModalCert}
          onClose={() => setActiveModalCert(null)}
        />
      )}
    </section>
  );
}
