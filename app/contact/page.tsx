import type { Metadata } from "next"
import { BookingForm } from "@/components/booking-form"
import { PageHero } from "@/components/page-hero"
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book an appointment at Best Dental in Juja. Contact Dr. Ken Walibora for teeth whitening, dental implants, braces, and more.",
  keywords: ["book dentist Juja", "dental appointment Juja", "contact dentist Kenya"],
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Book Your Appointment"
        description="Ready to start your smile journey? Fill out the form below or contact us directly. We respond to all inquiries within 24 hours."
        imageSrc="/services-smile-makeover.jpg"
      />

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-dental-deep relative overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-dental-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-dental-glow/10 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-dental-secondary/20 px-4 py-2 text-sm text-dental-glow mb-6">
                <MessageCircle className="h-4 w-4" />
                Get in Touch
              </div>
              <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
              <p className="mt-4 text-white/60 text-lg">
                We&apos;re here to help with any questions about our services or your treatment.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-dental-glow/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-dental-secondary/30 to-dental-glow/20 group-hover:from-dental-secondary/40 group-hover:to-dental-glow/30 transition-all">
                    <MapPin className="h-7 w-7 text-dental-glow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Location</h3>
                    <p className="text-white/70">Ken Walibora Road</p>
                    <p className="text-white/70">Juja, Central Kenya</p>
                  </div>
                </a>

                <a
                  href="tel:+254724124735"
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-dental-glow/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-dental-secondary/30 to-dental-glow/20 group-hover:from-dental-secondary/40 group-hover:to-dental-glow/30 transition-all">
                    <Phone className="h-7 w-7 text-dental-glow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Phone</h3>
                    <p className="text-dental-glow text-xl font-semibold group-hover:text-dental-mint transition-colors">
                      0724 124735
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@bestdental.co.ke"
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-dental-glow/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-dental-secondary/30 to-dental-glow/20 group-hover:from-dental-secondary/40 group-hover:to-dental-glow/30 transition-all">
                    <Mail className="h-7 w-7 text-dental-glow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Email</h3>
                    <p className="text-dental-glow group-hover:text-dental-mint transition-colors">
                      info@bestdental.co.ke
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-dental-secondary/30 to-dental-glow/20">
                    <Clock className="h-7 w-7 text-dental-glow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Opening Hours</h3>
                    <p className="text-white/70">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-white/70">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-white/50">Sunday: Closed</p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/bestdentalservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-dental-glow/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-dental-secondary/30 to-dental-glow/20 group-hover:from-dental-secondary/40 group-hover:to-dental-glow/30 transition-all">
                    <Instagram className="h-7 w-7 text-dental-glow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Follow Us</h3>
                    <p className="text-dental-glow group-hover:text-dental-mint transition-colors">
                      @bestdentalservices
                    </p>
                  </div>
                </a>
              </div>

              {/* Map */}
              <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.23099!2d37.0144!3d-1.1008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJuja%2C%20Kenya!5e0!3m2!1sen!2ske!4v1600000000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Best Dental location in Juja, Kenya"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
