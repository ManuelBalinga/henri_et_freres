"use client";

import { Counter } from "@/components/ui/Counter";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { BrandMarquee } from "@/components/ui/BrandMarquee";
import { stats } from "@/lib/data";
import { useContent } from "@/lib/content";

export function StatsBand() {
  const c = useContent();
  return (
    <section className="border-y border-[var(--line)] bg-[var(--bg-elev)]">
      <div className="container py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fg-muted)]">
          {c.home.stats.trusted}
        </p>
        <div className="mt-8">
          <BrandMarquee />
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <Stagger className="container grid grid-cols-2 gap-px overflow-hidden md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <StaggerItem key={i}>
              <div className="group px-2 py-10 text-center transition-colors">
                <p className="font-display text-4xl font-light text-navy-900 dark:text-white md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} decimals={(s as { decimals?: number }).decimals ?? 0} />
                </p>
                <p className="mx-auto mt-3 max-w-[12ch] text-sm font-medium leading-snug">{c.data.stats[i].label}</p>
                <p className="mt-1 text-xs text-[var(--fg-muted)]">{c.data.stats[i].sub}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
