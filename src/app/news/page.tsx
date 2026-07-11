import type { Metadata } from "next";
import { NewsView } from "./NewsView";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "The latest from Henri & Frères — network expansion, partnership news, operational milestones and updates from across our nationwide distribution business.",
};

export default function NewsPage() {
  return <NewsView />;
}
