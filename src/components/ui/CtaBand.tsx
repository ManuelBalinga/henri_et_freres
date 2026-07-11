"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, Phone } from "lucide-react";
import { useI18n } from "@/components/providers";
import { useContent } from "@/lib/content";
import { company } from "@/lib/data";

export function CtaBand() {
  const { t } = useI18n();
  const cta = useContent().home.cta;
  return (
    <section className="container py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-8 py-16 text-white md:px-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:48px_48px] opacity-25" />
        <motion.div
          initial={{ opacity: 0.5, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-500/20 blur-[120px]"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow text-gold-400">
              <span className="h-px w-8 bg-gold-500/60" />
              {cta.eyebrow}
            </span>
            <h2 className="display-2 mt-5 max-w-2xl text-balance text-white">{cta.title}</h2>
            <p className="mt-6 max-w-lg text-lg text-navy-100/80">{cta.intro}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              className="group flex items-center justify-between rounded-2xl bg-gold-500 px-6 py-5 text-navy-950 transition hover:-translate-y-0.5 hover:bg-gold-400"
            >
              <span className="font-semibold">{t("cta.partner")}</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="group flex items-center justify-between rounded-2xl border border-white/15 px-6 py-5 transition hover:bg-white/5"
            >
              <span className="font-semibold">{company.phone}</span>
              <Phone className="h-5 w-5 text-gold-400" />
            </a>
            <Link
              href="/company-profile"
              className="group flex items-center justify-between rounded-2xl border border-white/15 px-6 py-5 transition hover:bg-white/5"
            >
              <span className="font-semibold">{t("cta.profile")}</span>
              <FileDown className="h-5 w-5 text-gold-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
