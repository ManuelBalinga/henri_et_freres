import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { Intro } from "@/components/home/Intro";
import { Categories } from "@/components/home/Categories";
import { Coverage } from "@/components/home/Coverage";
import { WhyChoose } from "@/components/home/WhyChoose";
import { TimelinePreview } from "@/components/home/TimelinePreview";
import { Sectors } from "@/components/home/Sectors";
import { Testimonials } from "@/components/home/Testimonials";
import { LatestNews } from "@/components/home/LatestNews";
import { CtaBand } from "@/components/ui/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <Intro />
      <Categories />
      <Coverage />
      <WhyChoose />
      <TimelinePreview />
      <Sectors />
      <Testimonials />
      <LatestNews />
      <CtaBand />
    </>
  );
}
