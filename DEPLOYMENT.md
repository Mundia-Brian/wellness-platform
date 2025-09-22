# Deployment Guide

## Environment Setup

### Required Environment Variables

1. **BRAND_SLUG** (optional): Specify which brand to use
   - Default: `afya-ray`
   - Example: `BRAND_SLUG=my-wellness-brand`

2. **FORMSPREE_FORM_ID** (required for booking): Your Formspree form ID
   - Sign up at [formspree.io](https://formspree.io)
   - Create a new form and get the form ID
   - Example: `FORMSPREE_FORM_ID=xpzgkqyw`

### Vercel Deployment

1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `BRAND_SLUG=your-brand-slug`
   - `FORMSPREE_FORM_ID=your_form_id`
4. Deploy

### Netlify Deployment

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard
4. Deploy

## Multi-Brand Setup

### Option 1: Environment Variables
Set `BRAND_SLUG` environment variable to switch brands.

### Option 2: Multiple Deployments
Deploy separate instances for each brand with different `BRAND_SLUG` values.

## Analytics Setup

Add Google Analytics ID to your brand configuration:

```json
{
  "analytics": {
    "googleAnalyticsId": "GA_MEASUREMENT_ID"
  }
}
```

## Booking Form Setup

1. Create account at [formspree.io](https://formspree.io)
2. Create new form
3. Copy form ID to `FORMSPREE_FORM_ID` environment variable
4. Test booking form functionality