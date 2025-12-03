import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-24 bg-dental-soft/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/screenshot-20from-202025-12-03-2016-00-39.png"
                alt="Best Dental Team"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-xl max-w-[200px] hidden md:block">
              <p className="text-3xl font-bold text-dental-teal">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-dental-teal font-medium mb-2">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Trusted Dental Care in Juja</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Dr. Ken Walibora and his dedicated team bring years of experience in both general and cosmetic dentistry.
              We combine modern technology with personalized care to deliver exceptional results.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At Best Dental, every patient is treated like family. We take time to understand your concerns and create
              treatment plans tailored to your needs and budget.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-2xl font-bold text-foreground">5000+</p>
                <p className="text-sm text-muted-foreground">Happy Patients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>

            <Button asChild className="mt-8 bg-dental-teal hover:bg-dental-deep text-white">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
