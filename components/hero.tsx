"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/screenshot-20from-202025-12-03-2016-05-56.png"
          alt="Happy family at Best Dental Clinic"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <p className="text-dental-lime font-medium mb-4">Best Dental Clinic, Juja</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your Smile,
            <br />
            Our Mission
          </h1>

          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Complete dental care under one roof — from routine check-ups and cleanings to cosmetic transformations and
            restorative treatments.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-dental-teal hover:bg-dental-deep text-white px-8">
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 bg-transparent"
            >
              <a href="tel:+254724124735">
                <Phone className="mr-2 h-4 w-4" />
                0724 124 735
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-2 text-white/70 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Juja, Highpoint, Along Gachororo Road</span>
          </div>
        </div>
      </div>
    </section>
  )
}
