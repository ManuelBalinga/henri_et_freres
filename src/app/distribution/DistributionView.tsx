"use client";

import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { CameroonMap } from "@/components/ui/CameroonMap";
import { CtaBand } from "@/components/ui/CtaBand";
import { branches } from "@/lib/data";
import { useContent } from "@/lib/content";
import { Ship, Warehouse, Truck, Store, ArrowRight, MapPin } from "lucide-react";

const capacityValues = [
  { value: 8, suffix: "" },
  { value: 25000, suffix: "+" },
  { value: 10, suffix: "" },
  { value: 99.2, suffix: "%", decimals: 1 },
];
const chainIcons = [Ship, Warehouse, Truck, Store];
const fleetValues = [
  { v: 99.2, s: "%", d: 1 },
  { v: 8, s: "" },
  { v: 48, s: "h" },
];
const fleet = [
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop",
];

export function DistributionView() {
  const c = useContent();
  const d = c.distribution;
  return (
    <>
      <PageHero breadcrumb={d.breadcrumb} eyebrow={d.eyebrow} title={d.title} intro={d.intro} />

      <Section>
        <Stagger className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {capacityValues.map((cap, i) => (
            <StaggerItem key={i}>
              <div className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elev)] p-8 text-center">
                <p className="font-display text-5xl font-light text-navy-900 dark:text-white">
                  <Counter value={cap.value} suffix={cap.suffix} decimals={cap.decimals ?? 0} />
                </p>
                <p className="mt-3 text-sm font-medium">{d.capacity[i].label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <section className="relative overflow-hidden bg-navy-950 py-24 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:60px_60px] opacity-25" />
        <div className="container relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal><Eyebrow>{d.mapEyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 mt-5 text-white">{d.mapTitle}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-100/80">{d.mapIntro}</p>
            </Reveal>
            <div className="mt-9 space-y-2.5">
              {branches.map((br, i) => (
                <Reveal key={br.city} delay={0.1 + i * 0.05}>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <MapPin className={`h-5 w-5 ${br.hub ? "text-gold-400" : "text-navy-300"}`} />
                      <div>
                        <p className="font-semibold">{br.city}</p>
                        <p className="text-xs text-navy-200/70">{c.data.branches[i].role}</p>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-navy-300">{c.data.branches[i].region}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <CameroonMap />
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow={d.howEyebrow} title={d.howTitle} intro={d.howIntro} />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {d.chain.map((step, i) => {
            const Icon = chainIcons[i];
            return (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative h-full rounded-3xl border border-[var(--line)] bg-[var(--bg-elev)] p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-900 text-gold-400 dark:bg-white/10">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-5 font-display text-5xl text-[var(--line)]">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-xl text-navy-900 dark:text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{step.text}</p>
                  {i < d.chain.length - 1 && (
                    <ArrowRight className="absolute -right-3.5 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-gold-500/50 lg:block" />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-[var(--bg-elev)]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal><Eyebrow>{d.fleetEyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 mt-5 text-navy-900 dark:text-white">{d.fleetTitle}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-[var(--fg-muted)]">{d.fleetBody}</p>
            </Reveal>
            <Stagger className="mt-8 grid grid-cols-3 gap-4">
              {fleetValues.map((m, i) => (
                <StaggerItem key={i}>
                  <div>
                    <p className="font-display text-3xl text-navy-900 dark:text-white">
                      <Counter value={m.v} suffix={m.s} decimals={m.d ?? 0} />
                    </p>
                    <p className="mt-1 text-xs text-[var(--fg-muted)]">{d.fleetMetrics[i].label}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-3xl">
                <Image src={fleet[0]} alt="Distribution fleet" fill className="object-cover" />
              </div>
              {fleet.slice(1).map((f, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={f} alt="Logistics operations" fill className="object-cover" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
