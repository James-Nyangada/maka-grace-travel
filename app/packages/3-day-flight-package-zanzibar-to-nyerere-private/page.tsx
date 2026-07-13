import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { PackageDetailClient } from '@/components/packages/package-detail-client'
import { PackageFaq } from '@/components/packages/package-faq'
import { DiscoverSection } from '@/components/discover-section'

export const metadata = {
  title: '3-Day Flight Package Zanzibar To Nyerere Private',
}

export default function PackageDetailPage() {
  const packageData = {
    title: '3-Day Flight Package Zanzibar To Nyerere Private',
    image: '/images/placeholder-safari.jpg',
  }

  return (
    <>
      <SiteHeader />
      <main>
        <PackageDetailClient packageData={packageData} />
        <PackageFaq />
        <DiscoverSection />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
