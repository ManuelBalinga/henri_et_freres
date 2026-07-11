"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/components/providers";
import { useContent } from "@/lib/content";

export type NewsItem = {
  slug: string;
  date: string;
  tag: string;
  title: string;
  excerpt: string;
};

export function formatDate(d: string, lang: "en" | "fr" = "en") {
  return new Date(d).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  const { lang } = useI18n();
  const c = useContent();
  return (
    <Link
      href={`/news#${item.slug}`}
      className={`group flex flex-col justify-between rounded-3xl border border-[var(--line)] bg-[var(--bg-elev)] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lift ${
        featured ? "lg:p-10" : ""
      }`}
    >
      <div>
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full bg-gold-500/12 px-3 py-1 font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
            {item.tag}
          </span>
          <time className="text-[var(--fg-muted)]">{formatDate(item.date, lang)}</time>
        </div>
        <h3
          className={`mt-5 font-display text-navy-900 dark:text-white ${
            featured ? "text-3xl leading-tight" : "text-xl leading-snug"
          }`}
        >
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{item.excerpt}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 dark:text-gold-400">
        {c.common.readMore}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
