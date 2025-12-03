export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Best Dental",
    description:
      "Cosmetic dentistry in Juja offering teeth whitening, veneers, braces and implants by Dr. Ken Walibora.",
    url: "https://bestdental.co.ke",
    logo: "https://bestdental.co.ke/logo.png",
    image: "https://bestdental.co.ke/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ken Walibora Road",
      addressLocality: "Juja",
      addressRegion: "Central Kenya",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-1.1008",
      longitude: "37.0144",
    },
    telephone: "+254724124735",
    email: "info@bestdental.co.ke",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "KES",
    paymentAccepted: "Cash, M-Pesa, Credit Card",
    founder: {
      "@type": "Person",
      name: "Dr. Ken Walibora",
      jobTitle: "Lead Dentist",
    },
    sameAs: ["https://www.instagram.com/bestdentalservices"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Teeth Whitening",
            description: "Professional teeth whitening treatments",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dental Implants",
            description: "Permanent tooth replacement solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Braces & Orthodontics",
            description: "Teeth straightening treatments",
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
