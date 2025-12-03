import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Best Dental. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-dental-deep">Privacy Policy</h1>
        <p className="mt-4 text-dental-deep/60">Last updated: December 2024</p>

        <div className="mt-8 prose prose-lg max-w-none text-dental-deep/80">
          <h2 className="text-2xl font-semibold text-dental-deep mt-8">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, including your name, phone number, email address, and any
            other information you choose to provide when booking an appointment or contacting us.
          </p>

          <h2 className="text-2xl font-semibold text-dental-deep mt-8">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and confirm your appointment bookings</li>
            <li>Contact you regarding your appointments and dental care</li>
            <li>Send appointment reminders via WhatsApp or SMS</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our services and patient experience</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-deep mt-8">3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties. Your information is
            kept confidential and is only used for the purposes stated in this policy.
          </p>

          <h2 className="text-2xl font-semibold text-dental-deep mt-8">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-dental-deep mt-8">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. Contact us at
            info@bestdental.co.ke to exercise these rights.
          </p>

          <h2 className="text-2xl font-semibold text-dental-deep mt-8">6. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <ul className="list-none space-y-1">
            <li>Email: info@bestdental.co.ke</li>
            <li>Phone: +254 700 000 000</li>
            <li>Address: Ken Walibora Road, Juja, Central Kenya</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
