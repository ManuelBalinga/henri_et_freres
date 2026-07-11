import type { Metadata } from "next";
import { ServicesView } from "./ServicesView";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end distribution services from Henri & Frères — nationwide route-to-market, importation, warehousing, retail execution and trade insight for manufacturers and retailers.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
