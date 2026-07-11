"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useContent } from "@/lib/content";

export function TimelinePreview() {
  const t = useContent().home.timeline;
  return (
    <Section className="bg-[var(--bg-elev)]">
      <SectionHeading align="center" eyebrow={t.eyebrow} title={t.title} intro={t.intro} className="mb-16" />
      <Timeline />
      <Reveal>
        <div className="mt-16 flex justify-center">
          <Button href="/our-story" variant="navy">{t.cta}</Button>
        </div>
      </Reveal>
    </Section>
  );
}
