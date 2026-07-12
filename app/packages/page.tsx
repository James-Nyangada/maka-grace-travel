import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { PackagesHero } from '@/components/packages/packages-hero'
import { PackagesContent } from '@/components/packages/packages-content'
import { TailorCta } from '@/components/tailor-cta'

export const metadata = {
  title: 'Safari Packages - Uwanda Tours & Safaris',
  description: 'Explore our popular Tanzania safari packages and find your perfect adventure.',
}

export default function PackagesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PackagesHero />
        <PackagesContent />
        <TailorCta />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
