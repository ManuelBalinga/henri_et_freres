"use client";

import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Timeline } from "@/components/ui/Timeline";
import { Icon } from "@/components/ui/Icon";
import { CtaBand } from "@/components/ui/CtaBand";
import { values, stats } from "@/lib/data";
import { useContent } from "@/lib/content";
import { Target, Eye } from "lucide-react";

const leaderMeta = [
  { name: "Henri Tsakou Tiomela", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
  { name: "André Tsapi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
];

export function AboutView() {
  const c = useContent();
  const a = c.about;
  return (
    <>
      <PageHero breadcrumb={a.breadcrumb} eyebrow={a.eyebrow} title={a.title} intro={a.intro} />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card-surface flex h-full flex-col rounded-3xl p-9">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-500/12 text-gold-600 dark:text-gold-400">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl text-navy-900 dark:text-white">{a.missionLabel}</h3>
              <p className="mt-4 text-lg leading-relaxed text-[var(--fg-muted)]">{c.common.mission}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-surface flex h-full flex-col rounded-3xl p-9">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-900/5 text-navy-800 dark:bg-white/10 dark:text-gold-400">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl text-navy-900 dark:text-white">{a.visionLabel}</h3>
              <p className="mt-4 text-lg leading-relaxed text-[var(--fg-muted)]">{a.vision}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-[var(--bg-elev)]">
        <SectionHeading align="center" eyebrow={a.scaleEyebrow} title={a.scaleTitle} className="mb-14" />
        <Stagger className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.slice(0, 4).map((s, i) => (
            <StaggerItem key={i}>
              <div className="text-center">
                <p className="font-display text-5xl font-light text-navy-900 dark:text-white">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm font-medium">{c.data.stats[i].label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[5/6] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
                alt="Henri & Frères leadership and team"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal><Eyebrow>{a.approachEyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 mt-5 text-navy-900 dark:text-white">{a.approachTitle}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--fg-muted)]">{a.approach1}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg leading-relaxed text-[var(--fg-muted)]">{a.approach2}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--bg-elev)]">
        <SectionHeading eyebrow={a.valuesEyebrow} title={a.valuesTitle} intro={a.valuesIntro} />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <StaggerItem key={i}>
              <div className="group h-full rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-900 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-navy-950 dark:bg-white/10">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-xl text-navy-900 dark:text-white">{c.data.values[i].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{c.data.values[i].text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <SectionHeading eyebrow={a.leadershipEyebrow} title={a.leadershipTitle} intro={a.leadershipIntro} />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
          {leaderMeta.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--bg-elev)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-cover grayscale transition duration-700 group-hover:grayscale-0" />
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">{a.leaders[i].role}</p>
                  <h3 className="mt-2 font-display text-2xl text-navy-900 dark:text-white">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{a.leaders[i].bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-elev)]">
        <SectionHeading align="center" eyebrow={a.milestonesEyebrow} title={a.milestonesTitle} className="mb-16" />
        <Timeline />
      </Section>

      <CtaBand />
    </>
  );
}
