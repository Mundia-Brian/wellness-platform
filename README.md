# Multi-Brand Wellness Platform

A Next.js template for creating multi-brand health and wellness websites with dynamic configuration.

## Features

- 🏥 Multi-brand support via JSON configuration
- 🎨 Dynamic theming and branding
- 📱 Responsive design with Tailwind CSS
- 📅 Google Calendar appointment booking
- 💬 WhatsApp integration
- 📝 Markdown blog system
- 🚀 Zero-cost deployment on Vercel/Netlify

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment (optional):**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Generate new brand:**
   ```bash
   npm run generate new-brand-slug
   ```

## Environment Variables

- `BRAND_SLUG`: Which brand configuration to use (defaults to 'afya-ray')
- `FORMSPREE_FORM_ID`: Your Formspree form ID for booking submissions
- Add Google Analytics ID to brand config if needed

## Brand Configuration

Each brand is configured via `brands/{slug}/config.json`:

```json
{
  "name": "Brand Name",
  "slug": "brand-slug",
  "tagline": "Your tagline",
  "description": "Brand description",
  "colors": {
    "primary": "#10B981",
    "secondary": "#06B6D4",
    "accent": "#059669"
  },
  "contact": {
    "phone": "+254700000000",
    "whatsapp": "+254700000000",
    "email": "info@brand.com",
    "address": "Your address"
  },
  "services": ["Service 1", "Service 2"],
  "bookingUrl": "#booking-form",
  "analytics": {
    "googleAnalyticsId": null
  }
}
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Publish directory: `.next`
3. Deploy

## Adding New Brands

1. Run: `npm run generate new-brand-name`
2. Edit `brands/new-brand-name/config.json`
3. Deploy

The platform automatically reads the brand configuration and applies theming, content, and styling.