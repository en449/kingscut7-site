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
        <h2 className="text-xl font-semibold mb-3">3. Kontakt per Telefon und WhatsApp; Online-Terminbuchung (Planity)</h2>
        <p>
          Diese Website enthält kein Kontaktformular. Termine und Anfragen laufen über Telefon,
          WhatsApp oder die Online-Terminbuchung auf unserer Seite „Termin buchen“ (/termin).
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
          Für die Online-Terminbuchung binden wir auf der Seite „Termin buchen“ (/termin) das
          Buchungsmodul von <strong>Planity</strong> ein. Das Modul wird nur auf dieser Seite
          geladen, nicht auf den übrigen Seiten dieser Website. Beim Aufruf von /termin lädt Ihr
          Browser das Modul von Servern von Planity und deren Dienstleistern; dabei werden
          technisch notwendige Daten wie Ihre IP-Adresse, Browsertyp und Zeitpunkt des Abrufs
          übermittelt. Ohne diese Übermittlung kann das Buchungsmodul nicht angezeigt werden.
          Nach unserer Prüfung nutzt das Modul dafür insbesondere Amazon Web Services (CloudFront,
          Auslieferung des Moduls), Google Firebase (Datenbank für freie Termine und Anmeldung,
          u. a. Server-Region Belgien) und Algolia (Suchdienst). Amazon Web Services und Google
          haben ihren Sitz bzw. ihre Muttergesellschaft in den USA; eine Übermittlung in die USA
          ist daher nicht auszuschließen. Beide Unternehmen sind nach dem EU-US Data Privacy
          Framework zertifiziert.
        </p>
        <p className="mt-3">
          Beim Laden der Seite und bei der Auswahl von Leistung und Termin setzt das Buchungsmodul
          nach unserer Prüfung keine Cookies. Es speichert im lokalen Speicher Ihres Browsers
          (localStorage bzw. IndexedDB) technisch notwendige Angaben für die Verbindung zu den
          Planity-Servern und — wenn Sie sich bei Planity anmelden — Ihre Anmeldung. Diese
          Speicherung ist für die von Ihnen ausdrücklich gewünschte Online-Buchung unbedingt
          erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG) und erfolgt daher ohne Einwilligung über den
          Cookie-Banner. Sie können diese Daten jederzeit löschen, indem Sie die Websitedaten für
          kingscut7.de in Ihrem Browser entfernen.
        </p>
        <p className="mt-3">
          Sobald Sie zum Schritt „Login“ (Anmeldung oder Registrierung bei Planity) gelangen, lädt
          das Modul zum Schutz vor Missbrauch (z. B. automatisierten Registrierungen) den Dienst{" "}
          <strong>Google reCAPTCHA</strong> der Google Ireland Limited, Gordon House, Barrow Street,
          Dublin 4, Irland. reCAPTCHA wertet dabei Informationen wie Ihre IP-Adresse,
          Browserangaben und Ihr Nutzungsverhalten auf der Seite aus und setzt das Cookie
          „_GRECAPTCHA“ (Domain google.com, Speicherdauer bis zu 6 Monate). Eine Übermittlung an
          Google LLC in den USA ist möglich; Google ist nach dem EU-US Data Privacy Framework
          zertifiziert. Der Einsatz erfolgt durch Planity zur Absicherung der Anmeldung und ist für
          die sichere Durchführung der von Ihnen gewünschten Buchung erforderlich (§ 25 Abs. 2
          Nr. 2 TDDDG; Art. 6 Abs. 1 lit. f DSGVO). Einzelheiten:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Datenschutzerklärung von Google
          </a>
          .
        </p>
        <p className="mt-3">
          Wenn Sie einen Termin buchen, geben Sie Ihre Angaben (z. B. Name, Telefonnummer,
          E-Mail-Adresse, gewünschte Leistung, Barber und Termin) direkt in das Planity-Modul ein.
          Planity speichert diese Angaben und stellt uns die zur Durchführung des Termins
          erforderlichen Daten bereit. Für die Anmeldung bzw. das Kundenkonto bei Planity gelten
          zusätzlich die Bestimmungen von Planity. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
          (Durchführung vorvertraglicher Maßnahmen bzw. des Vertrags). Einzelheiten zur
          Verarbeitung durch Planity
          finden Sie in der{" "}
          <a
            href="https://www.planity.com/de-DE/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Datenschutzerklärung von Planity
          </a>
          . Wenn Sie das vermeiden möchten, buchen Sie Ihren Termin einfach telefonisch unter
          0511 33772496.
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
        Stand: November 2026 — Bei Änderungen an dieser Website wird diese Erklärung aktualisiert.
      </p>
    </main>
  )
}
