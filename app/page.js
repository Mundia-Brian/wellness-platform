import { getBrandConfig } from '../lib/brand'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'

export default function HomePage() {
  const brand = getBrandConfig()
  
  return (
    <main>
      <Hero brand={brand} />
      <Services services={brand.services} />
      <About brand={brand} />
      <Contact brand={brand} />
    </main>
  )
}