import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/images/screenshot-20from-202025-12-03-2015-57-09-imgupscaler.jpg"
              alt="Best Dental"
              width={140}
              height={60}
              className="h-14 w-auto"
            />
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Quality dental care for the whole family in Juja.
            </p>
            <a
              href="https://www.instagram.com/bestdentalservices"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Instagram className="h-4 w-4" />
              @bestdentalservices
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="/services/teeth-whitening" className="hover:text-white transition-colors">
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link href="/services/braces" className="hover:text-white transition-colors">
                  Dental Braces
                </Link>
              </li>
              <li>
                <Link href="/services/crowns" className="hover:text-white transition-colors">
                  Porcelain Crowns
                </Link>
              </li>
              <li>
                <Link href="/services/masking" className="hover:text-white transition-colors">
                  Teeth Masking
                </Link>
              </li>
              <li>
                <Link href="/services/scaling" className="hover:text-white transition-colors">
                  Scaling
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Juja, Highpoint, Along Gachororo Road</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+254724124735" className="hover:text-white transition-colors">
                  0724 124 735
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Mon - Sat: 9AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Best Dental Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
