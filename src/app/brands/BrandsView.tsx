"use client";

import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { CtaBand } from "@/components/ui/CtaBand";
import { brands } from "@/lib/data";
import { useContent } from "@/lib/content";
import { Check, Truck } from "lucide-react";

const galleries = [
  "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?q=80&w=800&auto=format&fit=crop",
];

export function BrandsView() {
  const c = useContent();
  const b = c.brands;
  const indexed = brands.map((brand, i) => ({ brand, i, t: c.data.brands[i] }));
  const owned = indexed.filter((x) => x.brand.kind === "Owned brand");
  const partners = indexed.filter((x) => x.brand.kind === "Principal partner");

  return (
    <>
      <PageHero breadcrumb={b.breadcrumb} eyebrow={b.eyebrow} title={b.title} intro={b.intro} />

      <Section>
        <SectionHeading eyebrow={b.ownedEyebrow} title={b.ownedTitle} intro={b.ownedIntro} />
        <div className="mt-14 space-y-6">
          {owned.map(({ brand, i, t }, k) => (
            <Reveal key={brand.slug} delay={k * 0.06}>
              <div id={brand.slug} className="grid scroll-mt-28 gap-8 overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--bg-elev)] p-8 lg:grid-cols-[1.2fr_1fr] lg:p-10">
                <div>
                  <div className="flex items-center gap-4">
                    <BrandLogo name={brand.name} size="lg" />
                    <div>
                      <span className="rounded-full bg-gold-500/12 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                        {t.kind}
                      </span>
                      <h3 className="mt-2 font-display text-3xl text-navy-900 dark:text-white">{brand.name}</h3>
                    </div>
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-[var(--fg-muted)]">{t.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {t.products.map((p) => (
                      <span key={p} className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] px-3.5 py-1.5 text-sm">
                        <Check className="h-3.5 w-3.5 text-gold-500" /> {p}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--fg-muted)]">
                    <Truck className="h-4 w-4 text-gold-500" /> {b.distributedNote}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {galleries.map((g, gi) => (
                    <div key={gi} className={`relative overflow-hidden rounded-2xl ${gi === 0 ? "col-span-3 aspect-[16/9]" : "aspect-square"}`}>
                      <Image src={g} alt={`${brand.name}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-elev)]">
        <SectionHeading eyebrow={b.partnersEyebrow} title={b.partnersTitle} intro={b.partnersIntro} />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map(({ brand, t }) => (
            <StaggerItem key={brand.slug}>
              <div id={brand.slug} className="group flex h-full scroll-mt-28 flex-col rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-soft">
                <div className="flex items-center justify-between">
                  <BrandLogo name={brand.name} />
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--fg-muted)]">{t.category}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-navy-900 dark:text-white">{brand.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">{t.description}</p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--line)] pt-5">
                  {t.products.map((p) => (
                    <span key={p} className="rounded-full bg-current/5 px-3 py-1 text-xs font-medium">{p}</span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBand />
    </>
  );
}
