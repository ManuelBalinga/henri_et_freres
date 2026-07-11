import React from "react";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`eyebrow text-gold-600 dark:text-gold-400 ${className}`}>
      <span className="h-px w-8 bg-gold-500/60" />
      {children}
    </span>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, intro, align = "left", className = "", light = false }: HeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow className={align === "center" ? "justify-center" : ""}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`display-2 mt-5 text-balance ${light ? "text-white" : "text-navy-900 dark:text-white"}`}>{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className={`mt-5 text-lg leading-relaxed ${light ? "text-navy-100/80" : "text-[var(--fg-muted)]"}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 lg:py-32 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}
