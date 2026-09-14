"use client"

import Image from "next/image"
import type { CSSProperties } from "react"
import { motion } from "framer-motion"
import { ctaButton } from "@/lib/motion"

export const TREATWELL_LINK = "https://www.treatwell.de/ort/kingscut7-1/"

type Props = {
  label?: string
  size?: "sm" | "md"
  // Layout only — width, flex, visibility. Padding comes from `size`: a px- or py- utility
  // passed here loses to the base class, since Tailwind orders utilities by scale, not by
  // the order they appear in the attribute.
  className?: string
  style?: CSSProperties
}

// The second booking path. WhatsApp stays the primary CTA everywhere it appears, so this one
// is outlined in Treatwell's own coral (#FF5C39, near enough to --color-hot to sit in the
// palette) instead of filled: visible next to the green button, never competing with it.
// The icon is Treatwell's, served from our own /public — never hotlinked.
export default function TreatwellButton({
  label = "Online über Treatwell",
  size = "md",
  className = "",
  style,
}: Props) {
  const sm = size === "sm"
  const icon = sm ? 14 : 18

  return (
    <motion.a
      href={TREATWELL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      {...ctaButton}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold uppercase tracking-widest rounded-sm ${
        sm ? "px-4 py-2 text-xs" : "px-8 py-4 text-sm"
      } ${className}`}
      style={{
        fontFamily: "var(--font-ui)",
        border: "1px solid rgba(255,92,57,0.45)",
        background: "rgba(255,92,57,0.08)",
        color: "var(--color-text)",
        letterSpacing: "0.1em",
        ...style,
      }}
    >
      <Image
        src="/images/treatwell.png"
        alt=""
        width={icon}
        height={icon}
        className="rounded-[3px]"
        style={{ flexShrink: 0 }}
      />
      {label}
    </motion.a>
  )
}
