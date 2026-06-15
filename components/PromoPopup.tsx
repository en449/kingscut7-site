"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const PROMO_IMAGE = "/images/promo/promo.jpg"
const SESSION_KEY = "kc7_promo_seen"

// Popup deactivated — set to true to re-enable the entry popup.
const PROMO_ENABLED = false

export default function PromoPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!PROMO_ENABLED) return
    if (sessionStorage.getItem(SESSION_KEY)) return
    const t = setTimeout(() => setVisible(true), 900)
    return () => clearTimeout(t)
  }, [])

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, "1")
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90]"
            style={{ background: "rgba(7,7,10,0.82)", backdropFilter: "blur(6px)" }}
            onClick={dismiss}
            aria-hidden
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-[91] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: "min(90vw, 420px)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Aktuelle Aktion"
          >
            <div
              className="relative rounded-sm overflow-hidden"
              style={{
                background: "var(--color-surface)",
                border: "1px solid rgba(255,177,0,0.35)",
                boxShadow: "0 0 40px rgba(255,177,0,0.12), 0 24px 48px rgba(0,0,0,0.6)",
              }}
            >
              {/* Close button */}
              <button
                onClick={dismiss}
                aria-label="Schließen"
                className="absolute top-3 right-3 z-10 flex items-center justify-center w-10 h-10 rounded-sm transition-colors"
                style={{
                  background: "rgba(7,7,10,0.85)",
                  border: "1px solid rgba(255,177,0,0.5)",
                  color: "#FFD44F",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = "rgba(255,177,0,0.2)"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = "rgba(7,7,10,0.85)"
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              {/* Promo image */}
              <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
                <Image
                  src={PROMO_IMAGE}
                  alt="Aktuelle Aktion bei KINGSCUT7"
                  fill
                  className="object-cover"
                  sizes="420px"
                  priority
                />
              </div>

              {/* Bottom CTA strip */}
              <div
                className="px-5 py-4 flex items-center justify-between gap-3"
                style={{ borderTop: "1px solid rgba(255,177,0,0.15)" }}
              >
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-muted)" }}
                >
                  Jetzt Termin sichern
                </span>
                <a
                  href="https://wa.me/4915567073622"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={dismiss}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-ui)",
                    background: "var(--color-wa)",
                    color: "#fff",
                    boxShadow: "0 0 14px rgba(37,211,102,0.3)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
