import type { Metadata } from "next"
import Link from "next/link"
import CookieRevoke from "@/components/CookieRevoke"

export const metadata: Metadata = {
  title: "Datenschutzerklärung — KINGSCUT7",
  robots: { index: false, follow: false },
}

export default function Datenschutz() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

      {/* 1 — Verantwortlicher */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Verantwortlicher</h2>
        <p>
          Verantwortlicher im Sinne der DSGVO:<br />
          KINGSCUT7, Inhaber: Moeez Iftikhar<br />
          Berliner Allee 62<br />
          30175 Hannover<br />
          E-Mail: <a href="mailto:moeezif77@gmail.com" className="underline">moeezif77@gmail.com</a><br />
          Telefon: 0511 33772496
        </p>
      </section>

      {/* 2 — Hosting */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Hosting</h2>
        <p>
          Diese Website wird gehostet bei:<br />
          <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.<br />
          Vercel verarbeitet Server-Log-Daten (IP-Adresse, Zeitstempel, aufgerufene Seite, Browser).
          Grundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb).
          Vercel ist nach EU-US Data Privacy Framework zertifiziert.
        </p>
        {/* NOTE: If using Vercel Analytics, add separate section for that */}
      </section>

      {/* 3 — Kontaktaufnahme per Telefon und WhatsApp */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Kontaktaufnahme per Telefon, WhatsApp und Treatwell</h2>
        <p>
          Diese Website enthält kein Kontaktformular. Termine und Anfragen laufen über Telefon,
          WhatsApp oder die Online-Terminbuchung bei Treatwell.
        </p>
        <p className="mt-3">
          Wenn Sie uns anrufen oder per WhatsApp schreiben, verarbeiten wir die dabei übermittelten
          Daten (Rufnummer, Profilname, Inhalt und Zeitpunkt Ihrer Nachricht) ausschließlich zur
          Bearbeitung Ihrer Anfrage und zur Terminvereinbarung. Rechtsgrundlage: Art. 6 Abs. 1 lit. b
          DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
          Beantwortung von Anfragen). Wir löschen die Daten, sobald sie für diesen Zweck nicht mehr
          erforderlich sind und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
        </p>
        <p className="mt-3">
          Die WhatsApp-Schaltflächen auf dieser Website sind reine Links. Es werden keine
          WhatsApp-Inhalte in diese Website eingebunden und beim bloßen Aufruf der Seite keine Daten
          an WhatsApp übertragen. Eine Übermittlung findet erst statt, wenn Sie den Link anklicken
          und den Chat selbst starten.
        </p>
        <p className="mt-3">
          Anbieter des Dienstes ist <strong>WhatsApp Ireland Limited</strong>, Merrion Road,
          Dublin 4, D04 X2K5, Irland. WhatsApp Ireland Limited ist Teil der Meta-Unternehmensgruppe
          und gibt Daten an <strong>Meta Platforms, Inc.</strong> in den USA weiter. Auf die
          Verarbeitung Ihrer Daten durch WhatsApp haben wir keinen Einfluss; sie erfolgt in
          WhatsApps eigener Verantwortung. Welche Daten WhatsApp dabei erhebt, entnehmen Sie der{" "}
          <a
            href="https://www.whatsapp.com/legal/privacy-policy-eea"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Datenschutzrichtlinie von WhatsApp
          </a>
          . Wenn Sie das vermeiden möchten, erreichen Sie uns telefonisch unter 0511 33772496.
        </p>
        <p className="mt-3">
          Auch die Treatwell-Schaltflächen sind reine Links. Beim Aufruf dieser Website werden
          keine Daten an Treatwell übertragen; es sind keine Treatwell-Inhalte eingebunden. Erst
          wenn Sie den Link anklicken, gelangen Sie auf das Buchungsportal von{" "}
          <strong>Treatwell DACH GmbH</strong>, Greifswalder Straße 212, 10405 Berlin. Die dortige
          Verarbeitung Ihrer Daten — etwa der Angaben, die Sie für eine Buchung eingeben — erfolgt
          in eigener Verantwortung von Treatwell. Einzelheiten dazu finden Sie in den{" "}
          <a
            href="https://www.treatwell.de/info/datenschutz/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Datenschutzbestimmungen von Treatwell
          </a>
          . Über eine dort eingegangene Buchung erhalten wir von Treatwell die zur Durchführung
          des Termins erforderlichen Angaben (Name, Kontaktdaten, gebuchte Leistung, Termin) und
          verarbeiten diese auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
        </p>
      </section>

      {/* 4 — Google Maps */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Google Maps</h2>
        <p>
          Diese Website nutzt Google Maps zur Darstellung von Kartenmaterial.
          Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.<br />
          Bei Aufruf der Karte wird Ihre IP-Adresse an Google übertragen.
          Grundlage: Art. 6 Abs. 1 lit. f DSGVO. Sie können die Übertragung verhindern,
          indem Sie JavaScript in Ihrem Browser deaktivieren.<br />
          Datenschutzerklärung Google:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            policies.google.com/privacy
          </a>
        </p>
      </section>

      {/* 5 — Google Analytics */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Google Analytics</h2>
        <p className="mb-3">
          Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited,
          Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics verwendet Cookies, die
          eine Analyse der Benutzung der Website ermöglichen.
        </p>
        <p className="mb-3">
          Die durch den Cookie erzeugten Informationen über Ihre Nutzung dieser Website (einschließlich
          Ihrer IP-Adresse) werden an einen Server von Google in den USA übertragen und dort gespeichert.
          Google ist nach dem EU-US Data Privacy Framework zertifiziert.
        </p>
        <p className="mb-3">
          Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Google Analytics wird erst nach
          Ihrer ausdrücklichen Zustimmung per Cookie-Banner geladen. Sie können Ihre Einwilligung jederzeit
          widerrufen, indem Sie den Browser-Speicher (localStorage) leeren oder unsere Website im
          Inkognito-Modus besuchen.
        </p>
        <p className="mb-3">
          Einwilligung jederzeit widerrufen:{" "}
          <CookieRevoke
            label="Cookie-Einstellungen zurücksetzen"
            className="underline hover:text-gray-700"
          />
          {" "}— danach erscheint der Cookie-Banner erneut.
        </p>
        <p>
          Datenschutzerklärung Google:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            policies.google.com/privacy
          </a>
          {" — "}
          Opt-out Add-on:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            tools.google.com/dlpage/gaoptout
          </a>
        </p>
      </section>

      {/* 6 — SSL/TLS */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. SSL-/TLS-Verschlüsselung</h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
          Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
          dass die Adresszeile des Browsers von „http://" auf „https://" wechselt.
        </p>
      </section>

      {/* 7 — Betroffenenrechte */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch
          (Art. 21 DSGVO).<br />
          Beschwerden können Sie bei der zuständigen Aufsichtsbehörde einreichen:<br />
          <strong>Landesbeauftragte für Datenschutz Niedersachsen</strong>,
          Prinzenstraße 5, 30159 Hannover,{" "}
          <a href="https://www.lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer" className="underline">
            lfd.niedersachsen.de
          </a>
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-12">
        Stand: September 2026 — Bei Änderungen an dieser Website wird diese Erklärung aktualisiert.
      </p>
    </main>
  )
}
