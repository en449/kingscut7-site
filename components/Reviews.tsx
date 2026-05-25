"use client"

import { motion } from "framer-motion"
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion"

const reviews = [
  {
    name: "Luca Denk",
    text: "Das war der beste Friseurbesuch seit Langem. Es gibt keinen besseren in Hannover.",
    stars: 5,
    initials: "LD",
  },
  {
    name: "Me. Calls",
    text: "Wunderbarer Empfang, sehr freundliches Personal und top Service. Vielen Dank und gerne wieder!",
    stars: 5,
    initials: "MC",
  },
  {
    name: "Cosmo",
    text: "Wurde herzlich empfangen und mein Termin wurde zeitgemäß eingehalten. Die Arbeitsflächen sowie die Maschinen waren sauber und desinfiziert! Die Atmosphäre Top, der Haarschnitt am Ende noch besser als erwartet.",
    stars: 5,
    initials: "CO",
  },
  {
    name: "Erik 23",
    text: "Sehr sympathischer Friseur der meinen Wunsch perfekt umgesetzt hat!",
    stars: 5,
    initials: "ER",
  },
  {
    name: "Hamza",
    text: "Einer der besten Herrenfriseure in Hannover! ✌️",
    stars: 5,
    initials: "HA",
  },
  {
    name: "Philipp Naujok",
    text: "Absolut zu empfehlen. Sehr sauber geschnitten und sehr geile Atmosphäre im Laden.",
    stars: 5,
    initials: "PN",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFB100" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section
      id="bewertungen"
      className="py-20 md:py-28"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p
              className="text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-3"
              style={{ fontFamily: "var(--font-ui)", color: "var(--color-neon)" }}
            >
              <span
                className="h-px w-5 inline-block"
                style={{ background: "var(--color-neon)", boxShadow: "0 0 6px var(--color-neon)" }}
              />
              Google Reviews
            </p>
            <h2
              className="text-[clamp(2.8rem,7vw,5.5rem)] leading-none font-black uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              WAS
              <br />
              <span className="neon-text">HANNOVER</span>
              <br />
              SAGT.
            </h2>
          </div>
          {/* Overall rating badge */}
          <div
            className="flex flex-col items-center justify-center px-8 py-6 rounded-sm flex-shrink-0"
            style={{
              background: "var(--color-surface-2)",
              border: "1px solid rgba(255,177,0,0.2)",
              boxShadow: "0 0 30px rgba(255,177,0,0.06)",
            }}
          >
            <span
              className="text-6xl font-black leading-none neon-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              5,0
            </span>
            <div className="flex gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFB100" aria-hidden>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-muted)" }}
            >
              18 Bewertungen
            </span>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {reviews.map((r) => (
            <motion.div
              key={r.name}
              variants={fadeUp}
              className="flex flex-col gap-4 p-6 rounded-sm"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{
                    background: "var(--color-neon-dim)",
                    border: "1px solid rgba(255,177,0,0.2)",
                    color: "var(--color-neon)",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  {r.initials}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ fontFamily: "var(--font-ui)", color: "var(--color-text)" }}
                  >
                    {r.name}
                  </p>
                  <Stars count={r.stars} />
                </div>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
              >
                „{r.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
