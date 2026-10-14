# Best Dental

A marketing and appointment-request website for a dental clinic in Juja, Kenya. Visitors can read about services and prices, browse a gallery, and request an appointment; the request is validated on the server and turned into a pre-filled WhatsApp message to the clinic.

## Stack

- Next.js 16 (App Router) with React 19 and TypeScript
- Tailwind CSS 4 with shadcn/ui components on Radix UI
- lucide-react icons and Vercel Analytics
- Content for the service detail, about and testimonial pages in JSON files under `content/`

## Run locally

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000. `pnpm build` and `pnpm start` produce and serve the production build. `NEXT_PUBLIC_WHATSAPP_NUMBER` is optional; without it the code falls back to a number hardcoded in the source.

## Status

Unfinished: a v0.app export committed in December 2025 and not developed since. Placeholder copy is mixed into the real clinic details, four service links lead to 404 pages, ten referenced images are missing from `public/`, and the booking endpoint only logs the request. The domain named in the code serves a different site, so no live URL is listed.
