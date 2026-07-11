"use client";

import { Monogram } from "@/components/ui/Logo";
import { PrintButton } from "@/components/PrintButton";
import { company, branches, brands, categories, stats } from "@/lib/data";
import { useContent } from "@/lib/content";

export function CompanyProfileView() {
  const c = useContent();
  const p = c.companyProfile;
  const principal = brands
    .map((b, i) => ({ b, i }))
    .filter(({ b }) => b.kind === "Principal partner")
    .map(({ b }) => b.name)
    .join(", ");
  const owned = brands
    .map((b, i) => ({ b, i }))
    .filter(({ b }) => b.kind === "Owned brand")
    .map(({ b }) => b.name)
    .join(", ");

  return (
    <div className="print-page bg-[var(--bg)] pt-28 pb-20">
      <div className="container max-w-4xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[var(--fg-muted)]">{p.docLabel} · {new Date().getFullYear()}</p>
          <PrintButton />
        </div>

        <article className="rounded-3xl border border-[var(--line)] bg-[var(--bg-elev)] p-10 md:p-14">
          <header className="flex items-center gap-4 border-b border-[var(--line)] pb-8">
            <Monogram className="h-14 w-14" />
            <div>
              <h1 className="font-display text-3xl text-navy-900 dark:text-white">Henri &amp; Frères SARL</h1>
              <p className="text-sm text-[var(--fg-muted)]">{p.subtitle}</p>
            </div>
          </header>

          <section className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-400">{p.overview}</h2>
            <p className="mt-3 leading-relaxed text-[var(--fg-muted)]">{p.overviewBody} {c.common.mission}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-400">{p.keyFacts}</h2>
            <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {p.facts.map((f) => (
                <div key={f.label} className="flex flex-col border-b border-[var(--line)] pb-2">
                  <dt className="text-xs uppercase tracking-wide text-[var(--fg-muted)]">{f.label}</dt>
                  <dd className="text-sm font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-400">{p.atGlance}</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.slice(0, 4).map((s, i) => (
                <div key={s.label} className="rounded-xl border border-[var(--line)] p-4 text-center">
                  <p className="font-display text-2xl text-navy-900 dark:text-white">
                    {s.value.toLocaleString()}{s.suffix}
                  </p>
                  <p className="mt-1 text-xs text-[var(--fg-muted)]">{c.data.stats[i].label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-400">{p.brandsTitle}</h2>
            <p className="mt-3 text-sm text-[var(--fg-muted)]">
              <strong className="text-[var(--fg)]">{p.principalLabel}</strong> {principal}.
            </p>
            <p className="mt-2 text-sm text-[var(--fg-muted)]">
              <strong className="text-[var(--fg)]">{p.ownedLabel}</strong> {owned}.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-400">{p.categoriesTitle}</h2>
            <p className="mt-3 text-sm text-[var(--fg-muted)]">{categories.map((_, i) => c.data.categories[i].name).join(" · ")}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600 dark:text-gold-400">{p.networkTitle}</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {branches.map((b, i) => (
                <li key={b.city} className="flex items-baseline justify-between border-b border-[var(--line)] pb-1.5 text-sm">
                  <span className="font-medium">{b.city}</span>
                  <span className="text-xs text-[var(--fg-muted)]">{c.data.branches[i].region}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-2xl bg-navy-950 p-6 text-white">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">{p.contactTitle}</h2>
            <div className="mt-3 grid gap-1 text-sm text-navy-100/90">
              <p>{company.address}</p>
              <p>{company.phone} · {company.email}</p>
              <p>henrietfreres.com</p>
            </div>
          </section>

          <footer className="mt-8 text-center text-xs text-[var(--fg-muted)]">
            © {new Date().getFullYear()} {company.legalName}. {p.rights}
          </footer>
        </article>
      </div>
    </div>
  );
}
