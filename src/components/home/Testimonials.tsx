"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { useContent } from "@/lib/content";

export function Testimonials() {
  const c = useContent();
  const testimonials = c.data.testimonials;
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: number) => {
    setDir(d);
    setI((v) => (v + d + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setI((v) => (v + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  const active = testimonials[i];

  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="container relative">
        <Reveal>
          <Eyebrow>{c.home.testimonials.eyebrow}</Eyebrow>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <Quote className="h-16 w-16 shrink-0 text-gold-500/40" />
          <div className="relative min-h-[13rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={i}
                custom={dir}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-display text-2xl font-light leading-snug text-balance md:text-[2.1rem]">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <span className="h-px w-10 bg-gold-500" />
                  <div>
                    <p className="font-semibold">{active.name}</p>
                    <p className="text-sm text-navy-200/70">{active.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3">
          <button onClick={() => go(-1)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:bg-white/10">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button onClick={() => go(1)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:bg-white/10">
            <ArrowRight className="h-5 w-5" />
          </button>
          <div className="ml-4 flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setDir(idx > i ? 1 : -1); setI(idx); }}
                aria-label={`Testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold-500" : "w-1.5 bg-white/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
