import type { Metadata } from "next"
import { Barlow_Condensed, Space_Grotesk, Inter } from "next/font/google"
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
  title: "KINGSCUT7 — Barbershop Hannover | Berliner Allee 62",
  description:
    "KINGSCUT7 – Hannover's präzisester Barbershop. Herrenhaarschnitte, Fade, Bartpflege. ⭐ 5.0 Sterne. Berliner Allee 62, 30175 Hannover. Termin per WhatsApp.",
  keywords: "Barbershop Hannover, Herrenfriseur Hannover, Fade Hannover, Bartpflege, Haarschnitt Hannover, KINGSCUT7",
  openGraph: {
    title: "KINGSCUT7 — Barbershop Hannover",
    description: "Hannover's präzisester Barbershop. ⭐ 5.0 Sterne. Berliner Allee 62. Termin per WhatsApp.",
    locale: "de_DE",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${barlow.variable} ${space.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
