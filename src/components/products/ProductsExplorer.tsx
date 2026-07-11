"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Package } from "lucide-react";
import { categories } from "@/lib/data";
import { useContent } from "@/lib/content";

type Product = { name: string; category: string; slug: string; image: string };

export function ProductsExplorer() {
  const c = useContent();
  const [filter, setFilter] = useState<string>("all");

  const all: Product[] = useMemo(
    () =>
      categories.flatMap((cat, ci) =>
        c.data.categories[ci].items.map((name) => ({
          name,
          category: c.data.categories[ci].name,
          slug: cat.slug,
          image: cat.image,
        }))
      ),
    [c]
  );

  const shown = useMemo(
    () => (filter === "all" ? all : all.filter((p) => p.slug === filter)),
    [filter, all]
  );

  const tabs = [
    { slug: "all", name: c.common.allProducts },
    ...categories.map((cat, ci) => ({ slug: cat.slug, name: c.data.categories[ci].name })),
  ];

  return (
    <div>
      <div className="sticky top-20 z-30 -mx-4 mb-12 overflow-x-auto px-4 py-3 mask-fade-r">
        <div className="flex gap-2">
          {tabs.map((tb) => {
            const active = filter === tb.slug;
            return (
              <button
                key={tb.slug}
                onClick={() => setFilter(tb.slug)}
                className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                  active
                    ? "border-transparent bg-navy-900 text-white dark:bg-white dark:text-navy-950"
                    : "border-[var(--line)] text-[var(--fg-muted)] hover:border-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400"
                }`}
              >
                {tb.name}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.div
              layout
              key={p.slug + p.name}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--bg-elev)] transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent opacity-60" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900 backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <h3 className="font-display text-lg leading-tight text-navy-900 dark:text-white">{p.name}</h3>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-500/12 text-gold-600 dark:text-gold-400">
                  <Package className="h-5 w-5" />
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
