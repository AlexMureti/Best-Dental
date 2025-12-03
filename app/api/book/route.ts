import { type NextRequest, NextResponse } from "next/server"

// Phone regex for E.164 format validation
const PHONE_REGEX = /^\+?[1-9]\d{7,14}$/

// Simple in-memory rate limiting (in production, use Redis or similar)
const requestCounts = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 10
const RATE_WINDOW = 60000 // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT) {
    return false
  }

  record.count++
  return true
}

// Sanitize input to prevent injection
function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim().slice(0, 500)
}

interface BookingRequest {
  name: string
  phone: string
  service: string
  date: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "unknown"

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const body: BookingRequest = await request.json()
    const { name, phone, service, date, message } = body

    // Validate required fields
    if (!name || !phone || !service || !date) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    // Sanitize inputs
    const cleanName = sanitize(name)
    const cleanPhone = phone.replace(/[\s-]/g, "")
    const cleanService = sanitize(service)
    const cleanDate = sanitize(date)
    const cleanMessage = message ? sanitize(message) : ""

    // Validate phone number format
    if (!PHONE_REGEX.test(cleanPhone)) {
      return NextResponse.json({ ok: false, error: "Invalid phone number format" }, { status: 400 })
    }

    // Log booking request (in production, save to database)
    console.log("[Booking Request]", {
      name: cleanName,
      phone: cleanPhone,
      service: cleanService,
      date: cleanDate,
      message: cleanMessage,
      timestamp: new Date().toISOString(),
      ip,
    })

    // Create WhatsApp message
    const whatsappNumber = "254724124735" // Updated to correct clinic phone number
    const whatsappMessage = encodeURIComponent(
      `Hello! I'd like to book an appointment at Best Dental.\n\n` +
        `Name: ${cleanName}\n` +
        `Service: ${cleanService}\n` +
        `Preferred Date: ${cleanDate}\n` +
        (cleanMessage ? `Notes: ${cleanMessage}\n` : "") +
        `\nPlease confirm my appointment. Thank you!`,
    )
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    return NextResponse.json({
      ok: true,
      message: "Booking request received. We will contact you within 24 hours.",
      whatsappUrl,
    })
  } catch (error) {
    console.error("[Booking Error]", error)
    return NextResponse.json({ ok: false, error: "Failed to process booking. Please try again." }, { status: 500 })
  }
}
