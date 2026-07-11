"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { sectors } from "@/lib/data";
import { useContent } from "@/lib/content";

export function Sectors() {
  const c = useContent();
  const t = c.home.sectors;
  return (
    <Section>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
      <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((s, i) => (
          <StaggerItem key={s.name}>
            <div className="group flex items-center gap-5 rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-soft">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy-900/5 text-navy-800 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950 dark:bg-white/5 dark:text-gold-400">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <span className="font-display text-lg leading-tight text-navy-900 dark:text-white">{c.data.sectors[i]}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
