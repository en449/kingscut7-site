"use client"

import { motion } from "framer-motion"
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion"

const services = [
  {
    number: "01",
    name: "Haarschnitt",
    desc: "Klassisch oder modern — jeder Schnitt sitzt. Präzision, die man sieht.",
    tag: "18€",
  },
  {
    number: "02",
    name: "Haare & Bart",
    desc: "Cut und Bart in einem. Kompletter Look, ein Preis — das volle Paket.",
    tag: "30€",
  },
  {
    number: "03",
    name: "Kinderhaarschnitt",
    desc: "Geduldig, sauber, kinderfreundlich. Für die kleinen Kings.",
    tag: "15€",
  },
  {
    number: "04",
    name: "Bart",
    desc: "Konturenschnitt, Shaping, Pflege. Dein Bart bekommt dieselbe Präzision wie dein Cut.",
    tag: "12€",
  },
  {
    number: "05",
    name: "Augenbrauen",
    desc: "Details machen den King. Sauber geformte Brauen als letzter Schliff.",
    tag: "5€",
  },
]

export default function ServicesPreview() {
  return (
    <section
      id="leistungen"
      className="py-20 md:py-28"
      style={{ background: "var(--color-bg)" }}
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
            Was wir machen
          </p>
          <h2
            className="text-[clamp(2.8rem,7vw,5.5rem)] leading-none font-black uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DEINE
            <br />
            <span className="neon-text">BEHANDLUNG.</span>
          </h2>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.number}
              variants={fadeUp}
              className="group relative p-6 rounded-sm overflow-hidden"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,177,0,0.3)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"
              }}
            >
              {/* Number */}
              <span
                className="block text-5xl font-black leading-none mb-4 opacity-20"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-neon)" }}
              >
                {s.number}
              </span>

              {/* Name + Price row */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3
                  className="text-xl font-black uppercase tracking-wide leading-tight"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                >
                  {s.name}
                </h3>
                <span
                  className="shrink-0 text-sm font-bold px-3 py-1 rounded-sm"
                  style={{
                    fontFamily: "var(--font-ui)",
                    background: "rgba(255,177,0,0.15)",
                    color: "#FFD44F",
                    border: "1px solid rgba(255,177,0,0.35)",
                  }}
                >
                  {s.tag}
                </span>
              </div>

              {/* Desc */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
              >
                {s.desc}
              </p>

              {/* Bottom neon accent line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--color-neon), transparent)",
                  boxShadow: "0 0 8px var(--color-neon)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA under services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/4915567073622"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-widest rounded-sm"
            style={{
              fontFamily: "var(--font-ui)",
              background: "var(--color-wa)",
              color: "#fff",
              boxShadow: "0 0 20px rgba(37,211,102,0.3)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Termin per WhatsApp buchen
          </a>
        </motion.div>
      </div>
    </section>
  )
}
