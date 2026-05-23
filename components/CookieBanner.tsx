"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("kc7_cookie_consent")) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("kc7_cookie_consent", "accepted")
    window.dispatchEvent(new Event("ga-consent-accepted"))
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem("kc7_cookie_consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#111] border-t border-white/10 px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <p className="text-sm text-gray-300 flex-1">
        Wir nutzen Google Analytics, um zu verstehen, wie Besucher unsere Website nutzen.{" "}
        <Link href="/datenschutz" className="underline hover:text-white">
          Datenschutzerklärung
        </Link>
      </p>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={decline}
          className="text-sm px-4 py-2 border border-white/20 text-gray-400 hover:text-white rounded transition-colors"
        >
          Ablehnen
        </button>
        <button
          onClick={accept}
          className="text-sm px-4 py-2 bg-[#C9A84C] text-black font-semibold rounded hover:opacity-90 transition-opacity"
        >
          Akzeptieren
        </button>
      </div>
    </div>
  )
}
