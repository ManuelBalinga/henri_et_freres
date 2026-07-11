"use client";

import { Printer } from "lucide-react";
import { useContent } from "@/lib/content";

export function PrintButton() {
  const label = useContent().companyProfile.print;
  return (
    <button
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-gold transition hover:bg-gold-400"
    >
      <Printer className="h-4 w-4" />
      {label}
    </button>
  );
}
