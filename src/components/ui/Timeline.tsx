"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContent } from "@/lib/content";

export function Timeline() {
  const timeline = useContent().data.timeline;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 60%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl">
      <div className="absolute left-[7px] top-2 h-full w-px bg-[var(--line)] md:left-1/2 md:-translate-x-1/2" />
      <motion.div
        style={{ height }}
        className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-gold-400 to-gold-600 md:left-1/2 md:-translate-x-1/2"
      />

      <div className="space-y-12">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={`relative pl-10 md:w-1/2 md:pl-0 ${
              i % 2 === 0 ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
            }`}
          >
            <span
              className={`absolute top-1 z-10 grid h-4 w-4 place-items-center rounded-full border-2 border-gold-500 bg-[var(--bg)] left-0 md:left-auto ${
                i % 2 === 0 ? "md:-right-2" : "md:-left-2"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            </span>
            <span className="font-display text-3xl text-gold-600 dark:text-gold-400">{item.year}</span>
            <h3 className="mt-2 font-display text-xl text-navy-900 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
