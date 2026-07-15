import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { GalleryHero } from '@/components/gallery/gallery-hero'
import { GalleryContent } from '@/components/gallery/gallery-content'
import { TailorCta } from '@/components/tailor-cta'

export const metadata = {
  title: 'Gallery - makagracetravel Tours & Safaris',
  description: 'View photos from our amazing Tanzania safari adventures, wildlife, landscapes, and cultural experiences.',
}

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <GalleryHero />
        <GalleryContent />
        <TailorCta />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
