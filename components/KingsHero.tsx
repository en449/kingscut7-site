"use client"

import { motion } from "framer-motion"
import { staggerContainer, fadeUp, ctaButton } from "@/lib/motion"

const WA_LINK = "https://wa.me/4915567073622"

export default function KingsHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
      style={{ background: "var(--color-bg)" }}
    >
      {/* ── Background layers ── */}

      {/* Radial glow behind logo/title area */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "500px",
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,177,0,0.07) 0%, rgba(255,92,0,0.03) 50%, transparent 80%)",
          filter: "blur(1px)",
        }}
      />

      {/* Vertical lines — barbershop stripe motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px opacity-[0.04]"
            style={{
              left: `${12 + i * 14}%`,
              background: "linear-gradient(180deg, transparent 0%, #FFB100 30%, #FFB100 70%, transparent 100%)",
            }}
          />
        ))}
      </div>

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        aria-hidden
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px 160px",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-0 min-h-screen flex items-center">
        <div className="w-full">

          {/* ─── Text ─── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Location badge */}
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.4em] mb-8 flex items-center gap-3"
              style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-muted)" }}
            >
              <span
                className="h-px w-6 inline-block"
                style={{ background: "var(--color-neon)", boxShadow: "0 0 6px var(--color-neon)" }}
              />
              Hannover · Berliner Allee 62
            </motion.p>

            {/* Headline — neon glow on key word */}
            <motion.h1
              variants={fadeUp}
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              {/* Mobile: 2 lines */}
              <span
                className="block md:hidden text-[2.9rem] leading-[1.05]"
                style={{ color: "var(--color-text)" }}
              >
                KINGS <span className="neon-text">WERDEN</span>
              </span>
              <span
                className="block md:hidden text-[2.9rem] leading-[1.05]"
                style={{ color: "var(--color-text)" }}
              >
                NICHT GEBOREN.
              </span>

              {/* Desktop: 4 lines */}
              <span
                className="hidden md:block text-[clamp(4rem,11vw,9rem)] leading-none"
                style={{ color: "var(--color-text)" }}
              >
                KINGS
              </span>
              <span
                className="hidden md:block text-[clamp(4rem,11vw,9rem)] leading-none neon-text"
              >
                WERDEN
              </span>
              <span
                className="hidden md:block text-[clamp(4rem,11vw,9rem)] leading-none"
                style={{ color: "var(--color-text)" }}
              >
                NICHT
              </span>
              <span
                className="hidden md:block text-[clamp(4rem,11vw,9rem)] leading-none"
                style={{ color: "var(--color-text)" }}
              >
                GEBOREN.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 mb-3 text-[clamp(1.6rem,4.5vw,2.4rem)] font-bold uppercase tracking-[0.12em]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text-muted)",
              }}
            >
              Sie werden geschnitten.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[14px] mb-10"
              style={{
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-body)",
                lineHeight: 1.8,
                maxWidth: "34ch",
              }}
            >
              Precision Cuts · Fade Specialists · Bart &amp; Styling.
              <br />
              Mo–Sa 09–19 Uhr. Kein Warten — Termin per WhatsApp.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-14">
              {/* PRIMARY: WhatsApp */}
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                {...ctaButton}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold rounded-sm uppercase tracking-widest"
                style={{
                  fontFamily: "var(--font-ui)",
                  background: "var(--color-wa)",
                  color: "#fff",
                  letterSpacing: "0.1em",
                  boxShadow: "0 0 24px rgba(37,211,102,0.35), 0 4px 16px rgba(37,211,102,0.2)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Jetzt Termin sichern
              </motion.a>

              {/* SECONDARY: Call */}
              <motion.a
                href="tel:+4951133772496"
                {...ctaButton}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm uppercase tracking-widest"
                style={{
                  fontFamily: "var(--font-ui)",
                  border: "1px solid rgba(255,177,0,0.28)",
                  color: "var(--color-neon)",
                  background: "transparent",
                  letterSpacing: "0.1em",
                }}
              >
                0511 33772496
              </motion.a>
            </motion.div>

            {/* Star strip */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFB100" aria-hidden>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span
                className="text-xs uppercase tracking-wider"
                style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-muted)" }}
              >
                5,0 · 11 Bewertungen · Google
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Right edge brand label */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div
          className="h-16 w-px"
          style={{ background: "linear-gradient(180deg, transparent, rgba(255,177,0,0.4), transparent)" }}
        />
        <span
          className="text-[9px] uppercase tracking-[0.3em]"
          style={{
            fontFamily: "var(--font-ui)",
            color: "rgba(255,177,0,0.35)",
            writingMode: "vertical-rl",
          }}
        >
          KINGSCUT7 · HANNOVER
        </span>
        <div
          className="h-16 w-px"
          style={{ background: "linear-gradient(180deg, transparent, rgba(255,177,0,0.4), transparent)" }}
        />
      </div>
    </section>
  )
}
