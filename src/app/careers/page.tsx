import type { Metadata } from "next";
import { CareersView } from "./CareersView";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career with Cameroon's distribution backbone. Explore open roles across commercial, logistics, supply chain and field teams at Henri & Frères.",
};

export default function CareersPage() {
  return <CareersView />;
}
