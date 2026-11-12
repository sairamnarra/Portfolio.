import { Eye, ExternalLink } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData.ts';
import type { Certificate } from '../types/index.ts';
import OrganizationLogo from './OrganizationLogo.tsx';

interface ExperienceProps {
  onOpenCertificate: (certificate: Certificate) => void;
}

export default function Experience({ onOpenCertificate }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Professional Trajectory
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-display">
            Experience & Internships
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Practical industry experience gained through competitive national internships and project-based engineering programs.
          </p>
        </div>

        {/* Editorial Timeline with Elevated Hover Cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                <div>
                  <span className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
                    0{idx + 1}. {exp.type}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <OrganizationLogo organization={exp.organization} />
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {exp.organization}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 tabular-nums shrink-0 py-1">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="space-y-2 mb-5">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0 transition-transform duration-200 group-hover:scale-125" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">Tech Stack:</span>
                {exp.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                    {tech}{tIdx < exp.techStack.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>

              {/* View Credential Button with Hover Micro-Interactions */}
              {exp.certificate && (
                <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2.5">
                  <button
                    onClick={() => onOpenCertificate(exp.certificate!)}
                    className="group/btn inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 rounded-xl transition-all duration-150 cursor-pointer"
                    type="button"
                    aria-label={`View Credential for ${exp.role}`}
                  >
                    <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400 transition-transform duration-200 group-hover/btn:scale-115" />
                    <span>View Credential</span>
                  </button>

                  <a
                    href={exp.certificate.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:scale-105 active:scale-95 rounded-xl transition-all duration-150"
                    title="Open certificate in new tab"
                    aria-label={`Open certificate for ${exp.role} in new tab`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
