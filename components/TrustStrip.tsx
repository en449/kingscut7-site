"use client"

import { motion } from "framer-motion"
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion"

const items = [
  { value: "5,0", label: "Google Sterne" },
  { value: "11", label: "Bewertungen" },
  { value: "Mo–Sa", label: "09–19 Uhr" },
  { value: "Berliner Allee 62", label: "Hannover" },
]

export default function TrustStrip() {
  return (
    <section
      className="py-6 border-y overflow-hidden"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border-neon)",
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {items.map((item) => (
          <motion.div
            key={item.label}
            variants={fadeUp}
            className="flex flex-col items-center text-center gap-1"
          >
            <span
              className="text-lg md:text-3xl font-black leading-none neon-text-sm"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.value}
            </span>
            <span
              className="text-[10px] md:text-[12px] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-muted)" }}
            >
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
