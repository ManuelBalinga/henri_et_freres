"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { categories } from "@/lib/data";
import { useContent } from "@/lib/content";

export function Categories() {
  const c = useContent();
  const t = c.home.categories;
  return (
    <Section>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={<>{t.titleLead} <span className="text-gradient-gold">{t.titleAccent}</span></>}
          intro={t.intro}
        />
        <div className="hidden md:block">
          <Button href="/products" variant="navy">{c.common.allProducts}</Button>
        </div>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/products#${cat.slug}`}
              className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-3xl border border-[var(--line)]"
            >
              <Image
                src={cat.image}
                alt={c.data.categories[i].name}
                fill
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent transition-opacity duration-500 group-hover:from-navy-950" />
              <div className="relative p-7 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl">{c.data.categories[i].name}</h3>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition group-hover:bg-gold-500 group-hover:text-navy-950">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-navy-100/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {c.data.categories[i].blurb}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <Button href="/products" variant="navy">{c.common.allProducts}</Button>
      </div>
    </Section>
  );
}
