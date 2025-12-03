"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Grace Mwangi",
    location: "Juja",
    service: "Teeth Whitening",
    rating: 5,
    text: "Dr. Ken and his team are amazing! My teeth have never looked better. The whole experience was comfortable and professional.",
    image: "/images/screenshot-20from-202025-12-03-2016-07-42.png",
  },
  {
    id: 2,
    name: "James Odhiambo",
    location: "Thika",
    service: "Dental Braces",
    rating: 5,
    text: "I was nervous about getting braces but the team made me feel at ease. Great results and very affordable!",
    image: "/images/screenshot-20from-202025-12-03-2016-08-04.png",
  },
  {
    id: 3,
    name: "Faith Njeri",
    location: "Juja",
    service: "Crowns",
    rating: 5,
    text: "Best dental clinic in Juja! They transformed my smile completely. Highly recommend their services.",
    image: "/images/screenshot-20from-202025-12-03-2016-05-56.png",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const testimonial = testimonials[current]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-dental-primary mb-2">Testimonials</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">What Our Patients Say</h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-dental-light/50 rounded-2xl p-8 md:p-10">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn("h-5 w-5", i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-border")}
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">"{testimonial.text}"</blockquote>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-white">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location} · {testimonial.service}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full bg-transparent">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === current ? "w-6 bg-dental-primary" : "w-2 bg-border hover:bg-muted-foreground",
                  )}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={next} className="rounded-full bg-transparent">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
