# Creedence Clearwater Industrial Website

Professional website for Creedence Clearwater Industrial - industrial cleaning, hydro excavation, vacuum truck services, and specialized industrial solutions.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## 🎨 Brand Colors

- **Primary Orange**: `#f66400`
- **Secondary Black**: `#000000`
- **Background**: `#ffffff`
- **Muted**: `#f5f5f5`

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── services/            # Services listing & individual service pages
│   ├── gallery/             # Photo gallery
│   ├── careers/             # Careers & job application
│   └── contact/             # Contact form & info
├── components/
│   ├── layout/              # Header, Footer, Container
│   ├── ui/                  # Button, Card, Input components
│   ├── sections/            # Hero, ServicesGrid, CTABanner
│   └── forms/               # ContactForm, CareerForm
└── lib/
    └── services.ts          # Service data & utilities
```

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Run Production Build Locally

```bash
npm start
```

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub (already done)
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "Add New Project"
5. Import your `cci` repository
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"

That's it! Your site will be live in ~2 minutes.

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Follow the prompts to deploy.

## 📝 Customization Guide

### Update Contact Information

Edit `components/layout/Footer.tsx` and `app/contact/page.tsx`:
- Phone number
- Email address
- Physical address
- Business hours

### Add Your Logo

1. Add logo image to `/public/images/logo.png`
2. Update `components/layout/Header.tsx` to use the image:

```tsx
<Image src="/images/logo.png" alt="CCI" width={150} height={50} />
```

### Add Gallery Photos

1. Add images to `/public/images/gallery/`
2. Update `app/gallery/page.tsx` to reference your images:

```tsx
import Image from "next/image";

<Image 
  src="/images/gallery/project1.jpg" 
  alt="Project description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### Update Service Details

Edit `lib/services.ts` to modify:
- Service descriptions
- Benefits lists
- Icons (using emoji or replace with custom icons)

### Connect Forms to Email

The contact and career forms currently log to console. To connect them to email:

1. **Option A: Use a form service** (Formspree, Web3Forms, etc.)
2. **Option B: Add API routes** in `app/api/contact/route.ts` with email service (Resend, SendGrid, etc.)

Example with Resend:

```tsx
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'website@yourcompany.com',
    to: 'info@ccind.com',
    subject: 'New Contact Form Submission',
    html: `<p>Name: ${data.name}</p>...`
  });
  
  return Response.json({ success: true });
}
```

### Add Google Maps

Replace the map placeholder in `app/contact/page.tsx`:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

## 📱 Pages Overview

- **Home** (`/`) - Hero, services grid, why choose us, CTA
- **Services** (`/services`) - All services with cards linking to details
- **Service Details** (`/services/[slug]`) - Individual service pages (6 total)
- **About** (`/about`) - Company story, mission, values
- **Gallery** (`/gallery`) - Photo gallery with placeholder structure
- **Careers** (`/careers`) - Job listings and application form
- **Contact** (`/contact`) - Contact form and company information

## 🔧 Environment Variables (Optional)

Create `.env.local` for API keys:

```env
# Email service (if using Resend, SendGrid, etc.)
RESEND_API_KEY=your_key_here

# Analytics (if using Google Analytics, etc.)
NEXT_PUBLIC_GA_ID=your_ga_id
```

## 📊 SEO

Each page has optimized metadata including:
- Title tags
- Meta descriptions
- Keywords

To add more SEO features:
1. Add a sitemap: `app/sitemap.ts`
2. Add robots.txt: `app/robots.ts`
3. Add Google Analytics: Update `app/layout.tsx`

## 🎯 Next Steps

1. ✅ Website deployed to Vercel
2. Add your actual logo and images
3. Update contact information with real details
4. Connect forms to email service
5. Add Google Maps embed
6. Set up Google Analytics (optional)
7. Add actual gallery photos
8. Test all forms and links
9. Set up custom domain on Vercel

## 📞 Support

For questions about the website, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

Built with ❤️ for Creedence Clearwater Industrial
