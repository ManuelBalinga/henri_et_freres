import type { Metadata } from "next";
import { AboutView } from "./AboutView";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 1993 and incorporated in 2004, Henri & Frères has grown from a single Yaoundé shop into one of Cameroon's leading FMCG distribution companies, employing 300+ people across eight regional hubs.",
};

export default function AboutPage() {
  return <AboutView />;
}
