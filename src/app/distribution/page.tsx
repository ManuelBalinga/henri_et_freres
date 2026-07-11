import type { Metadata } from "next";
import { DistributionView } from "./DistributionView";

export const metadata: Metadata = {
  title: "Distribution & Logistics",
  description:
    "Inside the Henri & Frères logistics network — eight regional hubs, structured warehousing, a modern delivery fleet and a supply chain that connects Cameroon's port to its last mile.",
};

export default function DistributionPage() {
  return <DistributionView />;
}
