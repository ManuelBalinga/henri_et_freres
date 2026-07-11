"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { useContent } from "@/lib/content";

export function Intro() {
  const c = useContent();
  const t = c.home.intro;
  return (
    <section className="py-24 md:py-32">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1580983559367-4d1faf8b3a6d?q=80&w=1600&auto=format&fit=crop"
                alt="Warehouse team coordinating distribution"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            </div>
          </Reveal>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute -bottom-8 -right-4 w-56 rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)] p-6 shadow-lift md:-right-10"
          >
            <p className="font-display text-4xl text-navy-900 dark:text-white">
              <Counter value={99.2} decimals={1} suffix="%" />
            </p>
            <p className="mt-1 text-sm text-[var(--fg-muted)]">{t.statCaption}</p>
          </motion.div>
          <div className="pointer-events-none absolute -left-8 -top-8 -z-10 h-40 w-40 rounded-full bg-gold-500/20 blur-3xl" />
        </div>

        <div>
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-2 mt-5 text-balance text-navy-900 dark:text-white">{t.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-[var(--fg-muted)]">{t.body1}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-[var(--fg-muted)]">{t.body2}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/about" variant="navy">{c.common.ourStory}</Button>
              <Button href="/services" variant="outline" arrow={false}>{c.common.whatWeDo}</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
