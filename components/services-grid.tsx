import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Teeth Whitening",
    price: "Ksh 15,000",
    image: "/images/screenshot-20from-202025-12-03-2012-48-38.png",
    href: "/services/teeth-whitening",
  },
  {
    title: "Dental Braces",
    price: "Ksh 12,000/jaw",
    image: "/images/screenshot-20from-202025-12-03-2016-05-40.png",
    href: "/services/braces",
  },
  {
    title: "Porcelain Crowns",
    price: "Ksh 5,000",
    image: "/images/screenshot-20from-202025-12-03-2016-06-59.png",
    href: "/services/crowns",
  },
  {
    title: "Teeth Masking",
    price: "Ksh 1,500",
    image: "/images/screenshot-20from-202025-12-03-2016-07-23.png",
    href: "/services/masking",
  },
  {
    title: "Scaling & Cleaning",
    price: "Ksh 2,000",
    image: "/images/screenshot-20from-202025-12-03-2016-03-12.png",
    href: "/services/scaling",
  },
  {
    title: "Teeth Replacement",
    price: "From Ksh 5,000",
    image: "/images/screenshot-20from-202025-12-03-2016-02-52.png",
    href: "/services/replacement",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl mb-16">
          <p className="text-dental-teal font-medium mb-2">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Complete Dental Care</h2>
          <p className="mt-4 text-muted-foreground">Affordable, professional dental services for the whole family.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group block">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-foreground group-hover:text-dental-teal transition-colors">
                  {service.title}
                </h3>
                <span className="text-sm text-dental-teal font-medium">{service.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
