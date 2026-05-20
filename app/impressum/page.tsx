import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Impressum — KINGSCUT7",
  robots: { index: false, follow: false },
}

export default function Impressum() {
  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      <div className="max-w-2xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-10 text-xs uppercase tracking-widest"
          style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-muted)" }}
        >
          ← Zurück
        </Link>

        <h1
          className="text-5xl font-black uppercase mb-12"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          IMPRESSUM
        </h1>

        <div className="flex flex-col gap-10" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)", lineHeight: 1.75, fontSize: "15px" }}>

          <section>
            <h2 className="text-sm uppercase tracking-widest mb-3 font-semibold" style={{ fontFamily: "var(--font-ui)", color: "var(--color-text)" }}>
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              {/* TODO: Inhaber vollständigen Namen eintragen */}
              [VOLLSTÄNDIGER NAME DES INHABERS]<br />
              Berliner Allee 62<br />
              30175 Hannover<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest mb-3 font-semibold" style={{ fontFamily: "var(--font-ui)", color: "var(--color-text)" }}>
              Kontakt
            </h2>
            <p>
              Telefon: <a href="tel:+4951133772496" style={{ color: "var(--color-neon)" }}>0511 33772496</a><br />
              E-Mail: <a href="mailto:[EMAIL]" style={{ color: "var(--color-neon)" }}>[EMAIL EINTRAGEN]</a>
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest mb-3 font-semibold" style={{ fontFamily: "var(--font-ui)", color: "var(--color-text)" }}>
              Steuernummer
            </h2>
            <p>
              Steuernummer: [STEUERNUMMER EINTRAGEN]<br />
              {/* USt-IdNr.: DE[USTIDNR] — wenn vorhanden */}
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest mb-3 font-semibold" style={{ fontFamily: "var(--font-ui)", color: "var(--color-text)" }}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              [VOLLSTÄNDIGER NAME]<br />
              Berliner Allee 62<br />
              30175 Hannover
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest mb-3 font-semibold" style={{ fontFamily: "var(--font-ui)", color: "var(--color-text)" }}>
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
              den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest mb-3 font-semibold" style={{ fontFamily: "var(--font-ui)", color: "var(--color-text)" }}>
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest mb-3 font-semibold" style={{ fontFamily: "var(--font-ui)", color: "var(--color-text)" }}>
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht.
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
