"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#bewertungen", label: "Stimmen" },
  { href: "/#standort", label: "Standort" },
]

const WA_LINK = "https://wa.me/4951133772496"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const prevY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      setHidden(y > prevY.current && y > 240)
      prevY.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        animate={{ y: hidden && !menuOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "rgba(7,7,10,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,177,0,0.12)"
            : "1px solid transparent",
          transition: "background 0.35s ease, border-color 0.35s ease",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" aria-label="KINGSCUT7 Startseite">
            <div className="relative h-11 w-[200px]" style={{ flexShrink: 0 }}>
              <Image
                src="/images/KINGSCUT7_Logo.png"
                alt="KINGSCUT7"
                fill
                className="object-contain"
                priority
                style={{
                  mixBlendMode: "screen",
                  filter:
                    "drop-shadow(0 0 6px #FFD44F) drop-shadow(0 0 14px #FFB100) drop-shadow(0 0 28px rgba(255,140,0,0.5))",
                }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm uppercase tracking-widest transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.12em",
                    fontSize: "12px",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.target as HTMLElement).style.color = "var(--color-neon)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.target as HTMLElement).style.color = "var(--color-text-muted)"
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* WhatsApp CTA */}
            <li>
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 420, damping: 22 }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest rounded-sm"
                style={{
                  background: "var(--color-wa)",
                  color: "#fff",
                  fontFamily: "var(--font-ui)",
                  letterSpacing: "0.1em",
                  boxShadow: "0 0 16px rgba(37,211,102,0.3)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Termin
              </motion.a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 9 : 0 }}
              transition={{ duration: 0.22 }}
              className="block w-6 h-[1.5px]"
              style={{ background: "var(--color-neon)" }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.18 }}
              className="block w-6 h-[1.5px]"
              style={{ background: "var(--color-text-muted)" }}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -9 : 0 }}
              transition={{ duration: 0.22 }}
              className="block w-6 h-[1.5px]"
              style={{ background: "var(--color-neon)" }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-24 pb-12 px-8"
            style={{ background: "rgba(7,7,10,0.98)", backdropFilter: "blur(20px)" }}
          >
            {/* Neon accent line */}
            <div
              className="absolute top-[72px] left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,177,0,0.3), transparent)" }}
            />

            <ul className="flex flex-col gap-8 mt-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl font-black uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4 rounded-sm text-sm font-semibold uppercase tracking-widest"
                style={{
                  background: "var(--color-wa)",
                  color: "#fff",
                  fontFamily: "var(--font-ui)",
                  boxShadow: "0 0 24px rgba(37,211,102,0.35)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Jetzt Termin buchen
              </a>
              <a
                href="tel:+4951133772496"
                className="flex items-center justify-center gap-3 py-4 rounded-sm text-sm font-semibold uppercase tracking-widest"
                style={{
                  border: "1px solid rgba(255,177,0,0.25)",
                  color: "var(--color-neon)",
                  fontFamily: "var(--font-ui)",
                }}
              >
                0511 33772496
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
