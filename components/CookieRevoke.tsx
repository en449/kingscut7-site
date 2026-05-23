"use client"

import type { CSSProperties } from "react"

interface Props {
  className?: string
  style?: CSSProperties
  label?: string
}

export default function CookieRevoke({ className, style, label = "Cookie-Einwilligung zurückziehen" }: Props) {
  const revoke = () => {
    localStorage.removeItem("kc7_cookie_consent")
    window.location.reload()
  }

  return (
    <button onClick={revoke} className={className} style={style}>
      {label}
    </button>
  )
}
