"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CameroonMap } from "@/components/ui/CameroonMap";
import { branches } from "@/lib/data";
import { useContent } from "@/lib/content";

export function Coverage() {
  const t = useContent().home.coverage;
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:60px_60px] opacity-25" />
      <div className="pointer-events-none absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-gold-500/10 blur-[140px]" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-2 mt-5 text-balance text-white">{t.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-100/80">{t.intro}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {branches.map((b) => (
                <div
                  key={b.city}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-sm"
                >
                  <span className={`h-2 w-2 rounded-full ${b.hub ? "bg-gold-400" : "bg-navy-300"}`} />
                  <span className="font-medium">{b.city}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9">
              <Button href="/distribution" variant="gold">{t.cta}</Button>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CameroonMap />
        </motion.div>
      </div>
    </section>
  );
}
