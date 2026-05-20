"use client"

import { motion } from "framer-motion"
import { ctaButton, viewportOnce } from "@/lib/motion"

const WA_LINK = "https://wa.me/4951133772496"

export default function BookingCTA() {
  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Big ambient neon glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,177,0,0.06) 0%, rgba(255,92,0,0.03) 50%, transparent 75%)",
        }}
      />
      {/* Top + bottom border lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,177,0,0.25) 50%, transparent 100%)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,177,0,0.25) 50%, transparent 100%)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.45em] mb-6 inline-flex items-center gap-3"
          style={{ fontFamily: "var(--font-ui)", color: "var(--color-neon)" }}
        >
          <span
            className="h-px w-5 inline-block"
            style={{ background: "var(--color-neon)", boxShadow: "0 0 6px var(--color-neon)" }}
          />
          Terminbuchung
          <span
            className="h-px w-5 inline-block"
            style={{ background: "var(--color-neon)", boxShadow: "0 0 6px var(--color-neon)" }}
          />
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="text-[clamp(3rem,9vw,7rem)] leading-none font-black uppercase mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          BEREIT FÜR
          <br />
          <span className="neon-text">DEINEN CUT?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="text-base mb-12 mx-auto"
          style={{
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.8,
            maxWidth: "42ch",
          }}
        >
          Schreib uns einfach auf WhatsApp — wir antworten schnell und finden gemeinsam den perfekten Termin für dich.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            {...ctaButton}
            className="inline-flex items-center gap-3 px-10 py-5 text-base font-semibold uppercase tracking-widest rounded-sm"
            style={{
              fontFamily: "var(--font-ui)",
              background: "var(--color-wa)",
              color: "#fff",
              letterSpacing: "0.1em",
              boxShadow: "0 0 32px rgba(37,211,102,0.4), 0 8px 24px rgba(37,211,102,0.2)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Jetzt auf WhatsApp schreiben
          </motion.a>

          <motion.a
            href="tel:+4951133772496"
            {...ctaButton}
            className="inline-flex items-center gap-2 px-8 py-5 text-sm font-semibold uppercase tracking-widest rounded-sm"
            style={{
              fontFamily: "var(--font-ui)",
              border: "1px solid rgba(255,177,0,0.28)",
              color: "var(--color-neon)",
              background: "transparent",
              letterSpacing: "0.1em",
            }}
          >
            Oder anrufen
          </motion.a>
        </motion.div>

        {/* Hours note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 text-xs uppercase tracking-widest"
          style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-faint)" }}
        >
          Montag–Samstag · 09:00–19:00 Uhr
        </motion.p>
      </div>
    </section>
  )
}
