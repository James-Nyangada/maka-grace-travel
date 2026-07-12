import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { PackageDetailClient } from '@/components/packages/package-detail-client'

export const metadata = {
  title: 'Tanzania Safari Package - Uwanda Tours & Safaris',
}

export default function PackageDetailPage() {
  const packageData = {
    title: '7 Days Great Migration Safari',
    image: '/images/placeholder-safari.jpg',
  }

  return (
    <>
      <SiteHeader />
      <main>
        <PackageDetailClient packageData={packageData} />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
