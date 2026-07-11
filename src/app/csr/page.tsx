import type { Metadata } from "next";
import { CsrView } from "./CsrView";

export const metadata: Metadata = {
  title: "Sustainability & Impact",
  description:
    "How Henri & Frères creates shared value across Cameroon — supporting livelihoods, investing in people, keeping classrooms stocked and operating responsibly.",
};

export default function CsrPage() {
  return <CsrView />;
}
