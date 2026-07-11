"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle2, Loader2 } from "lucide-react";
import { jobs } from "@/lib/data";
import { useContent } from "@/lib/content";

const field =
  "w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition focus:border-gold-500/60 focus:ring-2 focus:ring-gold-500/15";
const label = "mb-1.5 block text-sm font-medium";

export function ApplicationForm() {
  const f = useContent().forms.application;
  const localizedJobs = useContent().data.jobs;
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [fileName, setFileName] = useState<string>("");

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
        className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elev)] p-10 text-center"
      >
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
        <h3 className="mt-6 font-display text-2xl text-navy-900 dark:text-white">{f.doneTitle}</h3>
        <p className="mx-auto mt-3 max-w-md text-[var(--fg-muted)]">{f.doneBody}</p>
        <button onClick={() => { setStatus("idle"); setFileName(""); }} className="mt-6 text-sm font-semibold text-gold-600 dark:text-gold-400">
          {f.another}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elev)] p-8 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="fullname">{f.name}</label>
          <input id="fullname" required className={field} placeholder={f.namePh} />
        </div>
        <div>
          <label className={label} htmlFor="email">{f.email}</label>
          <input id="email" type="email" required className={field} placeholder={f.emailPh} />
        </div>
        <div>
          <label className={label} htmlFor="phone">{f.phone}</label>
          <input id="phone" className={field} placeholder="+237 …" />
        </div>
        <div>
          <label className={label} htmlFor="role">{f.role}</label>
          <select id="role" required className={field} defaultValue="">
            <option value="" disabled>{f.rolePh}</option>
            {jobs.map((j, i) => (
              <option key={j.title} value={j.title}>{localizedJobs[i].title} — {localizedJobs[i].location}</option>
            ))}
            <option value="general">{f.roleGeneral}</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="message">{f.message}</label>
        <textarea id="message" rows={4} className={field} placeholder={f.messagePh} />
      </div>

      <div className="mt-5">
        <label className={label}>{f.cv}</label>
        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-[var(--line)] bg-[var(--bg)] px-4 py-4 text-sm text-[var(--fg-muted)] transition hover:border-gold-500/50">
          <Upload className="h-5 w-5 text-gold-500" />
          {fileName || f.cvPh}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-[var(--fg-muted)]">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-gold-500" />
        {f.consent}
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-gold transition hover:bg-gold-400 disabled:opacity-70"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "loading" ? f.submitting : f.submit}
      </button>
    </form>
  );
}
