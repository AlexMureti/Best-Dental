import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const gallery = [
  {
    src: "/images/screenshot-20from-202025-12-03-2016-06-59.png",
    alt: "Dental crowns transformation",
  },
  {
    src: "/images/screenshot-20from-202025-12-03-2015-54-18.png",
    alt: "Patient treatment",
  },
  {
    src: "/images/screenshot-20from-202025-12-03-2016-07-42.png",
    alt: "Braces patient",
  },
  {
    src: "/images/screenshot-20from-202025-12-03-2012-48-38.png",
    alt: "Happy patient smiling",
  },
  {
    src: "/images/screenshot-20from-202025-12-03-2015-54-42.png",
    alt: "Dental imaging",
  },
  {
    src: "/images/screenshot-20from-202025-12-03-2016-06-17.png",
    alt: "Clinic reception",
  },
]

export function GalleryPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-dental-teal font-medium mb-2">Gallery</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Work</h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/gallery">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item, i) => (
            <Link key={i} href="/gallery" className="aspect-square relative rounded-xl overflow-hidden group">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
