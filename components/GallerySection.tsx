"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion"

// Add filenames here after dropping photos into public/images/gallery/
const galleryImages: { src: string; alt: string }[] = [
  // { src: "/images/gallery/cut-01.jpg", alt: "Haarschnitt von KINGSCUT7" },
  // { src: "/images/gallery/cut-02.jpg", alt: "Fade von KINGSCUT7" },
]

export default function GallerySection() {
  if (galleryImages.length === 0) return null

  return (
    <section
      id="galerie"
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
            Ergebnisse
          </p>
          <h2
            className="text-[clamp(2.8rem,7vw,5.5rem)] leading-none font-black uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            UNSERE
            <br />
            <span className="neon-text">ARBEIT.</span>
          </h2>
        </motion.div>

        {/* Photo grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative rounded-sm overflow-hidden"
              style={{
                aspectRatio: "3/4",
                border: "1px solid var(--color-border)",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
