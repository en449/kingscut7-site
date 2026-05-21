"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand logo */}
        <div className="relative h-6 w-[110px]">
          <Image
            src="/images/KINGSCUT7_Logo.png"
            alt="KINGSCUT7"
            fill
            className="object-contain"
            style={{
              mixBlendMode: "screen",
              filter: "drop-shadow(0 0 4px #FFB100) drop-shadow(0 0 10px rgba(255,140,0,0.4))",
            }}
          />
        </div>

        {/* Legal links */}
        <div className="flex items-center gap-6">
          <Link
            href="/impressum"
            className="text-xs uppercase tracking-widest transition-colors duration-200"
            style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-faint)" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--color-text-muted)" }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--color-text-faint)" }}
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-xs uppercase tracking-widest transition-colors duration-200"
            style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-faint)" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--color-text-muted)" }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--color-text-faint)" }}
          >
            Datenschutz
          </Link>
        </div>

        {/* Instagram + Copyright */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/kings.cut7/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="KINGSCUT7 auf Instagram"
            style={{ color: "var(--color-text-faint)", transition: "color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-neon)" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-faint)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-faint)" }}
          >
            © {new Date().getFullYear()} KINGSCUT7 · Hannover
          </p>
        </div>
      </div>
    </footer>
  )
}
