"use client"

import { useEffect, useRef, useState } from "react"

// Public client-side key (Planity puts it in inline JS in every example). Set it in Vercel:
// Settings → Environment Variables → NEXT_PUBLIC_PLANITY_KEY. Inlined at build time, so a
// change needs a redeploy.
const PLANITY_KEY = process.env.NEXT_PUBLIC_PLANITY_KEY
const PLANITY_SRC = "https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js"
const WA_LINK = "https://wa.me/4915567073622"

declare global {
  interface Window {
    planity?: Record<string, unknown> & { container?: Element }
  }
}

export default function PlanityWidget() {
  const container = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const el = container.current
    if (!PLANITY_KEY || !el) return
    // Planity reads window.planity once, when app.latest.js runs, and has no re-mount API.
    if (document.querySelector(`script[src="${PLANITY_SRC}"]`)) {
      // Same node = React StrictMode re-running the effect: already initialised. A different
      // node = soft navigation back to /termin (e.g. Back from /datenschutz): Planity is bound
      // to the old, detached container, so only a full load can bring the widget back.
      if (window.planity?.container !== el) window.location.reload()
      return
    }
    window.planity = {
      key: PLANITY_KEY,
      primaryColor: "#FFB100",
      container: el,
      options: { countryCode: "DE" },
    }
    const s = document.createElement("script")
    s.src = PLANITY_SRC
    s.async = true
    s.onerror = () => setFailed(true) // blocked by an ad blocker / network: show the fallback
    document.body.appendChild(s)
  }, [])

  if (!PLANITY_KEY || failed) {
    return (
      <div className="text-center py-16" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
        <p className="mb-6">
          {failed
            ? "Die Online-Buchung konnte gerade nicht geladen werden. Deinen Termin bekommst du auch per WhatsApp oder Telefon."
            : "Die Online-Buchung ist gleich wieder da. Bis dahin bekommst du deinen Termin per WhatsApp oder Telefon."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--color-text)" }}>
            WhatsApp schreiben
          </a>
          <a href="tel:+4951133772496" className="underline" style={{ color: "var(--color-text)" }}>
            0511 33772496
          </a>
        </div>
      </div>
    )
  }

  return <div ref={container} className="planity-host min-h-[480px]" />
}
