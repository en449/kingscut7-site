import type { Metadata } from "next"
import { Barlow_Condensed, Space_Grotesk, Inter } from "next/font/google"
import ScrollReset from "@/components/ScrollReset"
import "./globals.css"

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
})

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://kingscut7.de"),
  title: "KINGSCUT7 — Barbershop Hannover | Berliner Allee 62",
  description:
    "KINGSCUT7 – Barbershop in Hannover. Haarschnitt ab 18€, Haare & Bart 30€, Kinderhaarschnitt 15€. ⭐ 5,0 Sterne auf Google. Berliner Allee 62, 30175 Hannover. Mo–Sa 09–19 Uhr. Termin per WhatsApp.",
  keywords: [
    "Barbershop Hannover",
    "Herrenfriseur Hannover",
    "Haarschnitt Hannover",
    "Fade Hannover",
    "Bartpflege Hannover",
    "Kinderhaarschnitt Hannover",
    "KINGSCUT7",
    "Friseur Berliner Allee",
    "Barbershop Mitte Hannover",
    "Herrenhaarschnitt Hannover",
  ],
  alternates: {
    canonical: "https://kingscut7.de",
  },
  openGraph: {
    title: "KINGSCUT7 — Barbershop Hannover",
    description:
      "Barbershop in Hannover. Haarschnitt ab 18€. ⭐ 5,0 Sterne. Berliner Allee 62. Mo–Sa 09–19 Uhr. Termin per WhatsApp.",
    url: "https://kingscut7.de",
    siteName: "KINGSCUT7",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "geo.region": "DE-NI",
    "geo.placename": "Hannover",
    "geo.position": "52.3703;9.7371",
    "ICBM": "52.3703, 9.7371",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "KINGSCUT7",
  description:
    "Barbershop in Hannover. Haarschnitte, Fade, Bartpflege und Augenbrauen. Präzision für Männer.",
  url: "https://kingscut7.de",
  telephone: "+4951133772496",
  priceRange: "€€",
  image: "https://kingscut7.de/images/KINGSCUT7_Logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Berliner Allee 62",
    addressLocality: "Hannover",
    postalCode: "30175",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.3703,
    longitude: 9.7371,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "11",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Haarschnitt" }, price: "18", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Haare & Bart" }, price: "30", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kinderhaarschnitt" }, price: "15", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bart" }, price: "12", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Augenbrauen" }, price: "5", priceCurrency: "EUR" },
    ],
  },
  sameAs: [
    "https://www.instagram.com/kings.cut7/",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${barlow.variable} ${space.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <ScrollReset />
        {children}
      </body>
    </html>
  )
}
