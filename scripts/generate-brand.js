const fs = require('fs')
const path = require('path')

function generateBrand(brandSlug) {
  const brandDir = path.join('brands', brandSlug)
  
  if (!fs.existsSync(brandDir)) {
    fs.mkdirSync(brandDir, { recursive: true })
  }
  
  const configTemplate = {
    name: "New Brand",
    slug: brandSlug,
    tagline: "Your wellness tagline here",
    description: "Brand description here",
    colors: {
      primary: "#10B981",
      secondary: "#06B6D4", 
      accent: "#059669"
    },
    contact: {
      phone: "+254700000000",
      whatsapp: "+254700000000",
      email: "info@newbrand.com",
      address: "Your address here"
    },
    services: [
      "Service 1",
      "Service 2"
    ],
    bookingUrl: "https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID"
  }
  
  const configPath = path.join(brandDir, 'config.json')
  fs.writeFileSync(configPath, JSON.stringify(configTemplate, null, 2))
  
  console.log(`Brand ${brandSlug} generated at ${brandDir}`)
}

const brandSlug = process.argv[2]
if (!brandSlug) {
  console.error('Usage: node generate-brand.js <brand-slug>')
  process.exit(1)
}

generateBrand(brandSlug)