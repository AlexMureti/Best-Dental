"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, X, Phone, Gift, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

function Snowflakes() {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const flakes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 7,
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <>
      {snowflakes.map((flake) => (
        <span
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
          }}
        >
          ❄
        </span>
      ))}
    </>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Snowflakes />

      <div className="bg-gradient-to-r from-[#c41e3a] via-[#228b22] to-[#c41e3a] text-white py-2 px-4 text-center text-sm font-medium relative overflow-hidden">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4 text-[#ffd700] twinkle" />
          <span>Happy Holidays! Gift someone a bright smile this season</span>
          <Gift className="h-4 w-4 text-[#ffd700] twinkle" />
          <span className="hidden sm:inline">— Special offers available!</span>
          <Sparkles className="h-4 w-4 text-[#ffd700] twinkle" />
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white/90 backdrop-blur-sm",
        )}
      >
        <div className="h-1 bg-gradient-to-r from-[#c41e3a] via-[#ffd700] to-[#228b22]" />

        <nav className="mx-auto max-w-6xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Best Dental Clinic"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all",
                    pathname === item.href
                      ? "bg-dental-teal text-white"
                      : "text-foreground hover:bg-dental-soft hover:text-dental-deep",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex md:items-center md:gap-3">
              <a
                href="tel:+254724124735"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-dental-teal transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">0724 124 735</span>
              </a>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-[#c41e3a] to-[#228b22] hover:from-[#a01830] hover:to-[#1a6b1a] text-white shadow-lg"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Gift className="h-4 w-4" />
                  Book Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="h-1 bg-gradient-to-r from-[#c41e3a] via-[#ffd700] to-[#228b22]" />
                <div className="flex flex-col h-full p-6">
                  <div className="flex items-center justify-between mb-8">
                    <Image src="/logo.png" alt="Best Dental" width={100} height={36} className="h-10 w-auto" />
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-[#c41e3a]/10 to-[#228b22]/10 border border-[#c41e3a]/20">
                    <p className="text-sm text-center flex items-center justify-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#ffd700]" />
                      Happy Holidays!
                      <Sparkles className="h-4 w-4 text-[#ffd700]" />
                    </p>
                  </div>

                  <nav className="flex flex-col gap-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "py-3 px-4 text-lg font-medium rounded-lg transition-all",
                          pathname === item.href ? "bg-dental-teal text-white" : "text-foreground hover:bg-dental-soft",
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pt-8">
                    <a href="tel:+254724124735" className="flex items-center gap-2 text-muted-foreground mb-6">
                      <Phone className="h-5 w-5" />
                      0724 124 735
                    </a>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-[#c41e3a] to-[#228b22] hover:from-[#a01830] hover:to-[#1a6b1a] text-white"
                    >
                      <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2"
                      >
                        <Gift className="h-5 w-5" />
                        Book Appointment
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  )
}
