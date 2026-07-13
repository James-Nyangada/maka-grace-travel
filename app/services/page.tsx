import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { ServicesHero } from '@/components/services/services-hero'
import { ServicesContent } from '@/components/services/services-content'
import { TailorCta } from '@/components/tailor-cta'

export const metadata = {
  title: 'Our Services - Uwanda Tours & Safaris',
  description: 'Explore our wide range of services including wildlife safaris, beach holidays, flight ticketing, visa assistance, and corporate travel.',
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServicesHero />
        <ServicesContent />
        <TailorCta />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
