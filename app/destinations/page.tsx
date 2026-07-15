import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { DestinationsHero } from '@/components/destinations/destinations-hero'
import { DestinationsContent } from '@/components/destinations/destinations-content'
import { TailorCta } from '@/components/tailor-cta'

export const metadata = {
  title: 'Destinations - makagracetravel Tours & Safaris',
  description: 'Explore our top destinations in Kenya including the Maasai Mara, Amboseli, Tsavo, and pristine coastal beaches.',
}

export default function DestinationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <DestinationsHero />
        <DestinationsContent />
        <TailorCta />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
