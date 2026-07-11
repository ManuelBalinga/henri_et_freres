import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React from "react";

type Variant = "gold" | "navy" | "ghost" | "outline";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const sizes = "px-6 py-3";

const variants: Record<Variant, string> = {
  gold: "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-gold hover:-translate-y-0.5",
  navy: "bg-navy-900 text-white hover:bg-navy-800 dark:bg-white dark:text-navy-950 dark:hover:bg-ivory hover:-translate-y-0.5",
  outline:
    "border border-current/20 text-current hover:bg-current/[0.06] backdrop-blur-sm",
  ghost: "text-current hover:text-gold-600 dark:hover:text-gold-400",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "gold", arrow = true, className = "" }: Props) {
  const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );
  const cls = `${base} ${sizes} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
