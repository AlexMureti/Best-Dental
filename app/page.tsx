import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { AboutSection } from "@/components/about-section"
import { GalleryPreview } from "@/components/gallery-preview"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <GalleryPreview />
      <CTASection />
    </>
  )
}
