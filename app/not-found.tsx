import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="mx-auto max-w-md px-4 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-dental-glow/30">
          <span className="text-4xl font-bold text-dental-primary">404</span>
        </div>
        <h1 className="mt-6 text-3xl font-semibold text-dental-deep">Page Not Found</h1>
        <p className="mt-4 text-dental-deep/60">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="bg-dental-primary hover:bg-dental-primary/90 text-white rounded-2xl">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-2xl bg-transparent">
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
