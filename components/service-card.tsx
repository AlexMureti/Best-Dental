"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { Sparkles, CircleDot, Smile, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  id: string
  title: string
  shortDescription: string
  icon: string
  index?: number
}

const iconMap: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  implant: CircleDot,
  braces: CircleDot,
  veneer: CircleDot,
  tooth: Heart,
  smile: Smile,
}

export function ServiceCard({ id, title, shortDescription, icon, index = 0 }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = iconMap[icon] || Sparkles

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={cn(
        "group transition-all duration-[420ms] ease-[cubic-bezier(0.22,0.9,0.32,1)]",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Link
        href={`/services/${id}`}
        className="block h-full rounded-2xl glass p-6 shadow-soft transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-glow focus-ring hover:glass-strong"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dental-secondary/20 text-dental-glow transition-colors group-hover:bg-dental-secondary group-hover:text-white">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>

        <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>

        <p className="mt-2 text-sm leading-relaxed text-white/60">{shortDescription}</p>

        <div className="mt-4 flex items-center text-sm font-medium text-dental-glow">
          <span>Learn more</span>
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </div>
  )
}
