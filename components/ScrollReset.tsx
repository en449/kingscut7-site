"use client"

import { useEffect } from "react"

export default function ScrollReset() {
  useEffect(() => {
    // Prevent browser from restoring scroll position on reload
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }, [])

  return null
}
