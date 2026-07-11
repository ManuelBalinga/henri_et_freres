"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ProductsExplorer } from "@/components/products/ProductsExplorer";
import { CtaBand } from "@/components/ui/CtaBand";
import { categories } from "@/lib/data";
import { useContent } from "@/lib/content";

export function ProductsView() {
  const c = useContent();
  const p = c.products;
  return (
    <>
      <PageHero breadcrumb={p.breadcrumb} eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

      <Section>
        <SectionHeading eyebrow={p.browseEyebrow} title={p.browseTitle} intro={p.browseIntro} className="mb-4" />
        <div className="mt-10">
          <ProductsExplorer />
        </div>
      </Section>

      <Section className="bg-[var(--bg-elev)]">
        <SectionHeading align="center" eyebrow={p.byCategoryEyebrow} title={p.byCategoryTitle} className="mb-14" />
        <Stagger className="grid gap-5 md:grid-cols-2">
          {categories.map((cat, i) => (
            <StaggerItem key={cat.slug}>
              <div id={cat.slug} className="scroll-mt-28 rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl text-navy-900 dark:text-white">{c.data.categories[i].name}</h3>
                  <span className="text-sm text-[var(--fg-muted)]">{c.data.categories[i].items.length} {c.common.lines}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{c.data.categories[i].blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.data.categories[i].items.map((it) => (
                    <span key={it} className="rounded-full border border-[var(--line)] px-3.5 py-1.5 text-sm">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <p className="mt-10 text-center text-sm text-[var(--fg-muted)]">
            {p.note}{" "}
            <a href="/contact" className="font-semibold text-gold-600 underline-offset-4 hover:underline dark:text-gold-400">{c.common.talkToTeam}</a>
          </p>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
