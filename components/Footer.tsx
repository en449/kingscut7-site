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

        {/* Copyright */}
        <p
          className="text-xs"
          style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-faint)" }}
        >
          © {new Date().getFullYear()} KINGSCUT7 · Hannover
        </p>
      </div>
    </footer>
  )
}
