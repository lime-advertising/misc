export default function ServiceAbstract({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 800"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-silver-start)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--brand-silver-end)" stopOpacity="0.05" />
        </linearGradient>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M60 0H0V60" fill="none" stroke="currentColor" opacity="0.06" strokeWidth="1" />
        </pattern>
        <linearGradient id="goldBar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-gold-start)" stopOpacity="0.0" />
          <stop offset="30%" stopColor="var(--brand-gold-start)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--brand-gold-end)" stopOpacity="0.0" />
        </linearGradient>
        <radialGradient id="glow" cx="0.85" cy="0.15" r="0.5">
          <stop offset="0%" stopColor="var(--brand-gold-start)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--brand-gold-end)" stopOpacity="0" />
        </radialGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="30" /></filter>
      </defs>

      <rect x="0" y="0" width="1200" height="800" fill="url(#bg)" />
      <rect x="0" y="0" width="1200" height="800" fill="url(#grid)" />

      {/* Gold accent glow top-right */}
      <circle cx="980" cy="80" r="220" fill="url(#glow)" filter="url(#blur)" />

      {/* Diagonal gold bar */}
      <g transform="translate(150,100) rotate(-15)">
        <rect x="0" y="0" width="900" height="14" fill="url(#goldBar)" />
        <rect x="120" y="40" width="680" height="10" fill="url(#goldBar)" opacity="0.7" />
      </g>

      {/* Concentric rings */}
      <g opacity="0.25" stroke="var(--brand-silver-start)" fill="none" strokeWidth="1.5">
        <circle cx="920" cy="220" r="40" />
        <circle cx="920" cy="220" r="80" opacity="0.7" />
        <circle cx="920" cy="220" r="140" opacity="0.4" />
      </g>

      {/* Mock window card */}
      <g opacity="0.35" transform="translate(160,220)">
        <rect x="0" y="0" rx="18" ry="18" width="360" height="240" fill="none" stroke="currentColor" />
        <circle cx="26" cy="28" r="4" fill="currentColor" opacity="0.6" />
        <circle cx="46" cy="28" r="4" fill="currentColor" opacity="0.6" />
        <circle cx="66" cy="28" r="4" fill="currentColor" opacity="0.6" />
        <rect x="26" y="58" width="308" height="12" rx="6" fill="currentColor" opacity="0.35" />
        <rect x="26" y="86" width="268" height="12" rx="6" fill="currentColor" opacity="0.28" />
        <rect x="26" y="114" width="220" height="12" rx="6" fill="currentColor" opacity="0.22" />
      </g>
    </svg>
  );
}
