import type { Metadata } from "next"
import { GalleryGrid } from "@/components/gallery-grid"
import { PageHero } from "@/components/page-hero"
import { Camera, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before and after photos showcasing smile transformations at Best Dental in Juja. See real results from teeth whitening, veneers, braces, and more.",
  keywords: ["dental before after Juja", "smile transformation Kenya", "teeth whitening results"],
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Smile Gallery"
        description="Real results from real patients. See the transformations we've achieved and explore our state-of-the-art equipment at Best Dental."
        imageSrc="/services-smile-makeover.jpg"
      />

      {/* Gallery Introduction */}
      <section className="py-12 bg-gradient-to-b from-dental-deep to-dental-deep/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dental-secondary/10 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-4 justify-center flex-wrap">
            <div className="flex items-center gap-2 rounded-full bg-dental-secondary/20 px-5 py-2.5 text-dental-glow">
              <Camera className="h-5 w-5" />
              <span className="font-medium">Real Patient Results</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-dental-glow/20 px-5 py-2.5 text-dental-glow">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Premium Equipment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-dental-deep relative overflow-hidden">
        {/* Ambient lighting effects */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-dental-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-dental-glow/10 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  )
}
