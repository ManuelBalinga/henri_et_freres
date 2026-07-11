"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { branches, company } from "@/lib/data";
import { useContent } from "@/lib/content";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const detailMeta = [
  { icon: MapPin, value: company.address },
  { icon: Phone, value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
  { icon: Mail, value: company.email, href: `mailto:${company.email}` },
  { icon: Clock, value: null as string | null },
];

export function ContactView() {
  const c = useContent();
  const ct = c.contact;
  return (
    <>
      <PageHero breadcrumb={ct.breadcrumb} eyebrow={ct.eyebrow} title={ct.title} intro={ct.intro} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {detailMeta.map((d, i) => {
                const IconCmp = d.icon;
                const value = i === 3 ? ct.hoursValue : d.value!;
                return (
                  <Reveal key={i}>
                    <div className="h-full rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)] p-6">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-500/12 text-gold-600 dark:text-gold-400">
                        <IconCmp className="h-5 w-5" />
                      </span>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[var(--fg-muted)]">{ct.details[i].label}</p>
                      {d.href ? (
                        <a href={d.href} className="mt-1 block font-medium hover:text-gold-600 dark:hover:text-gold-400">{value}</a>
                      ) : (
                        <p className="mt-1 font-medium">{value}</p>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.1}>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-6 transition hover:bg-[#25D366]/15"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{ct.whatsappTitle}</p>
                  <p className="text-sm text-[var(--fg-muted)]">{ct.whatsappSub}</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--line)]">
                <iframe
                  title={ct.mapTitle}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=11.45%2C3.82%2C11.58%2C3.92&layer=mapnik&marker=3.8716%2C11.5170"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-[var(--bg-elev)]">
        <h2 className="font-display text-3xl text-navy-900 dark:text-white">{ct.locationsTitle}</h2>
        <p className="mt-3 max-w-2xl text-[var(--fg-muted)]">{ct.locationsIntro}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b, i) => (
            <Reveal key={b.city} delay={(i % 3) * 0.06}>
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl text-navy-900 dark:text-white">{b.city}</h3>
                  {b.hub && <span className="rounded-full bg-gold-500/12 px-3 py-1 text-xs font-semibold text-gold-600 dark:text-gold-400">{c.common.hub}</span>}
                </div>
                <p className="mt-2 text-sm text-[var(--fg-muted)]">{c.data.branches[i].role}</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-[var(--fg-muted)]">{c.data.branches[i].region} · {c.common.est} {b.established}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
