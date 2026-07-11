"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { BrandMarquee } from "@/components/ui/BrandMarquee";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { partnerLogos } from "@/lib/data";
import { useContent } from "@/lib/content";
import { Factory, Building2, Store, Globe2, Check } from "lucide-react";

const typeIcons = [Globe2, Factory, Store, Building2];

export function PartnersView() {
  const c = useContent();
  const p = c.partners;
  return (
    <>
      <PageHero breadcrumb={p.breadcrumb} eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

      <Section>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[var(--fg-muted)]">
          {p.logosNote}
        </p>
        <div className="mt-8">
          <BrandMarquee />
        </div>
        <Stagger className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-4">
          {partnerLogos.map((name) => (
            <StaggerItem key={name}>
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)] px-5 py-3">
                <BrandLogo name={name} />
                <span className="font-display text-lg text-navy-900 dark:text-white">{name}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-[var(--bg-elev)]">
        <SectionHeading eyebrow={p.whoEyebrow} title={p.whoTitle} intro={p.whoIntro} />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
          {p.types.map((pt, i) => {
            const IconCmp = typeIcons[i];
            return (
              <StaggerItem key={pt.title}>
                <div className="group flex gap-5 rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-soft">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy-900 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-navy-950 dark:bg-white/10">
                    <IconCmp className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-navy-900 dark:text-white">{pt.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{pt.text}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal><Eyebrow>{p.commitEyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 mt-5 text-navy-900 dark:text-white">{p.commitTitle}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--fg-muted)]">{p.commitBody}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8">
                <Button href="/contact" variant="navy">{c.common.startConversation}</Button>
              </div>
            </Reveal>
          </div>
          <Stagger className="space-y-3">
            {p.promises.map((pr) => (
              <StaggerItem key={pr}>
                <div className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)] p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-500/12 text-gold-600 dark:text-gold-400">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{pr}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
