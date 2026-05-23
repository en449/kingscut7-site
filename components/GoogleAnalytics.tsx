"use client"

import Script from "next/script"
import { useEffect, useState } from "react"
import { GA_MEASUREMENT_ID } from "@/lib/analytics"

export default function GoogleAnalytics() {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("kc7_cookie_consent") === "accepted") {
      setConsented(true)
    }
    const handler = () => setConsented(true)
    window.addEventListener("ga-consent-accepted", handler)
    return () => window.removeEventListener("ga-consent-accepted", handler)
  }, [])

  if (!consented) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `}</Script>
    </>
  )
}
