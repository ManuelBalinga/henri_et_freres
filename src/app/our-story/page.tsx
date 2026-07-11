import type { Metadata } from "next";
import { OurStoryView } from "./OurStoryView";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "From a single storefront in Yaoundé in 1993 to a nationwide distribution platform — the story of how Henri & Frères became part of Cameroon's everyday life.",
};

export default function OurStoryPage() {
  return <OurStoryView />;
}
