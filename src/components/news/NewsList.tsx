"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NewsCard, formatDate } from "@/components/ui/NewsCard";
import { news } from "@/lib/data";
import { useContent } from "@/lib/content";
import { useI18n } from "@/components/providers";

export function NewsList() {
  const c = useContent();
  const { lang } = useI18n();
  const [tag, setTag] = useState("__all");

  const items = useMemo(() => news.map((n, i) => ({ ...n, ...c.data.news[i] })), [c]);
  const [featured, ...rest] = items;

  const tags = ["__all", ...Array.from(new Set(rest.map((n) => n.tag)))];
  const shown = useMemo(
    () => (tag === "__all" ? rest : rest.filter((n) => n.tag === tag)),
    [tag, rest]
  );

  return (
    <div>
      <Link
        href={`/news#${featured.slug}`}
        id={featured.slug}
        className="group grid scroll-mt-28 overflow-hidden rounded-3xl border border-[var(--line)] bg-navy-950 text-white lg:grid-cols-2"
      >
        <div className="relative min-h-[16rem] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1600&auto=format&fit=crop)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-navy-950/20" />
        </div>
        <div className="flex flex-col justify-center p-10 lg:p-14">
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full bg-gold-500 px-3 py-1 font-semibold uppercase tracking-wider text-navy-950">
              {c.news.featured} · {featured.tag}
            </span>
            <time className="text-navy-200/80">{formatDate(featured.date, lang)}</time>
          </div>
          <h2 className="mt-6 font-display text-3xl leading-tight text-white md:text-4xl">{featured.title}</h2>
          <p className="mt-4 text-navy-100/80">{featured.excerpt}</p>
          <span className="mt-8 inline-flex items-center gap-2 font-semibold text-gold-400">
            {c.news.readStory} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>

      <div className="mt-14 flex flex-wrap gap-2">
        {tags.map((tg) => (
          <button
            key={tg}
            onClick={() => setTag(tg)}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              tag === tg
                ? "border-transparent bg-navy-900 text-white dark:bg-white dark:text-navy-950"
                : "border-[var(--line)] text-[var(--fg-muted)] hover:border-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400"
            }`}
          >
            {tg === "__all" ? c.news.all : tg}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((item) => (
            <motion.div
              layout
              key={item.slug}
              id={item.slug}
              className="scroll-mt-28"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <NewsCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
