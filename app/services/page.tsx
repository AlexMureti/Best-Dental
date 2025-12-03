import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, Phone, MapPin, Clock, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive dental services in Juja including teeth whitening, dental implants, braces, veneers, and smile makeovers by Dr. Ken Walibora.",
  keywords: ["dental services Juja", "teeth whitening Juja", "dental implants Juja", "braces Juja", "veneers Juja"],
}

const services = [
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Professional whitening for a brighter, confident smile. Results up to 8 shades whiter in one visit.",
    price: "KSh 15,000",
    image: "/images/screenshot-20from-202025-12-03-2016-07-23.png",
  },
  {
    id: "teeth-masking",
    title: "Teeth Masking",
    description: "Remove brown and yellowish teeth affected by fluorosis. Boost your confidence with a brighter smile.",
    price: "KSh 1,500",
    oldPrice: "KSh 2,000",
    image: "/images/screenshot-20from-202025-12-03-2016-07-23.png",
  },
  {
    id: "scaling",
    title: "Scaling & Cleaning",
    description: "Professional deep cleaning to remove plaque and tartar buildup for healthier gums.",
    price: "KSh 2,000",
    image: "/images/screenshot-20from-202025-12-03-2018-36-15.png",
  },
  {
    id: "porcelain-crowns",
    title: "Porcelain Crowns",
    description: "Custom-made crowns that restore damaged teeth to their natural beauty and function.",
    price: "KSh 5,000",
    image: "/images/screenshot-20from-202025-12-03-2016-03-12.png",
  },
  {
    id: "teeth-replacement",
    title: "Teeth Replacement",
    description: "Permanent solutions for missing teeth. No need to continue hiding your smile.",
    price: "From KSh 8,000",
    image: "/images/screenshot-20from-202025-12-03-2016-02-52.png",
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Pain-free treatment to save infected teeth using modern techniques.",
    price: "From KSh 12,000",
    image: "/images/screenshot-20from-202025-12-03-2015-54-18.png",
  },
]

const bracesFeatures = [
  "Natural Appearance",
  "Straighten the teeth",
  "Correct your bite",
  "Maintain self-confidence",
  "Easily adjustable",
  "Improves Speech",
  "Prevents tooth decay",
  "Prevents Jawbone Erosion",
]

const signsToVisit = ["Bleeding Gums", "Sensitivity", "Plaque Build Up", "Tooth discoloration"]

export default function ServicesPage() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</p>
            <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
              Complete Dental Care Under One Roof
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From routine check-ups and cleanings to cosmetic transformations and restorative treatments. Your smile is
              our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Featured: Braces Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Most Popular
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Braces & Orthodontics</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Transform your smile with our professional braces treatment. We offer both traditional braces and modern
                clear aligners for children, teens, and adults.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {bracesFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-accent/20 rounded-xl border border-accent/30">
                <p className="text-sm font-medium text-accent-foreground">
                  Lipa Mdogo Mdogo Available - Pay in installments!
                </p>
                <p className="mt-1 text-2xl font-bold text-primary">From KSh 12,000 per jaw</p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254724124735"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Book Consultation
                  </a>
                </Button>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/screenshot-20from-202025-12-03-2018-39-01.png"
                    alt="Advantages of braces"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/screenshot-20from-202025-12-03-2016-07-42.png"
                    alt="Happy patient with braces"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/screenshot-20from-202025-12-03-2018-37-40.png"
                    alt="Fun facts about braces"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/screenshot-20from-202025-12-03-2016-06-59.png"
                    alt="Braces transformation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">What We Offer</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Our Dental Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {service.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">{service.oldPrice}</span>
                      )}
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254724124735"}?text=Hi, I'm interested in ${service.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need to Visit Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/screenshot-20from-202025-12-03-2018-36-15.png"
                  alt="Signs you need to visit a dentist"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-lg">
                <p className="text-sm font-medium">Let us give you</p>
                <p className="text-xl font-bold">The Best Smile</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Signs You Need to Visit a Dentist</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Don't wait until it's too late. If you're experiencing any of these symptoms, it's time to schedule a
                checkup.
              </p>

              <div className="mt-8 space-y-4">
                {signsToVisit.map((sign) => (
                  <div key={sign} className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{sign}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254724124735"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team at Work */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">Expert Care</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Our Team at Work</h2>
            <p className="mt-4 text-muted-foreground">
              Experience professional dental care in a comfortable, modern environment.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/screenshot-20from-202025-12-03-2018-36-43.png"
                alt="Dental technician at work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/screenshot-20from-202025-12-03-2015-54-18.png"
                alt="Doctor treating patient"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/screenshot-20from-202025-12-03-2018-35-44.png"
                alt="Patient treatment session"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/screenshot-20from-202025-12-03-2012-48-38.png"
                alt="Happy patient smiling"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Ready to Transform Your Smile?</h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards a healthier, more confident smile.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254724124735"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 mr-2" />
                +254 724 124 735
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/contact">
                <MapPin className="w-4 h-4 mr-2" />
                Juja, Highpoint
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Mon-Sat: 8am - 6pm</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm">Lipa Mdogo Mdogo</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
