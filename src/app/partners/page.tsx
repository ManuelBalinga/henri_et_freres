import type { Metadata } from "next";
import { PartnersView } from "./PartnersView";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Cameroon's distribution backbone. Henri & Frères offers manufacturers, suppliers and retailers a single, accountable route to the national market.",
};

export default function PartnersPage() {
  return <PartnersView />;
}
