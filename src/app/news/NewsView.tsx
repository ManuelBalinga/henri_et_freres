"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { NewsList } from "@/components/news/NewsList";
import { CtaBand } from "@/components/ui/CtaBand";
import { useContent } from "@/lib/content";

export function NewsView() {
  const n = useContent().news;
  return (
    <>
      <PageHero breadcrumb={n.breadcrumb} eyebrow={n.eyebrow} title={n.title} intro={n.intro} />
      <Section>
        <NewsList />
      </Section>
      <CtaBand />
    </>
  );
}
