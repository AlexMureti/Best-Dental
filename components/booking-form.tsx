"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Loader2 } from "lucide-react"

const services = [
  { id: "teeth-whitening", title: "Teeth Whitening" },
  { id: "braces", title: "Dental Braces" },
  { id: "crowns", title: "Porcelain Crowns" },
  { id: "masking", title: "Teeth Masking" },
  { id: "scaling", title: "Scaling & Cleaning" },
  { id: "replacement", title: "Teeth Replacement" },
  { id: "consultation", title: "General Consultation" },
]

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null)

  const validate = useCallback(() => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!formData.service) newErrors.service = "Please select a service"
    if (!formData.date) newErrors.date = "Please select a date"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate() || isSubmitting) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (data.ok) {
        setIsSuccess(true)
        setWhatsappUrl(data.whatsappUrl)
      }
    } catch {
      // Handle error silently
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  if (isSuccess) {
    return (
      <div className="bg-white rounded-xl border border-border p-8 text-center">
        <CheckCircle className="h-12 w-12 text-dental-primary mx-auto" />
        <h3 className="mt-4 text-xl font-semibold">Booking Sent!</h3>
        <p className="mt-2 text-muted-foreground">We'll contact you within 24 hours to confirm.</p>
        {whatsappUrl && (
          <Button asChild className="mt-6 bg-[#25D366] hover:bg-[#128C7E] text-white">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Message on WhatsApp
            </a>
          </Button>
        )}
        <Button
          variant="ghost"
          className="mt-3"
          onClick={() => {
            setIsSuccess(false)
            setFormData({ name: "", phone: "", service: "", date: "", message: "" })
          }}
        >
          Book Another
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6 md:p-8">
      <h3 className="text-xl font-semibold text-foreground">Book Appointment</h3>
      <p className="mt-1 text-sm text-muted-foreground">Fill in your details below</p>

      <div className="mt-6 space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="phone">Phone (WhatsApp) *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+254712345678"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>

        <div>
          <Label htmlFor="service">Service *</Label>
          <Select value={formData.service} onValueChange={(v) => handleChange("service", v)}>
            <SelectTrigger className={errors.service ? "border-destructive" : ""}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.id} value={s.id}>
                  {s.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
        </div>

        <div>
          <Label htmlFor="date">Preferred Date *</Label>
          <Input
            id="date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
            className={errors.date ? "border-destructive" : ""}
          />
          {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
        </div>

        <div>
          <Label htmlFor="message">Additional Notes</Label>
          <Textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Any concerns or questions?"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-dental-primary hover:bg-dental-deep text-white"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Request Appointment"
          )}
        </Button>
      </div>
    </form>
  )
}
