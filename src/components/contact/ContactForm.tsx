"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useContent } from "@/lib/content";

const field =
  "w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-gold-500/60 focus:ring-2 focus:ring-gold-500/15";
const label = "mb-1.5 block text-sm font-medium";

export function ContactForm() {
  const f = useContent().forms.contact;
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1200);
  };

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-[var(--line)] bg-[var(--bg-elev)] p-10 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-emerald-500" />
        <h3 className="mt-6 font-display text-2xl text-navy-900 dark:text-white">{f.doneTitle}</h3>
        <p className="mx-auto mt-3 max-w-sm text-[var(--fg-muted)]">{f.doneBody}</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-gold-600 dark:text-gold-400">
          {f.another}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elev)] p-8 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="c-name">{f.name}</label>
          <input id="c-name" required className={field} placeholder={f.namePh} />
        </div>
        <div>
          <label className={label} htmlFor="c-company">{f.company}</label>
          <input id="c-company" className={field} placeholder={f.companyPh} />
        </div>
        <div>
          <label className={label} htmlFor="c-email">{f.email}</label>
          <input id="c-email" type="email" required className={field} placeholder={f.emailPh} />
        </div>
        <div>
          <label className={label} htmlFor="c-phone">{f.phone}</label>
          <input id="c-phone" className={field} placeholder="+237 …" />
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="c-type">{f.type}</label>
        <select id="c-type" required defaultValue="" className={field}>
          <option value="" disabled>{f.typePh}</option>
          {f.inquiries.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="c-msg">{f.message}</label>
        <textarea id="c-msg" rows={5} required className={field} placeholder={f.messagePh} />
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-[var(--fg-muted)]">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-gold-500" />
        {f.consent}
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-sm font-semibold text-navy-950 shadow-gold transition hover:bg-gold-400 disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {status === "loading" ? f.submitting : f.submit}
      </button>
    </form>
  );
}
