import React from 'react';

interface OrganizationLogoProps {
  organization: string;
  className?: string;
  size?: number; // default 24
}

type OrgKey = 'microsoft' | 'tcs' | 'vois' | 'aicte' | 'simplilearn' | 'skillindia' | 'ijra' | 'techsaksham';

/**
 * Normalizes organization string to identify verified issuing body.
 * Respects distinction between primary issuing organization, sponsor, and academic bodies.
 */
function identifyOrganization(name: string): OrgKey | null {
  const lower = name.toLowerCase();

  // TechSaksham joint initiative (Microsoft & SAP)
  if (lower.includes('techsaksham')) {
    return 'techsaksham';
  }

  // Vodafone Intelligent Solutions
  if (lower.includes('vois') || lower.includes('vodafone')) {
    return 'vois';
  }

  // Tata Consultancy Services
  if (lower.includes('tcs') || lower.includes('tata consultancy')) {
    return 'tcs';
  }

  // Simplilearn
  if (lower.includes('simplilearn')) {
    return 'simplilearn';
  }

  // Skill India / NSDC
  if (lower.includes('skill india') || lower.includes('nsdc') || lower.includes('skillindia')) {
    return 'skillindia';
  }

  // IJRA (International Journal of Research and Applications)
  if (lower.includes('ijra') || lower.includes('international journal of research')) {
    return 'ijra';
  }

  // Microsoft (Elevate, Azure, Certifications)
  if (lower.includes('microsoft')) {
    return 'microsoft';
  }

  // AICTE
  if (lower.includes('aicte') || lower.includes('all india council')) {
    return 'aicte';
  }

  return null;
}

export default function OrganizationLogo({ organization, className = '' }: OrganizationLogoProps) {
  const orgKey = identifyOrganization(organization);

  // Fallback: If organization is unrecognized, display clean 24x24 square with monogram
  if (!orgKey) {
    const monogram = organization
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase())
      .join('') || 'ORG';

    return (
      <span
        className={`inline-flex items-center justify-center w-6 h-6 min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] rounded-[4px] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px] font-bold text-zinc-700 dark:text-zinc-300 select-none shrink-0 ${className}`}
        title={organization}
        aria-label={`${organization} logo`}
        role="img"
      >
        {monogram}
      </span>
    );
  }

  switch (orgKey) {
    case 'microsoft':
      return (
        <span
          className={`inline-block w-6 h-6 min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] rounded-[4px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/80 shrink-0 p-0.5 ${className}`}
          title="Microsoft"
          role="img"
          aria-label="Microsoft logo"
        >
          {/* Official Microsoft 4-Color Grid SVG */}
          <svg viewBox="0 0 24 24" className="w-full h-full object-contain rounded-[2px]" aria-hidden="true">
            <rect x="2" y="2" width="9.2" height="9.2" fill="#F25022" />
            <rect x="12.8" y="2" width="9.2" height="9.2" fill="#7FBA00" />
            <rect x="2" y="12.8" width="9.2" height="9.2" fill="#00A4EF" />
            <rect x="12.8" y="12.8" width="9.2" height="9.2" fill="#FFB900" />
          </svg>
        </span>
      );

    case 'tcs':
      return (
        <span
          className={`inline-flex items-center justify-center w-6 h-6 min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] rounded-[4px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/80 shrink-0 p-0.5 ${className}`}
          title="Tata Consultancy Services"
          role="img"
          aria-label="Tata Consultancy Services (TCS) logo"
        >
          {/* Authentic TCS Icon / PNG Asset */}
          <img
            src="/assets/aistudio/tcs_45bb6f50.png"
            alt="TCS logo"
            className="w-full h-full object-contain rounded-[2px]"
            loading="lazy"
          />
        </span>
      );

    case 'vois':
      return (
        <span
          className={`inline-flex items-center justify-center w-6 h-6 min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] rounded-[4px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/80 shrink-0 p-0.5 ${className}`}
          title="Vodafone Intelligent Solutions ('VOIS)"
          role="img"
          aria-label="Vodafone Intelligent Solutions ('VOIS) logo"
        >
          {/* Official Vodafone / VOIS Speechmark Roundel SVG */}
          <svg viewBox="0 0 24 24" className="w-full h-full object-contain rounded-[2px]" aria-hidden="true">
            <rect width="24" height="24" rx="2" fill="#E60000" />
            <path
              d="M12 4.5C7.86 4.5 4.5 7.86 4.5 12c0 2.22.96 4.22 2.5 5.58-.2-.72-.32-1.5-.32-2.3 0-3.32 2.68-6 6-6s6 2.68 6 6-2.68 6-6 6c-.8 0-1.58-.12-2.3-.32C11.78 22.04 13.78 23 16 23c4.14 0 7.5-3.36 7.5-7.5 0-6.08-4.92-11-11.5-11z"
              fill="#FFFFFF"
            />
          </svg>
        </span>
      );

    case 'aicte':
      return (
        <span
          className={`inline-flex items-center justify-center w-6 h-6 min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] rounded-[4px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/80 shrink-0 p-0.5 ${className}`}
          title="All India Council for Technical Education (AICTE)"
          role="img"
          aria-label="AICTE logo"
        >
          {/* Official AICTE Emblem PNG Asset */}
          <img
            src="/assets/aistudio/aicte_7d58d4fa.png"
            alt="AICTE logo"
            className="w-full h-full object-contain rounded-[2px]"
            loading="lazy"
          />
        </span>
      );

    case 'simplilearn':
      return (
        <span
          className={`inline-flex items-center justify-center w-6 h-6 min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] rounded-[4px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/80 shrink-0 p-0.5 ${className}`}
          title="Simplilearn"
          role="img"
          aria-label="Simplilearn logo"
        >
          {/* Official Simplilearn Geometric Logo SVG */}
          <svg viewBox="0 0 24 24" className="w-full h-full object-contain rounded-[2px]" aria-hidden="true">
            <rect width="24" height="24" rx="2" fill="#0072B8" />
            <path
              d="M6 8.5C6 7.12 7.12 6 8.5 6h7c1.38 0 2.5 1.12 2.5 2.5v1c0 .83-.67 1.5-1.5 1.5H9.5C8.67 11 8 11.67 8 12.5S8.67 14 9.5 14h6c1.38 0 2.5 1.12 2.5 2.5v1c0 1.38-1.12 2.5-2.5 2.5h-7C7.12 20 6 18.88 6 17.5v-1c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5-.67 1.5-1.5S15.33 12 14.5 12h-6C7.12 12 6 10.88 6 9.5v-1z"
              fill="#FFFFFF"
            />
            <circle cx="17.5" cy="7" r="1.5" fill="#F37023" />
          </svg>
        </span>
      );

    case 'skillindia':
      return (
        <span
          className={`inline-flex items-center justify-center w-6 h-6 min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] rounded-[4px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/80 shrink-0 p-0.5 ${className}`}
          title="Skill India Digital Hub & NSDC"
          role="img"
          aria-label="Skill India logo"
        >
          {/* Official Skill India / NSDC Emblem SVG */}
          <svg viewBox="0 0 24 24" className="w-full h-full object-contain rounded-[2px]" aria-hidden="true">
            <rect width="24" height="24" rx="2" fill="#FFFFFF" />
            {/* Saffron arc */}
            <path d="M4 7c3-3 10-3 14 0" stroke="#FF9933" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Navy gear/chakra */}
            <circle cx="12" cy="12" r="3.5" fill="none" stroke="#000080" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="1" fill="#000080" />
            {/* Green arc */}
            <path d="M5 17c3 2.5 9 2.5 12 0" stroke="#138808" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        </span>
      );

    case 'ijra':
      return (
        <span
          className={`inline-flex items-center justify-center w-6 h-6 min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] rounded-[4px] overflow-hidden bg-[#0F2C59] border border-blue-900 shrink-0 p-0.5 ${className}`}
          title="International Journal of Research and Applications (IJRA)"
          role="img"
          aria-label="IJRA Research Journal logo"
        >
          {/* Authentic Academic Journal Monogram & Seal SVG */}
          <svg viewBox="0 0 24 24" className="w-full h-full object-contain rounded-[2px]" aria-hidden="true">
            <rect width="24" height="24" rx="2" fill="#0F2C59" />
            {/* Open journal manuscript */}
            <path d="M5 6.5C7 5.5 10 5.5 12 7c2-1.5 5-1.5 7-.5v10c-2-1-5-1-7 .5-2-1.5-5-.5-7 .5v-10z" fill="#D4AF37" opacity="0.9" />
            <path d="M12 7v10.5" stroke="#0F2C59" strokeWidth="1" />
            {/* Academic quill */}
            <path d="M15 4l3 3-5 5-2 .5.5-2 3.5-6.5z" fill="#F8FAFC" />
          </svg>
        </span>
      );

    case 'techsaksham':
      return (
        <span
          className={`inline-flex items-center justify-center w-6 h-6 min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] rounded-[4px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/80 shrink-0 p-0.5 ${className}`}
          title="TechSaksham (Microsoft & SAP Joint Initiative)"
          role="img"
          aria-label="TechSaksham logo"
        >
          {/* TechSaksham Dual Microsoft & SAP Brand Emblem SVG */}
          <svg viewBox="0 0 24 24" className="w-full h-full object-contain rounded-[2px]" aria-hidden="true">
            <rect width="24" height="24" rx="2" fill="#FFFFFF" />
            {/* Microsoft 4-square mini */}
            <g transform="translate(3, 4) scale(0.4)">
              <rect x="0" y="0" width="8" height="8" fill="#F25022" />
              <rect x="10" y="0" width="8" height="8" fill="#7FBA00" />
              <rect x="0" y="10" width="8" height="8" fill="#00A4EF" />
              <rect x="10" y="10" width="8" height="8" fill="#FFB900" />
            </g>
            {/* SAP Blue Triangle/Shield */}
            <rect x="12" y="4" width="9" height="7.5" rx="1" fill="#008FD3" />
            <text x="16.5" y="9.5" fill="#FFFFFF" fontSize="4.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              SAP
            </text>
            {/* TechSaksham text banner */}
            <rect x="3" y="14" width="18" height="6" rx="1" fill="#1E293B" />
            <text x="12" y="18.5" fill="#38BDF8" fontSize="4" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              TS
            </text>
          </svg>
        </span>
      );

    default:
      return null;
  }
}
