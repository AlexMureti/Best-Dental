import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { Star, ArrowRight, Quote, MessageCircle } from "lucide-react"
import testimonials from "@/content/testimonials.json"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read reviews from our patients at Best Dental in Juja. Discover why we are the top-rated dental clinic in Central Kenya.",
  keywords: ["dental reviews Juja", "best dentist reviews Kenya", "patient testimonials dental"],
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Patient Testimonials"
        description="Don't just take our word for it. Here's what our patients have to say about their experience at Best Dental."
        imageSrc="/services-teeth-whitening.jpg"
      />

      {/* Trust Badge */}
      <section className="py-12 bg-gradient-to-b from-dental-deep to-dental-deep/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dental-glow/10 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-dental-secondary/20 px-6 py-3 text-dental-glow">
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">Trusted by 2,500+ Patients in Juja</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24 bg-dental-deep relative overflow-hidden">
        {/* Ambient effects */}
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-dental-secondary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-dental-glow/15 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "group relative",
                  index === 0 && "md:col-span-2", // First testimonial spans full width
                )}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-dental-secondary/30 to-dental-glow/30 rounded-3xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:border-dental-glow/30 transition-all duration-300 h-full">
                  {/* Quote icon */}
                  <Quote className="absolute top-6 right-6 h-16 w-16 text-dental-glow/10" />

                  <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-6 w-6",
                          i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-white/20",
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-6">
                    <p className={cn("text-white/90 leading-relaxed", index === 0 ? "text-xl" : "text-lg")}>
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-dental-glow/40 group-hover:ring-dental-glow/60 transition-all">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt=""
                        fill
                        className="object-cover"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <cite className="not-italic font-semibold text-white text-lg">{testimonial.name}</cite>
                      <p className="text-dental-glow">{testimonial.service}</p>
                      <p className="text-sm text-white/50">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dental-primary via-dental-secondary to-dental-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-dental-glow/20 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Join Our Happy Patients</h2>
          <p className="mt-4 text-lg text-white/80">
            Experience the care that has made us Juja&apos;s most trusted dental clinic.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-dental-primary hover:bg-dental-glow hover:text-dental-deep rounded-2xl px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <Link href="/contact">
              Book Your Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
