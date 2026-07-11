"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { useI18n } from "@/components/providers";

export function CookieBanner() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!localStorage.getItem("hf-cookie")) setShow(true);
    }, 1400);
    return () => clearTimeout(t);
  }, []);

  const dismiss = (choice: "all" | "essential") => {
    localStorage.setItem("hf-cookie", choice);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="no-print fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-2xl md:left-6 md:right-auto md:mx-0"
        >
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)] p-5 shadow-lift sm:flex-row sm:items-center">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-600 dark:text-gold-400">
              <Cookie className="h-5 w-5" />
            </span>
            <p className="text-sm text-[var(--fg-muted)]">{t("cookie.text")}</p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={() => dismiss("essential")}
                className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold transition hover:bg-current/5"
              >
                {t("cookie.essential")}
              </button>
              <button
                onClick={() => dismiss("all")}
                className="rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-800 dark:bg-white dark:text-navy-950"
              >
                {t("cookie.accept")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
