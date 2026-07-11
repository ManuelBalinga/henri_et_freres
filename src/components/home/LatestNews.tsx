"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { NewsCard } from "@/components/ui/NewsCard";
import { news } from "@/lib/data";
import { useContent } from "@/lib/content";

export function LatestNews() {
  const c = useContent();
  const items = news.map((n, i) => ({ ...n, ...c.data.news[i] }));
  return (
    <Section className="bg-[var(--bg-elev)]">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading eyebrow={c.home.news.eyebrow} title={c.home.news.title} />
        <div className="hidden md:block">
          <Button href="/news" variant="navy">{c.common.allNews}</Button>
        </div>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {items.slice(0, 3).map((item, i) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <NewsCard item={item} />
          </motion.div>
        ))}
      </div>
      <div className="mt-10 md:hidden">
        <Button href="/news" variant="navy">{c.common.allNews}</Button>
      </div>
    </Section>
  );
}
