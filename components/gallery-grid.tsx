"use client"

import { useState, useCallback, useEffect, lazy, Suspense } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Sparkles, ArrowRight } from "lucide-react"

const Lightbox = lazy(() => import("./lightbox"))

interface GalleryItem {
  id: string
  before: string
  after: string
  title: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    before: "/images/screenshot-20from-202025-12-03-2016-06-59.png",
    after: "/images/screenshot-20from-202025-12-03-2016-06-59.png",
    title: "Porcelain Crowns",
    description: "Complete smile transformation - Ksh 5,000",
  },
  {
    id: "2",
    before: "/images/screenshot-20from-202025-12-03-2016-05-40.png",
    after: "/images/screenshot-20from-202025-12-03-2016-07-42.png",
    title: "Dental Braces",
    description: "Straighten your teeth - Ksh 12,000 per jaw",
  },
  {
    id: "3",
    before: "/images/screenshot-20from-202025-12-03-2016-07-23.png",
    after: "/images/screenshot-20from-202025-12-03-2016-07-23.png",
    title: "Teeth Masking",
    description: "Remove fluorosis stains - Ksh 1,500",
  },
  {
    id: "4",
    before: "/images/screenshot-20from-202025-12-03-2016-02-52.png",
    after: "/images/screenshot-20from-202025-12-03-2016-02-52.png",
    title: "Teeth Replacement",
    description: "Permanent solution for missing teeth",
  },
]

export function GalleryGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const elements = document.querySelectorAll("[data-gallery-item]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            id={`gallery-${item.id}`}
            data-gallery-item
            className={cn(
              "group relative rounded-2xl transition-all duration-[420ms] ease-[cubic-bezier(0.22,0.9,0.32,1)]",
              visibleItems.has(`gallery-${item.id}`) ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-dental-secondary/40 to-dental-glow/40 rounded-3xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 group-hover:border-dental-glow/30 transition-all">
              <button
                onClick={() => openLightbox(index)}
                className="w-full text-left focus-ring rounded-xl"
                aria-label={`View ${item.title} photos`}
              >
                <div className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-white/10">
                  <Image
                    src={item.after || "/placeholder.svg"}
                    alt={`${item.title} result`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-lg bg-dental-secondary/80 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-white flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Result
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                    <p className="text-sm text-white/60 mt-1">{item.description}</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dental-secondary/20 text-dental-glow group-hover:bg-dental-secondary/40 transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Suspense fallback={null}>
          <Lightbox
            items={galleryItems}
            currentIndex={currentIndex}
            onClose={closeLightbox}
            onNavigate={setCurrentIndex}
          />
        </Suspense>
      )}
    </>
  )
}
