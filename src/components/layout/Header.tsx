"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search as SearchIcon, Moon, Sun, ChevronDown, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useI18n, useTheme } from "@/components/providers";
import { primaryNav, secondaryNav } from "@/lib/data";
import { SearchDialog } from "./SearchDialog";

const navKey: Record<string, string> = {
  "/about": "nav.about",
  "/products": "nav.products",
  "/brands": "nav.brands",
  "/distribution": "nav.distribution",
  "/services": "nav.services",
  "/partners": "nav.partners",
  "/our-story": "nav.ourStory",
  "/news": "nav.news",
  "/careers": "nav.careers",
  "/csr": "nav.csr",
  "/contact": "nav.contact",
};

export function Header() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "glass-light dark:glass border-b py-3"
            : "border-b border-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-gold-600 dark:text-gold-400" : "hover:text-gold-600 dark:hover:text-gold-400"
                  }`}
                >
                  {t(navKey[item.href] ?? item.label)}
                  {active && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute inset-x-4 -bottom-0.5 h-px bg-gold-500"
                    />
                  )}
                </Link>
              );
            })}

            <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
              <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-gold-600 dark:hover:text-gold-400">
                {t("footer.explore")}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full w-60 pt-3"
                  >
                    <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)] p-2 shadow-lift">
                      {secondaryNav.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition hover:bg-gold-500/10"
                        >
                          {t(navKey[item.href] ?? item.label)}
                          <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="rounded-full p-2.5 transition hover:bg-current/5"
            >
              <SearchIcon className="h-[1.15rem] w-[1.15rem]" />
            </button>

            <div className="hidden items-center rounded-full border border-[var(--line)] p-0.5 text-xs font-semibold sm:flex">
              {(["en", "fr"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-2.5 py-1 uppercase transition ${
                    lang === l ? "bg-navy-900 text-white dark:bg-white dark:text-navy-950" : "text-[var(--fg-muted)]"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button onClick={toggle} aria-label="Toggle theme" className="rounded-full p-2.5 transition hover:bg-current/5">
              {theme === "dark" ? <Sun className="h-[1.15rem] w-[1.15rem]" /> : <Moon className="h-[1.15rem] w-[1.15rem]" />}
            </button>

            <Link
              href="/contact"
              className="ml-1 hidden rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-gold transition hover:-translate-y-0.5 hover:bg-gold-400 md:inline-flex"
            >
              {t("cta.partner")}
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
              className="rounded-full p-2.5 transition hover:bg-current/5 lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--bg)] pt-24 lg:hidden"
          >
            <nav className="container flex flex-col gap-1 pb-10">
              {[...primaryNav, ...secondaryNav].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between border-b border-[var(--line)] py-4 font-display text-2xl"
                  >
                    {t(navKey[item.href] ?? item.label)}
                    <ArrowUpRight className="h-5 w-5 text-gold-500" />
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3.5 font-semibold text-navy-950"
              >
                {t("cta.partner")}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
