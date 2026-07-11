"use client";

import Link from "next/link";
import { useState } from "react";
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, ArrowRight, Check } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useI18n } from "@/components/providers";
import { useContent } from "@/lib/content";
import { company, primaryNav, secondaryNav } from "@/lib/data";

const navKey: Record<string, string> = {
  "/about": "nav.about", "/products": "nav.products", "/brands": "nav.brands",
  "/distribution": "nav.distribution", "/services": "nav.services", "/partners": "nav.partners",
  "/our-story": "nav.ourStory", "/news": "nav.news", "/careers": "nav.careers",
  "/csr": "nav.csr", "/contact": "nav.contact",
};

export function Footer() {
  const { t } = useI18n();
  const c = useContent();
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100">
      <div className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:56px_56px] opacity-40" />
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="container relative py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-200/80">{c.common.mission}</p>
            <div className="mt-8 flex gap-3">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-navy-100 transition hover:border-gold-500/50 hover:bg-gold-500/10 hover:text-gold-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">{t("footer.company")}</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {primaryNav.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-navy-200/80 transition hover:text-white">
                    {t(navKey[i.href] ?? i.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">{t("footer.explore")}</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {secondaryNav.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-navy-200/80 transition hover:text-white">
                    {t(navKey[i.href] ?? i.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">{t("footer.newsletter")}</h4>
            <p className="mt-5 text-sm text-navy-200/80">{t("footer.newsletterSub")}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="mt-4 flex items-center gap-2 rounded-full border border-white/12 bg-white/5 p-1 pl-4 focus-within:border-gold-500/50"
            >
              <input
                type="email"
                required
                placeholder={t("footer.emailPlaceholder")}
                className="w-full bg-transparent text-sm outline-none placeholder:text-navy-300/60"
                aria-label="Email address"
              />
              <button
                type="submit"
                aria-label={t("footer.subscribe")}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-500 text-navy-950 transition hover:bg-gold-400"
              >
                {subscribed ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
            {subscribed && <p className="mt-2 text-xs text-gold-400">Thank you — you're on the list.</p>}

            <ul className="mt-8 space-y-3 text-sm text-navy-200/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {company.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-navy-300/70 md:flex-row">
          <p>
            © {new Date().getFullYear()} {company.legalName}. {t("footer.rights")}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/contact" className="hover:text-white">Privacy</Link>
            <Link href="/contact" className="hover:text-white">Terms</Link>
            <span className="hidden md:inline">Incorporated {company.incorporated} · Yaoundé</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
