import Link from "next/link";

export function Monogram({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Henri & Frères monogram">
      <rect width="48" height="48" rx="11" fill="url(#hf-g)" />
      <path
        d="M15 13v22M15 24h11M26 13v22"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M33 14h1.6c2.4 0 3.9 1.4 3.9 3.5S37 21 34.7 21H33v-7Z" fill="#c9a24b" />
      <circle cx="34" cy="31" r="2.2" fill="#c9a24b" />
      <defs>
        <linearGradient id="hf-g" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d1f44" />
          <stop offset="1" stopColor="#050d1f" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Henri & Frères — home">
      <Monogram className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[-4deg]" />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[1.2rem] font-medium tracking-tight ${
              light ? "text-white" : "text-navy-900 dark:text-white"
            }`}
          >
            Henri&nbsp;<span className="text-gold-500">&amp;</span>&nbsp;Frères
          </span>
          <span
            className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.28em] ${
              light ? "text-navy-100/70" : "text-[var(--fg-muted)]"
            }`}
          >
            Distribution · Cameroun
          </span>
        </span>
      )}
    </Link>
  );
}
