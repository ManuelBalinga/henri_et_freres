"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Truck, ShieldCheck, Network, LineChart } from "lucide-react";
import { useContent } from "@/lib/content";

const icons = [Truck, ShieldCheck, Network, LineChart];

export function WhyChoose() {
  const t = useContent().home.why;
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
          <Reveal delay={0.15}>
            <div className="relative mt-10 hidden aspect-[16/11] overflow-hidden rounded-3xl lg:block">
              <Image
                src="https://images.unsplash.com/photo-1601599963565-b7f49deb352a?q=80&w=1600&auto=format&fit=crop"
                alt={t.imageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {t.reasons.map((r, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
                className="group card-surface rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950 dark:bg-white/10">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-4xl text-[var(--line)] transition-colors group-hover:text-gold-500/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl text-navy-900 dark:text-white">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{r.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
