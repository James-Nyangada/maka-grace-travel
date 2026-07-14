import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { PackageDetailClient } from '@/components/packages/package-detail-client'
import { api } from '@/lib/api'

export const metadata = {
  title: 'Tanzania Safari Package - Uwanda Tours & Safaris',
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  let packageData = null
  try {
    const { slug } = await params
    packageData = await api.packages.getBySlug(slug)
    // increment view since page is visited
    await api.packages.incrementView(packageData._id)
  } catch (error) {
    console.error("Failed to fetch package:", error)
  }

  if (!packageData) {
    return (
      <>
        <SiteHeader />
        <main className="py-32 text-center text-xl font-bold">
          Package not found
        </main>
        <SiteFooter />
      </>
    )
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
