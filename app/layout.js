import './globals.css'
import { getBrandConfig } from '../lib/brand'

function generateMetadata() {
  const brand = getBrandConfig()
  return {
    title: `${brand.name} – ${brand.tagline}`,
    description: brand.description,
    keywords: 'light therapy, photo therapy, wellness, natural healing, health conditions',
    openGraph: {
      title: `${brand.name} – ${brand.tagline}`,
      description: brand.description,
      type: 'website',
      locale: 'en_US',
      siteName: brand.name
    },
    twitter: {
      card: 'summary_large_image',
      title: `${brand.name} – ${brand.tagline}`,
      description: brand.description
    },
    robots: 'index, follow'
  }
}

export const metadata = generateMetadata()

export const viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({ children }) {
  const brand = getBrandConfig()
  const gaId = brand.analytics?.googleAnalyticsId
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={brand.colors.primary} />
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `
            }} />
          </>
        )}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.BASECHATBOT_DOMAIN = "https://marketing.web-designs.store";
            window.BASECHATBOT_ID_CHATBOT = "X9N2N-A7P5G-O0U2O-N9H2N";
            (function(){
              d=document;
              s=d.createElement("script");
              s.src="https://marketing.web-designs.store/chatbot.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `
        }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}