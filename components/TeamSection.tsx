"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion"

const founders = [
  { name: "Hasib", role: "Barber" },
  { name: "Moeez", role: "Gründer / Barber" },
  { name: "Secil", role: "Meisterin" },
]

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-20 md:py-28"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p
            className="text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-3"
            style={{ fontFamily: "var(--font-ui)", color: "var(--color-neon)" }}
          >
            <span
              className="h-px w-5 inline-block"
              style={{ background: "var(--color-neon)", boxShadow: "0 0 6px var(--color-neon)" }}
            />
            Hinter dem Shop
          </p>
          <h2
            className="text-[clamp(2.8rem,7vw,5.5rem)] leading-none font-black uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DIE
            <br />
            <span className="neon-text">GRÜNDER.</span>
          </h2>
        </motion.div>

        {/* Opening day photo */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-sm overflow-hidden mb-10"
          style={{
            border: "1px solid var(--color-border)",
            aspectRatio: "16/9",
            maxHeight: "520px",
          }}
        >
          <Image
            src="/images/team/opening-day.jpg"
            alt="KINGSCUT7 Eröffnungstag — Hasib, Moeez und Secil"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
          {/* Subtle neon overlay at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(7,7,10,0.7) 0%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* Founder name cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-3 gap-4"
        >
          {founders.map((f) => (
            <motion.div
              key={f.name}
              variants={fadeUp}
              className="flex flex-col items-center justify-center py-6 rounded-sm"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Neon dot */}
              <div
                className="w-1.5 h-1.5 rounded-full mb-4"
                style={{
                  background: "var(--color-neon)",
                  boxShadow: "0 0 8px var(--color-neon)",
                }}
              />
              <span
                className="text-2xl md:text-3xl font-black uppercase tracking-wide"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
              >
                {f.name}
              </span>
              <span
                className="mt-1 text-[9px] uppercase tracking-[0.15em] text-center leading-tight"
                style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-muted)" }}
              >
                {f.role}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
