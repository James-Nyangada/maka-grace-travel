import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { PackageDetailClient } from '@/components/packages/package-detail-client'
import { api } from '@/lib/api'

import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params
    const packageData = await api.packages.getBySlug(slug)
    
    if (!packageData) {
      return {
        title: 'Package Not Found',
      }
    }

    const title = `${packageData.title || packageData.destination} | Maka Grace Tours and Travel`
    const description = `Join our ${packageData.duration}-day ${packageData.destination} adventure. From $${packageData.price}. ${packageData.overview?.substring(0, 100)}...`
    const ogImage = packageData.heroImage || packageData.images?.[0] || '/logo-maka-icon.png'

    return {
      title,
      description,
      alternates: {
        canonical: `/packages/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `https://www.makagracetours.com/packages/${slug}`,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: packageData.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [ogImage],
      },
    }
  } catch (error) {
    return {
      title: 'Safari Package',
    }
  }
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
        <main className="py-32 text-center">
          <h1 className="text-3xl font-bold text-safari-ink">Package Not Found</h1>
        </main>
        <SiteFooter />
      </>
    )
  }

  const schema = packageData ? {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": packageData.title,
    "description": packageData.overview,
    "offers": {
      "@type": "Offer",
      "price": packageData.price,
      "priceCurrency": "USD"
    },
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": packageData.itinerary?.map((day: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": day.title,
          "description": day.description
        }
      })) || []
    }
  } : null;

  return (
    <>
      <SiteHeader />
      <main>
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
        <PackageDetailClient packageData={packageData} />
      </main>
      <SiteFooter />
      <FloatingWidgets />
    </>
  )
}
