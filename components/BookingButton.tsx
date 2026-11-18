"use client"

import type { CSSProperties } from "react"
import { motion } from "framer-motion"
import { ctaButton } from "@/lib/motion"

// Plain <a>, not next/link: /termin must be a full page load so the Planity script
// initialises fresh every time. Planity's widget has no documented re-mount for SPA routing.
export const BOOKING_HREF = "/termin"

type Props = {
  label?: string
  size?: "sm" | "md"
  // Layout only — width, flex, visibility. Padding comes from `size`: a px- or py- utility
  // passed here loses to the base class, since Tailwind orders utilities by scale, not by
  // the order they appear in the attribute.
  className?: string
  style?: CSSProperties
}

// Online booking (Planity, embedded on /termin). Outlined in the site's gold, same weight as
// the WhatsApp button — both are tinted outlines so neither shouts over the design.
export default function BookingButton({
  label = "Online buchen",
  size = "md",
  className = "",
  style,
}: Props) {
  const sm = size === "sm"
  const icon = sm ? 14 : 18

  return (
    <motion.a
      href={BOOKING_HREF}
      {...ctaButton}
      className={`inline-flex items-center justify-center whitespace-nowrap font-semibold uppercase tracking-widest rounded-sm ${
        sm ? "gap-1.5 px-3 py-[7px] text-xs" : "gap-2 px-5 py-4 text-sm"
      } ${className}`}
      style={{
        fontFamily: "var(--font-ui)",
        border: "1px solid rgba(255,177,0,0.45)",
        background: "rgba(255,177,0,0.08)",
        color: "var(--color-text)",
        letterSpacing: "0.1em",
        ...style,
      }}
    >
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-neon)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        style={{ flexShrink: 0 }}
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
      {label}
    </motion.a>
  )
}
