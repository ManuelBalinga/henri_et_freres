"use client";

import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Icon } from "@/components/ui/Icon";
import { CtaBand } from "@/components/ui/CtaBand";
import { csrPillars } from "@/lib/data";
import { useContent } from "@/lib/content";

const impactValues = [
  { value: 25000, suffix: "+" },
  { value: 300, suffix: "+" },
  { value: 8, suffix: "" },
];

export function CsrView() {
  const c = useContent();
  const s = c.csr;
  return (
    <>
      <PageHero breadcrumb={s.breadcrumb} eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal><Eyebrow>{s.commitEyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 mt-5 text-navy-900 dark:text-white">{s.commitTitle}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--fg-muted)]">{s.commit1}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg leading-relaxed text-[var(--fg-muted)]">{s.commit2}</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop"
                alt={s.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-[var(--bg-elev)]">
        <SectionHeading eyebrow={s.focusEyebrow} title={s.focusTitle} />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
          {csrPillars.map((pillar, i) => (
            <StaggerItem key={i}>
              <div className="group flex h-full gap-6 rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-soft">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy-900 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-navy-950 dark:bg-white/10">
                  <Icon name={pillar.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl text-navy-900 dark:text-white">{c.data.csrPillars[i].title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{c.data.csrPillars[i].text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <section className="relative overflow-hidden bg-navy-950 py-24 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:60px_60px] opacity-25" />
        <div className="container relative">
          <SectionHeading light align="center" eyebrow={s.impactEyebrow} title={s.impactTitle} className="mb-16" />
          <Stagger className="grid gap-8 md:grid-cols-3">
            {impactValues.map((m, i) => (
              <StaggerItem key={i}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
                  <p className="font-display text-6xl font-light text-gold-400">
                    <Counter value={m.value} suffix={m.suffix} />
                  </p>
                  <p className="mx-auto mt-4 max-w-[20ch] text-navy-100/80">{s.impact[i].label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Section>
        <Reveal>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl font-light leading-snug text-navy-900 dark:text-white md:text-3xl">
              &ldquo;{s.quote}&rdquo;
            </p>
            <footer className="mt-8 text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
              {s.quoteBy}
            </footer>
          </blockquote>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
