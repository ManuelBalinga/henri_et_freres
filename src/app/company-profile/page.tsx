import type { Metadata } from "next";
import { CompanyProfileView } from "./CompanyProfileView";

export const metadata: Metadata = {
  title: "Company Profile",
  description: "Download the Henri & Frères SARL company profile — key facts, leadership, brands and nationwide distribution network.",
};

export default function CompanyProfilePage() {
  return <CompanyProfileView />;
}
