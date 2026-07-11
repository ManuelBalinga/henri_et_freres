"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, CornerDownLeft } from "lucide-react";
import { useI18n } from "@/components/providers";
import { useContent } from "@/lib/content";
import { primaryNav, secondaryNav, brands, categories } from "@/lib/data";

type Entry = { title: string; href: string; kind: string };

const navKey: Record<string, string> = {
  "/about": "nav.about", "/products": "nav.products", "/brands": "nav.brands",
  "/distribution": "nav.distribution", "/services": "nav.services", "/partners": "nav.partners",
  "/our-story": "nav.ourStory", "/news": "nav.news", "/careers": "nav.careers",
  "/csr": "nav.csr", "/contact": "nav.contact",
};

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, lang } = useI18n();
  const c = useContent();
  const [q, setQ] = useState("");

  const index: Entry[] = [
    { title: t("nav.home"), href: "/", kind: t("search.page") },
    ...primaryNav.map((n) => ({ title: t(navKey[n.href] ?? n.label), href: n.href, kind: t("search.page") })),
    ...secondaryNav.map((n) => ({ title: t(navKey[n.href] ?? n.label), href: n.href, kind: t("search.page") })),
    ...brands.map((b, i) => ({ title: b.name, href: `/brands#${b.slug}`, kind: c.data.brands[i].kind })),
    ...categories.map((cat, i) => ({ title: c.data.categories[i].name, href: `/products#${cat.slug}`, kind: t("search.category") })),
  ];

  useEffect(() => {
    if (!open) setQ("");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!q.trim()) return index.slice(0, 6);
    const term = q.toLowerCase();
    return index.filter((e) => e.title.toLowerCase().includes(term) || e.kind.toLowerCase().includes(term)).slice(0, 8);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, lang]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center px-4 pt-24 md:pt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[var(--bg-elev)] shadow-lift"
          >
            <div className="flex items-center gap-3 border-b border-[var(--line)] px-5">
              <Search className="h-5 w-5 text-[var(--fg-muted)]" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t("search.placeholder")}
                className="w-full bg-transparent py-4 text-base outline-none placeholder:text-[var(--fg-muted)]"
              />
              <button onClick={onClose} aria-label="Close search" className="rounded-md p-1.5 hover:bg-current/5">
                <X className="h-5 w-5text-[var(--fg-muted)]" />
              </button>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-[var(--fg-muted)]">No results for “{q}”.</li>
              )}
              {results.map((r) => (
                <li key={r.href + r.title}>
                  <Link
                    href={r.href}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-gold-500/10"
                  >
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold">{r.title}</span>
                      <span className="text-xs text-[var(--fg-muted)]">{r.kind}</span>
                    </span>
                    <CornerDownLeft className="h-4 w-4 text-[var(--fg-muted)] opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
