import { getBrandConfig } from '../lib/brand'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import BookingForm from '../components/BookingForm'
import Contact from '../components/Contact'
import Script from 'next/script'

export default function HomePage() {
  const brand = getBrandConfig()
  
  return (
    <>
      <main>
        <Hero brand={brand} />
        <Services services={brand.services} />
        <About brand={brand} />
        <Testimonials />
        <BookingForm brand={brand} />
        <Contact brand={brand} />
      </main>
      <Script id="chatbot-init" strategy="afterInteractive">
        {`
          window.BASECHATBOT_DOMAIN = "https://marketing.web-designs.store";
          window.BASECHATBOT_ID_CHATBOT = "X9N2N-A7P5G-O0U2O-N9H2N";
          (function(){
            d=document;
            s=d.createElement("script");
            s.src="https://marketing.web-designs.store/chatbot.js";
            s.async=1;
            d.getElementsByTagName("head")[0].appendChild(s);
          })();
        `}
      </Script>
    </>
  )
}