import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bestdental.co.ke"),
  title: {
    default: "Best Dental — Cosmetic Dentistry in Juja | Dr. Ken Walibora",
    template: "%s | Best Dental — Juja",
  },
  description:
    "Best Dental — cosmetic dentistry in Juja. Teeth whitening, veneers, braces and implants by Dr. Ken Walibora. Book a consultation.",
  keywords: [
    "cosmetic dentist Juja",
    "teeth whitening Juja",
    "braces Juja",
    "dental implants Juja",
    "smile makeover Juja",
    "best dental clinic Juja",
  ],
  authors: [{ name: "Dr. Ken Walibora" }],
  creator: "Best Dental",
  publisher: "Best Dental",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://bestdental.co.ke",
    siteName: "Best Dental",
    title: "Best Dental — Cosmetic Dentistry in Juja",
    description:
      "Expert dental care by Dr. Ken Walibora. Teeth whitening, veneers, braces and implants in Juja, Central Kenya.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Dental - Cosmetic Dentistry in Juja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dental — Cosmetic Dentistry in Juja",
    description: "Expert dental care by Dr. Ken Walibora in Juja, Central Kenya.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bestdental.co.ke",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#00BCD4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="skip-link focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Skip to main content
        </a>
        <JsonLd />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
