"use client";

import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Timeline } from "@/components/ui/Timeline";
import { CtaBand } from "@/components/ui/CtaBand";
import { useContent } from "@/lib/content";

const s2Values = [
  { v: 1993, s: "" },
  { v: 2004, s: "" },
  { v: 8, s: "" },
  { v: 300, s: "+" },
];

export function OurStoryView() {
  const s = useContent().ourStory;
  return (
    <>
      <PageHero breadcrumb={s.breadcrumb} eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal><Eyebrow>{s.s1Eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 font-display text-2xl font-light leading-snug text-navy-900 dark:text-white md:text-3xl">
              {s.s1Quote}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-[var(--fg-muted)]">{s.s1Body}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mt-16 aspect-[16/8] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop"
              alt={s.imageAlt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
          </div>
        </Reveal>
      </Section>

      <Section className="bg-navy-950 text-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal><Eyebrow>{s.s2Eyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 mt-5 text-white">{s.s2Title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-navy-100/80">{s.s2Body}</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {s2Values.map((it, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center">
                  <p className="font-display text-4xl text-gold-400">
                    <Counter value={it.v} suffix={it.s} />
                  </p>
                  <p className="mt-2 text-sm text-navy-200/80">{s.s2Stats[i].label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal><Eyebrow>{s.s3Eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-lg leading-relaxed text-[var(--fg-muted)]">{s.s3Body1}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg leading-relaxed text-[var(--fg-muted)]">{s.s3Body2}</p>
          </Reveal>
        </div>

        <div className="mt-20">
          <Timeline />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
