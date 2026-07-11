"use client";

import { partnerLogos } from "@/lib/data";

export function BrandMarquee({ dark = false }: { dark?: boolean }) {
  const row = [...partnerLogos, ...partnerLogos];
  return (
    <div className="mask-fade-x overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-16 pr-16">
        {row.map((name, i) => (
          <span
            key={i}
            className={`select-none whitespace-nowrap font-display text-2xl font-medium tracking-tight transition-colors md:text-3xl ${
              dark ? "text-white/40 hover:text-white" : "text-navy-900/30 hover:text-navy-900 dark:text-white/30 dark:hover:text-white"
            }`}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
