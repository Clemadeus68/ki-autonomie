import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://lotseundmacher.nice-network.de";
const title = "be nice - Lotse & Macher";
const description =
  "KI-Lotse und Macher für den Mittelstand: Clemens Gutmann führt KI-Projekte von der Strategie bis zur Umsetzung, mit Förderung über BAFA und INQA.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "KI-Einführung Mittelstand",
    "KI-Beratung",
    "KI Management Mittelstand",
    "be nice Managementberatung",
    "Clemens Gutmann",
    "Multi-LLM-Plattform",
    "KI Förderung Beratung",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: title,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "be nice Managementberatung",
      founder: { "@type": "Person", name: "Clemens Gutmann" },
      url: siteUrl,
      telephone: "+49 621 33937106",
      email: "letstalk@nice-network.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Haardtstr. 22",
        postalCode: "68163",
        addressLocality: "Mannheim",
        addressCountry: "DE",
      },
      areaServed: "DE",
      description,
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: title,
      description,
      about: { "@id": `${siteUrl}/#organization` },
      inLanguage: "de-DE",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
