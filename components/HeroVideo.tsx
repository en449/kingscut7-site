"use client"

import { useEffect, useRef, useState } from "react"

const DESKTOP_SRC = "/video/hero-desktop.mp4"
const MOBILE_SRC = "/video/hero-mobile.mp4"
const DESKTOP_POSTER = "/video/hero-poster.jpg"
const MOBILE_POSTER = "/video/hero-poster-mobile.jpg"

type NetworkInfo = { saveData?: boolean; effectiveType?: string }

// The video is an enhancement, never a dependency: iOS Low Power Mode blocks muted autoplay
// outright, so the poster has to stand on its own as a finished hero either way.
//
// The connection check only bites on Chromium — navigator.connection does not exist in Safari
// or Firefox, so Save-Data and slow-link visitors there still get the video. There is no
// portable substitute, so the honest reading is "skipped on Chromium, and everywhere the
// visitor asked for reduced motion". The 262 KB mobile encode is the protection for the rest.
function shouldLoadVideo() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false
  const conn = (navigator as Navigator & { connection?: NetworkInfo }).connection
  if (conn?.saveData) return false
  if (conn?.effectiveType && ["slow-2g", "2g", "3g"].includes(conn.effectiveType)) return false
  return true
}

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    if (!shouldLoadVideo()) return

    // A phone never becomes a desktop mid-session, so the crop is decided once. `media` on
    // <source> is not honoured reliably inside <video> the way it is inside <picture>.
    const attach = () =>
      setSrc(window.matchMedia("(min-width: 768px)").matches ? DESKTOP_SRC : MOBILE_SRC)

    // The hero is above the fold — nothing video-shaped may enter the initial waterfall.
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(attach, { timeout: 2500 })
      return () => w.cancelIdleCallback?.(id)
    }
    const timer = setTimeout(attach, 1200) // Safari has no requestIdleCallback
    return () => clearTimeout(timer)
  }, [])

  // Decoding a loop for a visitor who is reading the price list three sections down is waste,
  // and on a phone it is waste that costs battery. Play only while the hero is on screen.
  // A rejected play() means autoplay was blocked; the poster simply stays.
  useEffect(() => {
    if (!src) return
    const video = videoRef.current
    const wrap = wrapRef.current
    if (!video || !wrap) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0 },
    )
    observer.observe(wrap)
    return () => observer.disconnect()
  }, [src])

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* The poster is a real element rather than the video's poster attribute, because that
          attribute takes one URL and the two crops have different shapes — a landscape still
          under a portrait video visibly re-frames the moment playback starts. <picture> honours
          `media` properly (unlike <source> inside <video>), so only the matching file is ever
          fetched, and it ships in the server HTML so it is there for first paint. */}
      <picture>
        <source media="(min-width: 768px)" srcSet={DESKTOP_POSTER} />
        <img
          src={MOBILE_POSTER}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      <video
        ref={videoRef}
        src={src ?? undefined}
        preload="none"
        muted
        loop
        playsInline
        tabIndex={-1}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* The overlay differs by breakpoint because the copy does. On desktop the text sits in
          a left column, so the left side is darkened hard and the clipper on the right stays
          visible. On a phone the copy spans the full width, so a left-weighted gradient misses
          it — measured, the location line landed at 4.30:1 — and a deeper vertical ramp covers
          it instead.

          Gradients multiply rather than add: a flat 0.72 scrim under a 0.55 gradient left 12%
          of the video showing, which is no video at all. Overlays rather than
          filter: brightness(), which a playing video would recomposite every frame. */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,7,10,0.62) 0%, rgba(7,7,10,0.72) 40%, rgba(7,7,10,0.84) 72%, var(--color-bg) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,7,10,0.82) 0%, rgba(7,7,10,0.62) 38%, rgba(7,7,10,0) 68%), " +
            "linear-gradient(180deg, rgba(7,7,10,0.56) 0%, rgba(7,7,10,0.66) 40%, rgba(7,7,10,0.78) 72%, var(--color-bg) 100%)",
        }}
      />
    </div>
  )
}
