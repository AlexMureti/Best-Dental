import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { ArrowLeft, Clock, CreditCard, CheckCircle2 } from "lucide-react"
import services from "@/content/services.json"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)

  if (!service) return {}

  return {
    title: service.title,
    description: `${service.fullDescription} Book a consultation at Best Dental in Juja.`,
    keywords: [`${service.title.toLowerCase()} Juja`, `${service.title.toLowerCase()} Kenya`, "cosmetic dentist Juja"],
  }
}

const serviceFeatures: Record<string, string[]> = {
  "teeth-whitening": [
    "Professional-grade whitening gel",
    "LED light acceleration technology",
    "Up to 8 shades whiter",
    "Safe enamel protection",
    "Long-lasting results",
  ],
  "dental-implants": [
    "Premium titanium implants",
    "Natural-looking custom crowns",
    "Permanent tooth replacement",
    "Preserves jawbone health",
    "Lifetime durability",
  ],
  braces: [
    "Traditional & clear options",
    "Customized treatment plans",
    "Suitable for all ages",
    "Regular progress monitoring",
    "Retention care included",
  ],
  veneers: [
    "Premium porcelain materials",
    "Custom color matching",
    "Minimal tooth preparation",
    "Stain-resistant finish",
    "Natural translucency",
  ],
  "root-canal": [
    "Advanced anesthesia techniques",
    "Microscopic precision",
    "Single-visit options",
    "Tooth preservation focus",
    "Pain-free experience",
  ],
  "smile-makeover": [
    "Comprehensive consultation",
    "Digital smile preview",
    "Multiple procedure options",
    "Personalized treatment plan",
    "Transformative results",
  ],
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)

  if (!service) {
    notFound()
  }

  const features = serviceFeatures[service.id] || []

  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-dental-deep/85 via-dental-deep/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dental-deep/80 via-transparent to-transparent" />
          {/* Vibrant accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-dental-glow/10 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-dental-glow font-medium">{service.title}</li>
            </ol>
          </nav>

          <Button asChild variant="ghost" className="mb-6 -ml-4 text-white/70 hover:text-white hover:bg-white/10">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Services
            </Link>
          </Button>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl tracking-tight">
                {service.title}
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">{service.fullDescription}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3">
                  <Clock className="h-5 w-5 text-dental-glow" />
                  <span className="text-white">{service.duration}</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3">
                  <CreditCard className="h-5 w-5 text-dental-mint" />
                  <span className="text-white">{service.price}</span>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-dental-secondary hover:bg-dental-primary text-white rounded-xl px-8 py-6 text-lg shadow-glow"
                >
                  <Link href="#booking">Book Consultation</Link>
                </Button>
              </div>
            </div>

            {/* Features Card */}
            <div className="glass-dark rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">What's Included</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-dental-mint flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dental-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white text-center mb-4">The Process</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Our streamlined approach ensures you receive the highest quality care at every step
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass-dark rounded-2xl p-8 border border-white/10 text-center group hover:border-dental-secondary/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-dental-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-secondary/30 transition-colors">
                <span className="text-2xl font-bold text-dental-glow">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Consultation</h3>
              <p className="text-white/60">Comprehensive assessment and personalized treatment plan discussion</p>
            </div>
            <div className="glass-dark rounded-2xl p-8 border border-white/10 text-center group hover:border-dental-secondary/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-dental-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-secondary/30 transition-colors">
                <span className="text-2xl font-bold text-dental-glow">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Treatment</h3>
              <p className="text-white/60">Expert care using advanced technology and premium materials</p>
            </div>
            <div className="glass-dark rounded-2xl p-8 border border-white/10 text-center group hover:border-dental-secondary/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-dental-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-secondary/30 transition-colors">
                <span className="text-2xl font-bold text-dental-glow">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Aftercare</h3>
              <p className="text-white/60">Follow-up support and maintenance guidance for lasting results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        className="py-20 bg-gradient-to-b from-dental-deep to-dental-primary/90 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-dental-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-dental-glow/10 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <span className="text-dental-glow text-sm font-medium tracking-wider uppercase">Book Now</span>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Ready to Transform Your Smile?</h2>
              <p className="mt-4 text-lg text-white/70">
                Book a consultation to discuss your {service.title.toLowerCase()} treatment with Dr. Ken Walibora.
                Experience world-class dental care in Juja.
              </p>

              <div className="mt-8 glass-dark rounded-2xl p-6 border border-white/10">
                <h4 className="text-white font-semibold mb-4">Why Choose Best Dental?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="h-5 w-5 text-dental-mint" />
                    Experienced cosmetic dentistry specialist
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="h-5 w-5 text-dental-mint" />
                    State-of-the-art equipment
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="h-5 w-5 text-dental-mint" />
                    Comfortable, modern facility
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="h-5 w-5 text-dental-mint" />
                    Flexible payment options
                  </li>
                </ul>
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  )
}
