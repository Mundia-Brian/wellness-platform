import './globals.css'
import { getBrandConfig } from '../lib/brand'

export default function RootLayout({ children }) {
  const brand = getBrandConfig()
  
  return (
    <html lang="en">
      <head>
        <title>{brand.name}</title>
        <meta name="description" content={brand.description} />
        <style jsx global>{`
          :root {
            --primary: ${brand.colors.primary};
            --secondary: ${brand.colors.secondary};
            --accent: ${brand.colors.accent};
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}