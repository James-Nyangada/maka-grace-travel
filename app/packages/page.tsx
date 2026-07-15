import { Suspense } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { PackagesHero } from '@/components/packages/packages-hero'
import { PackagesContent } from '@/components/packages/packages-content'
import { TailorCta } from '@/components/tailor-cta'
import { api } from '@/lib/api'
import { Package } from '@/lib/types'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kenya Safari Packages & Tours',
  description: 'Explore our popular Kenya safari packages, beach holidays, and custom itineraries. Find your perfect adventure with Maka Grace Tours and Travel.',
  alternates: {
    canonical: '/packages',
  },
}

export default async function PackagesPage() {
  let packages: Package[] = []
  try {
    const data = await api.packages.getPublic({ limit: 100 })
    packages = Array.isArray(data) ? data : (data.packages || data.data || [])
  } catch (error) {
    console.error("Failed to fetch packages:", error)
  }

  return (
    <>
      <SiteHeader />
      <main>
        <PackagesHero />
        <Suspense fallback={<div className="py-20 text-center">Loading packages...</div>}>
          <PackagesContent initialPackages={packages} />
        </Suspense>
        <TailorCta />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
