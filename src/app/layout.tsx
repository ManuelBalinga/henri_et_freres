import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { company } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const siteUrl = "https://henrietfreres.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Henri & Frères — Cameroon's Nationwide FMCG Distribution Network",
    template: "%s · Henri & Frères",
  },
  description:
    "Henri & Frères SARL is one of Cameroon's leading FMCG distribution and importation companies. Since 1993 we have moved trusted everyday brands to shelves nationwide through eight regional hubs and a network serving 25,000+ outlets.",
  keywords: [
    "FMCG distribution Cameroon",
    "wholesale distribution Cameroon",
    "Henri & Frères",
    "importation Cameroon",
    "route to market Cameroon",
    "consumer goods distributor Africa",
    "Yaoundé Douala distribution",
  ],
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "fr_FR",
    url: siteUrl,
    siteName: company.legalName,
    title: "Henri & Frères — Cameroon's Distribution Backbone",
    description:
      "Moving the everyday products Cameroon relies on — from port and factory to shelf and doorstep — through a disciplined nationwide network built since 1993.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henri & Frères — Cameroon's Distribution Backbone",
    description: "Nationwide FMCG distribution & importation across Cameroon since 1993.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl, languages: { "en-US": siteUrl, "fr-FR": `${siteUrl}/fr` } },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: "Henri & Frères",
  url: siteUrl,
  foundingDate: "1993",
  description:
    "Nationwide FMCG wholesale distribution and importation company serving Cameroon since 1993.",
  founder: { "@type": "Person", name: "Henri Tsakou Tiomela" },
  numberOfEmployees: { "@type": "QuantitativeValue", value: "300" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenue de l'Indépendance",
    addressLocality: "Yaoundé",
    addressCountry: "CM",
  },
  areaServed: { "@type": "Country", name: "Cameroon" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phone,
    contactType: "customer service",
    email: company.email,
    availableLanguage: ["English", "French"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <FloatingActions />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
