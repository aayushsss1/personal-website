// src/app/page.tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Skills from '@/components/Skills'
import OpenSource from '@/components/OpenSource'
import PhotographySection from '@/components/PhotographySection'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Skills />
      <OpenSource />
      <PhotographySection />
      <Contact />
    </main>
  )
}
