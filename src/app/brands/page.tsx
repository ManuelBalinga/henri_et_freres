import type { Metadata } from "next";
import { BrandsView } from "./BrandsView";

export const metadata: Metadata = {
  title: "Brands",
  description:
    "Henri & Frères distributes leading brands including Unilever, Colgate, Chococam, Panzani, Peak and more — alongside our own labels, Henri and Two Cows.",
};

export default function BrandsPage() {
  return <BrandsView />;
}
