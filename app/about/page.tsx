import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { AboutHero } from '@/components/about/about-hero'
import { AboutDiscover } from '@/components/about/about-discover'
import { AboutWhyChoose } from '@/components/about/about-why-choose'
import { AboutUnique } from '@/components/about/about-unique'

export const metadata = {
  title: 'About Us - Uwanda Tours & Safaris',
  description: 'Learn more about Uwanda Tours & Safaris, a premier safari tour company based in Tanzania.',
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <AboutDiscover />
        <AboutWhyChoose />
        <AboutUnique />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
