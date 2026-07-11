"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, PlayCircle, MapPin } from "lucide-react";
import { useI18n } from "@/components/providers";
import { useContent } from "@/lib/content";
import { Counter } from "@/components/ui/Counter";

const words = (s: string) => s.split(" ");

export function Hero() {
  const { t } = useI18n();
  const c = useContent();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.62, 0.9]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-950 pb-16 pt-32 text-white">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2400&auto=format&fit=crop"
          alt="Distribution warehouse and logistics operations"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          {t("hero.eyebrow")}
        </motion.div>

        <h1 className="display-1 max-w-5xl text-balance">
          {words(t("hero.title")).map((w, i) => (
            <span key={i} className="mr-[0.28em] inline-block overflow-hidden align-top">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-navy-100/85"
        >
          {t("hero.sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/distribution"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-gold transition hover:-translate-y-0.5 hover:bg-gold-400"
          >
            {t("cta.explore")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
          >
            <PlayCircle className="h-5 w-5 text-gold-400" />
            {t("cta.discover")}
          </Link>
        </motion.div>

        {/* stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur sm:grid-cols-4"
        >
          {[
            { v: 1993, s: "" },
            { v: 8, s: "" },
            { v: 300, s: "+" },
            { v: 25, s: "K+" },
          ].map((it, i) => (
            <div key={i} className="bg-navy-950/40 px-5 py-5">
              <p className="font-display text-3xl text-white md:text-4xl">
                <Counter value={it.v} suffix={it.s} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-navy-200/70">{c.home.heroStats[i].label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 right-6 hidden items-center gap-2 text-xs uppercase tracking-widest text-navy-200/70 lg:flex"
      >
        <MapPin className="h-4 w-4 text-gold-400" />
        Yaoundé · {c.common.country}
      </motion.div>
    </section>
  );
}
