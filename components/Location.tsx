"use client"

import { motion } from "framer-motion"
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion"

const hours = [
  { day: "Montag", time: "09:00–19:00" },
  { day: "Dienstag", time: "09:00–19:00" },
  { day: "Mittwoch", time: "09:00–19:00" },
  { day: "Donnerstag", time: "09:00–19:00" },
  { day: "Freitag", time: "09:00–19:00" },
  { day: "Samstag", time: "09:00–19:00" },
  { day: "Sonntag", time: "Geschlossen" },
]

export default function Location() {
  return (
    <section
      id="standort"
      className="py-20 md:py-28"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p
            className="text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-3"
            style={{ fontFamily: "var(--font-ui)", color: "var(--color-neon)" }}
          >
            <span
              className="h-px w-5 inline-block"
              style={{ background: "var(--color-neon)", boxShadow: "0 0 6px var(--color-neon)" }}
            />
            Wo wir sind
          </p>
          <h2
            className="text-[clamp(2.8rem,7vw,5.5rem)] leading-none font-black uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            FIND
            <br />
            <span className="neon-text">UNS.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Info column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            {/* Address */}
            <motion.div
              variants={fadeUp}
              className="p-6 rounded-sm"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-muted)" }}
              >
                Adresse
              </p>
              <p
                className="text-lg font-black uppercase"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
              >
                Berliner Allee 62
              </p>
              <p
                className="text-base font-black uppercase"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text-muted)" }}
              >
                30175 Hannover
              </p>
              <a
                href="https://maps.app.goo.gl/JaqGSRZ6cVc69Jtf7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ fontFamily: "var(--font-ui)", color: "var(--color-neon)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                In Google Maps öffnen
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              variants={fadeUp}
              className="p-6 rounded-sm"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-muted)" }}
              >
                Telefon
              </p>
              <a
                href="tel:+4951133772496"
                className="text-xl font-black uppercase tracking-wide neon-text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                0511 33772496
              </a>
            </motion.div>

            {/* Opening hours */}
            <motion.div
              variants={fadeUp}
              className="p-6 rounded-sm"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-muted)" }}
              >
                Öffnungszeiten
              </p>
              <ul className="flex flex-col gap-2">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between items-center">
                    <span
                      className="text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "var(--color-text-muted)" }}
                    >
                      {h.day}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: h.time === "Geschlossen" ? "var(--color-text-faint)" : "var(--color-text)",
                      }}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="rounded-sm overflow-hidden min-h-[320px] lg:min-h-0"
            style={{
              border: "1px solid var(--color-border)",
              boxShadow: "0 0 30px rgba(255,177,0,0.05)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.!2d9.7519911!3d52.3703592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00bea84436785%3A0x6a445c3b0d649f33!2sKINGSCUT7!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px", filter: "grayscale(80%) invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KINGSCUT7 auf Google Maps"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
