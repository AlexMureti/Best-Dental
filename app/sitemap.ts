import type { MetadataRoute } from "next"
import services from "@/content/services.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bestdental.co.ke"

  const staticPages = ["", "/services", "/gallery", "/about", "/testimonials", "/contact", "/privacy"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages]
}
