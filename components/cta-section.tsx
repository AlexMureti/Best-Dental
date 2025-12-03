import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-dental-deep text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform Your Smile?</h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          Book a free consultation today and take the first step towards the smile you've always wanted. We're here to
          help.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-dental-deep hover:bg-dental-lime hover:text-white px-8">
            <Link href="/contact">Book Appointment</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 bg-transparent"
          >
            <a
              href={`https://wa.me/${process.env.WHATSAPP_NUMBER || "254724124735"}?text=Hello, I'd like to book an appointment`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Us
            </a>
          </Button>
        </div>

        <p className="mt-8 text-white/50 text-sm">
          Or call us directly at{" "}
          <a href="tel:+254724124735" className="text-white hover:text-dental-lime transition-colors">
            0724 124 735
          </a>
        </p>
      </div>
    </section>
  )
}
