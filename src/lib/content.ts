"use client";

import { useI18n } from "@/components/providers";
import { en, type Content } from "./content.en";
import { fr } from "./content.fr";

export const content: Record<"en" | "fr", Content> = { en, fr };

/** Returns the full localized content tree for the active language. */
export function useContent(): Content {
  const { lang } = useI18n();
  return content[lang];
}
