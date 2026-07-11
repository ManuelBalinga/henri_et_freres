"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "./Section";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  breadcrumb?: string;
};

export function PageHero({ eyebrow, title, intro, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-36 pb-20 text-white md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:60px_60px] opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-navy-500/30 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-gold-500/10 blur-[130px]" />

      <div className="container relative">
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-xs uppercase tracking-[0.24em] text-navy-300"
          >
            {breadcrumb}
          </motion.p>
        )}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="display-1 mt-6 max-w-4xl text-balance"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-navy-100/80"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
