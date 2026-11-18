import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import PlanityWidget from "@/components/PlanityWidget"

export const metadata: Metadata = {
  // Keep the fallback page out of the index until the key is set in Vercel.
  ...(process.env.NEXT_PUBLIC_PLANITY_KEY ? {} : { robots: { index: false, follow: true } }),
  title: "Termin online buchen — KINGSCUT7 Hannover",
  description:
    "Termin bei KINGSCUT7 in Hannover online buchen: Leistung, Barber und Uhrzeit selbst wählen. Berliner Allee 62.",
  alternates: { canonical: "/termin" },
}

export default function Termin() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24" style={{ minHeight: "100svh" }}>
        <h1
          className="text-5xl md:text-6xl font-black uppercase mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          Termin buchen
        </h1>
        <p className="mb-10" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
          Leistung wählen, Barber wählen, Uhrzeit wählen — fertig. Die Buchung läuft über unseren
          Partner Planity; Details in der{" "}
          <a href="/datenschutz" className="underline">Datenschutzerklärung</a>.
        </p>
        <PlanityWidget />
      </main>
      <Footer />
    </>
  )
}
