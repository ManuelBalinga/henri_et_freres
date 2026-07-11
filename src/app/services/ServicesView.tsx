"use client";

import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CtaBand } from "@/components/ui/CtaBand";
import { services } from "@/lib/data";
import { useContent } from "@/lib/content";
import { Check } from "lucide-react";

export function ServicesView() {
  const c = useContent();
  const s = c.services;
  return (
    <>
      <PageHero breadcrumb={s.breadcrumb} eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

      <Section>
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <StaggerItem key={i}>
              <div className="group flex h-full flex-col rounded-3xl border border-[var(--line)] bg-[var(--bg-elev)] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lift">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-navy-950 dark:bg-white/10">
                  <Icon name={svc.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl text-navy-900 dark:text-white">{c.data.services[i].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{c.data.services[i].desc}</p>
                <ul className="mt-6 space-y-2.5 border-t border-[var(--line)] pt-6">
                  {c.data.services[i].points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-navy-950 text-white">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1400&auto=format&fit=crop"
                alt={s.propImageAlt}
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal><Eyebrow>{s.propEyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 mt-5 text-white">{s.propTitle}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-navy-100/80">{s.propBody}</p>
            </Reveal>
            <Stagger className="mt-8 grid grid-cols-2 gap-4">
              {s.propBullets.map((t) => (
                <StaggerItem key={t}>
                  <div className="flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> {t}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
