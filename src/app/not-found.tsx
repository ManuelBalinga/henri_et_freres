"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useContent } from "@/lib/content";

export default function NotFound() {
  const n = useContent().notFound;
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:60px_60px] opacity-25" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-gold-500/10 blur-[130px]" />
      <div className="container relative text-center">
        <p className="font-display text-[8rem] font-light leading-none text-gradient-gold md:text-[12rem]">404</p>
        <h1 className="display-2 mt-4 text-white">{n.title}</h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-navy-100/80">{n.body}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="gold">{n.home}</Button>
          <Link href="/contact" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10">
            {n.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
