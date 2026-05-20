import type { Variants } from "framer-motion"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
}

export const ctaButton = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.96 },
  transition: { type: "spring" as const, stiffness: 420, damping: 22 },
}

export const viewportOnce = { once: true, margin: "-60px" as const }
