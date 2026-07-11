"use client";

import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { ApplicationForm } from "@/components/careers/ApplicationForm";
import { CtaBand } from "@/components/ui/CtaBand";
import { jobs } from "@/lib/data";
import { useContent } from "@/lib/content";
import { MapPin, Briefcase, TrendingUp, HeartHandshake, GraduationCap, ShieldCheck } from "lucide-react";

const benefitIcons = [TrendingUp, GraduationCap, HeartHandshake, ShieldCheck];
const cultureValues = [
  { v: 300, s: "+" },
  { v: 8, s: "" },
  { v: 30, s: "+" },
];

export function CareersView() {
  const c = useContent();
  const k = c.careers;
  return (
    <>
      <PageHero breadcrumb={k.breadcrumb} eyebrow={k.eyebrow} title={k.title} intro={k.intro} />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
                alt={k.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal><Eyebrow>{k.cultureEyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 mt-5 text-navy-900 dark:text-white">{k.cultureTitle}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--fg-muted)]">{k.cultureBody}</p>
            </Reveal>
            <Stagger className="mt-8 grid grid-cols-3 gap-4">
              {cultureValues.map((m, i) => (
                <StaggerItem key={i}>
                  <div>
                    <p className="font-display text-4xl text-navy-900 dark:text-white"><Counter value={m.v} suffix={m.s} /></p>
                    <p className="mt-1 text-xs text-[var(--fg-muted)]">{k.cultureStats[i].label}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--bg-elev)]">
        <SectionHeading eyebrow={k.benefitsEyebrow} title={k.benefitsTitle} />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {k.benefits.map((b, i) => {
            const IconCmp = benefitIcons[i];
            return (
              <StaggerItem key={b.title}>
                <div className="h-full rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-500/12 text-gold-600 dark:text-gold-400">
                    <IconCmp className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg text-navy-900 dark:text-white">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{b.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Section>
        <SectionHeading eyebrow={k.rolesEyebrow} title={k.rolesTitle} intro={k.rolesIntro} />
        <div className="mt-12 divide-y divide-[var(--line)] overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--bg-elev)]">
          {jobs.map((j, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <a href="#apply" className="group flex flex-col gap-3 p-6 transition hover:bg-gold-500/[0.05] sm:flex-row sm:items-center sm:justify-between md:px-8">
                <div>
                  <h3 className="font-display text-xl text-navy-900 dark:text-white">{c.data.jobs[i].title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-[var(--fg-muted)]">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold-500" />{c.data.jobs[i].location}</span>
                    <span className="inline-flex items-center gap-1.5"><Briefcase className="h-4 w-4 text-gold-500" />{c.data.jobs[i].type}</span>
                    <span className="rounded-full bg-current/5 px-3 py-1 text-xs">{c.data.jobs[i].team}</span>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold transition group-hover:border-gold-500 group-hover:text-gold-600 dark:group-hover:text-gold-400">
                  {c.common.applyNow}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="apply" className="bg-[var(--bg-elev)]">
        <div className="mx-auto max-w-2xl">
          <SectionHeading align="center" eyebrow={k.applyEyebrow} title={k.applyTitle} intro={k.applyIntro} className="mb-10" />
          <ApplicationForm />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
