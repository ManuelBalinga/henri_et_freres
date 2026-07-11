"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle, X, Send, Headphones } from "lucide-react";
import { useI18n } from "@/components/providers";
import { company } from "@/lib/data";

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function FloatingActions() {
  const { lang } = useI18n();
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waText =
    lang === "fr"
      ? "Bonjour Henri & Frères, je souhaite en savoir plus sur vos services de distribution."
      : "Hello Henri & Frères, I'd like to learn more about your distribution services.";

  return (
    <div className="no-print fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3">
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-[19rem] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)] shadow-lift"
          >
            <div className="flex items-center gap-3 bg-navy-900 px-4 py-3.5 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-500/20 text-gold-400">
                <Headphones className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Henri &amp; Frères Support</p>
                <p className="flex items-center gap-1.5 text-xs text-navy-200/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Typically replies within an hour
                </p>
              </div>
              <button onClick={() => setChatOpen(false)} className="ml-auto rounded-md p-1 hover:bg-white/10">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3 p-4">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-current/5 px-3.5 py-2.5 text-sm">
                {lang === "fr"
                  ? "Bienvenue chez Henri & Frères. Comment pouvons-nous vous aider ?"
                  : "Welcome to Henri & Frères. How can we help you today?"}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[var(--line)] py-1 pl-4 pr-1">
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--fg-muted)]"
                  placeholder={lang === "fr" ? "Écrivez un message…" : "Type a message…"}
                />
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(waText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-8 w-8 place-items-center rounded-full bg-gold-500 text-navy-950"
                >
                  <Send className="h-4 w-4" />
                </a>
              </div>
              <p className="text-center text-[0.68rem] text-[var(--fg-muted)]">
                {lang === "fr" ? "Propulsé par WhatsApp Business" : "Powered by WhatsApp Business"}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] bg-[var(--bg-elev)] text-[var(--fg)] shadow-soft transition hover:-translate-y-0.5 hover:text-gold-500"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(waText)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105"
      >
        <span className="absolute h-14 w-14 animate-ping rounded-full bg-[#25D366]/40" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>

      <button
        onClick={() => setChatOpen((v) => !v)}
        aria-label="Live chat"
        className="grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-white shadow-lift transition hover:scale-105 dark:bg-white dark:text-navy-950"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
