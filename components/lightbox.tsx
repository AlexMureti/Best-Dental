"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LightboxProps {
  items: Array<{
    id: string
    before: string
    after: string
    title: string
    description: string
  }>
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ items, currentIndex, onClose, onNavigate }: LightboxProps) {
  const currentItem = items[currentIndex]

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          onNavigate(currentIndex > 0 ? currentIndex - 1 : items.length - 1)
          break
        case "ArrowRight":
          onNavigate(currentIndex < items.length - 1 ? currentIndex + 1 : 0)
          break
      }
    },
    [currentIndex, items.length, onClose, onNavigate],
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [handleKeyDown])

  const goToPrevious = () => {
    onNavigate(currentIndex > 0 ? currentIndex - 1 : items.length - 1)
  }

  const goToNext = () => {
    onNavigate(currentIndex < items.length - 1 ? currentIndex + 1 : 0)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dental-deep/95 transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={`${currentItem.title} gallery view`}
    >
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 text-white hover:bg-white/10 focus-ring"
        aria-label="Close gallery"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Navigation - Previous */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 z-10 text-white hover:bg-white/10 focus-ring"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      {/* Main content */}
      <div className="mx-auto max-w-5xl px-16">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={currentItem.before || "/placeholder.svg"}
              alt={`${currentItem.title} - Before treatment`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <span className="absolute bottom-4 left-4 rounded-lg bg-dental-deep/80 px-3 py-1.5 text-sm font-medium text-white">
              
            </span>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={currentItem.after || "/placeholder.svg"}
              alt={`${currentItem.title} - After treatment`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <span className="absolute bottom-4 left-4 rounded-lg bg-dental-secondary/90 px-3 py-1.5 text-sm font-medium text-white">
              
            </span>
          </div>
        </div>
        <div className="mt-4 text-center text-white">
          <h3 className="text-xl font-semibold">{currentItem.title}</h3>
          <p className="text-white/70">{currentItem.description}</p>
          <p className="mt-2 text-sm text-white/50">
            {currentIndex + 1} of {items.length} • Use arrow keys to navigate
          </p>
        </div>
      </div>

      {/* Navigation - Next */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 z-10 text-white hover:bg-white/10 focus-ring"
        aria-label="Next image"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  )
}
