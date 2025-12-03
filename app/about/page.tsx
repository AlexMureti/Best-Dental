import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import team from "@/content/team.json"
import { ArrowRight, Award, Users, Heart, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Dr. Ken Walibora and the Best Dental team. Learn about our mission to provide expert cosmetic dentistry in Juja, Central Kenya.",
  keywords: ["Dr Ken Walibora", "dentist Juja", "dental clinic Juja", "cosmetic dentist Kenya"],
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Best Dental"
        description="World-class cosmetic dentistry in Juja. We believe everyone deserves a smile they're proud of, delivered with care, precision, and transparency."
        imageSrc="/images/screenshot-20from-202025-12-03-2016-06-17.png"
      />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-dental-deep to-dental-deep/95 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-dental-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-dental-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-dental-secondary/30 to-dental-glow/20 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-dental-glow" />
              </div>
              <p className="text-4xl font-bold text-white">10+</p>
              <p className="text-sm text-white/60 mt-1">Years Experience</p>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-dental-secondary/30 to-dental-glow/20 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-dental-glow" />
              </div>
              <p className="text-4xl font-bold text-white">2,500+</p>
              <p className="text-sm text-white/60 mt-1">Happy Patients</p>
            </div>
            <div className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-dental-secondary/30 to-dental-glow/20 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-dental-glow" />
              </div>
              <p className="text-4xl font-bold text-white">98%</p>
              <p className="text-sm text-white/60 mt-1">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Updated with real team photo */}
      <section className="py-20 lg:py-28 bg-dental-deep relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 bg-dental-primary/20 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-dental-secondary/20 px-4 py-2 text-sm text-dental-glow mb-6">
                <Sparkles className="h-4 w-4" />
                Our Story
              </div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Our Mission</h2>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Best Dental was founded by Dr. Ken Walibora with a simple mission: bring world-class cosmetic dentistry
                to Juja. We believe everyone deserves a smile they&apos;re proud of, delivered with care, precision, and
                transparency.
              </p>
              <p className="mt-4 text-lg text-white/70 leading-relaxed">
                Our clinic combines modern dental technology with a warm, welcoming environment. We take time to
                understand your goals and create personalized treatment plans that fit your lifestyle and budget.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-dental-secondary hover:bg-dental-primary text-white rounded-2xl px-8"
              >
                <Link href="/contact">
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-dental-secondary/30 to-dental-glow/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/screenshot-20from-202025-12-03-2016-08-04.png"
                  alt="Best Dental team - Dr. Ken Walibora and dental assistant"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="team-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-dental-deep via-dental-primary/30 to-dental-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dental-secondary/20 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-dental-glow/20 px-4 py-2 text-sm text-dental-glow mb-6">
              <Users className="h-4 w-4" />
              Our Experts
            </div>
            <h2 id="team-heading" className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              Dedicated professionals committed to your dental health
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {team.map((member) => (
              <div key={member.id} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-dental-secondary/40 to-dental-glow/40 rounded-3xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:border-dental-glow/30 transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl ring-2 ring-dental-glow/30 group-hover:ring-dental-glow/60 transition-all">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                      <p className="text-dental-glow text-lg">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-white/70 leading-relaxed">{member.bio}</p>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-dental-glow uppercase tracking-wider">Qualifications</h4>
                    <ul className="mt-3 space-y-2">
                      {member.qualifications.map((qual, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-white/60">
                          <span className="h-1.5 w-1.5 rounded-full bg-dental-mint" />
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dental-secondary via-dental-primary to-dental-secondary" />
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Ready to Meet Us?</h2>
          <p className="mt-4 text-lg text-white/80">Book a consultation and experience the Best Dental difference.</p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-dental-primary hover:bg-dental-glow hover:text-dental-deep rounded-2xl px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <Link href="/contact">
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
