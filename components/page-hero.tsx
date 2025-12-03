"use client"

import { useEffect, useRef, useState } from "react"

interface PageHeroProps {
  title: string
  description: string
  videoSrc?: string
  imageSrc?: string
}

export function PageHero({ title, description, videoSrc, imageSrc }: PageHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {videoSrc && !prefersReducedMotion ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover scale-105"
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <div
            className="h-full w-full bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${imageSrc})` }}
            aria-hidden="true"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-dental-deep/50 via-dental-deep/40 to-dental-deep/90" />
        {/* Vibrant accent glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dental-secondary/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl text-balance drop-shadow-lg">
          <span className="text-gradient">{title}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 leading-relaxed drop-shadow-md">{description}</p>
      </div>

      {/* Bottom fade - softer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dental-deep via-dental-deep/50 to-transparent" />
    </section>
  )
}
