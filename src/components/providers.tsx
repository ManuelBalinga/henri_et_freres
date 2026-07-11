"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { Lang, translate } from "@/lib/i18n";

/* ----------------------------- Theme ----------------------------- */
type Theme = "light" | "dark";
type ThemeCtx = { theme: Theme; toggle: () => void };
const ThemeContext = createContext<ThemeCtx>({ theme: "light", toggle: () => {} });
export const useTheme = () => useContext(ThemeContext);

/* --------------------------- Language ---------------------------- */
type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };
const LanguageContext = createContext<LangCtx>({ lang: "en", setLang: () => {}, t: (k) => k });
export const useI18n = () => useContext(LanguageContext);

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = (localStorage.getItem("hf-theme") as Theme | null) ?? null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = storedTheme ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    const storedLang = (localStorage.getItem("hf-lang") as Lang | null) ?? "en";
    setLangState(storedLang);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("hf-theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang;
    localStorage.setItem("hf-lang", lang);
  }, [lang, mounted]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const t = useCallback((key: string) => translate(key, lang), [lang]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
