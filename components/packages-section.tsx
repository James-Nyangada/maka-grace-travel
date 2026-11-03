import Link from 'next/link'
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react'
import { api } from '@/lib/api'
import { Package } from '@/lib/types'
import { ImageCarousel } from '@/components/image-carousel'
import { PackagePriceOrQuote } from '@/components/packages/package-price-or-quote'

export async function PackagesSection() {
  let packages: Package[] = []
  
  try {
    // Assuming backend takes limit and featured params, or we can slice it
    const data = await api.packages.getPublic({ limit: 6, isFeatured: 'true' })
    packages = Array.isArray(data) ? data : (data.packages || data.data || [])
    if (packages.length > 6) {
      packages = packages.slice(0, 6)
    }
  } catch (error) {
    console.error("Failed to fetch packages:", error)
  }

  return (
    <section id="safaris" className="safari-pattern py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="font-script text-3xl text-safari-gold md:text-[34px]">Popular Kenya Packages</p>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-2xl text-balance text-3xl font-bold text-safari-ink md:text-4xl">
            Discover Kenya&apos;s Untamed Beauty With Our Expertly Crafted Packages.
          </h2>
          <div className="flex flex-col gap-4 lg:items-end">
            <p className="max-w-md text-muted-foreground leading-relaxed lg:text-right">
              Whatever your dream journey looks like &mdash; from a private Big Five safari to a romantic coastal retreat &mdash; we craft it around you. Handpicked destinations, local expertise, and personalised service every step of the way.
            </p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Previous packages"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-black/5 text-muted-foreground transition-colors hover:bg-black/10"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Previous packages</span>
              </button>
              <button
                type="button"
                aria-label="Next packages"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-safari-green text-white transition-colors hover:bg-safari-green-dark"
              >
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Next packages</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg._id} className="relative z-10 flex flex-col bg-white p-3 shadow-sm">
              <div className="relative h-60 w-full overflow-hidden bg-muted">
                <ImageCarousel images={[pkg.imageUrl, ...(pkg.galleryUrls || [])]} altText={pkg.name} />
                {pkg.status === 'on-offer' && (
                  <span className="absolute top-3 left-3 bg-safari-green px-3 py-1 text-xs font-bold text-white shadow rounded-sm z-10">
                    On offer
                  </span>
                )}
                <span className="absolute bottom-3 right-3 bg-white px-4 py-1.5 text-sm font-semibold text-safari-ink shadow">
                  {pkg.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-3 pb-5 pt-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-safari-ink">
                  <MapPin className="h-4 w-4 text-safari-green" />
                  {pkg.destination} {pkg.duration ? `— ${pkg.duration}` : ''}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-safari-ink">
                  <Link href={`/packages/${pkg.slug}`} className="hover:text-safari-green transition-colors">
                    {pkg.name}
                  </Link>
                </h3>
                <p className="mt-4 flex items-start gap-2 text-safari-green">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="mt-1 h-5 w-5 shrink-0" aria-hidden="true">
                    <path d="M4 6h6v6c0 3-2 5-5 6l-1-2c2-.7 3-1.8 3-4H4V6zm10 0h6v6c0 3-2 5-5 6l-1-2c2-.7 3-1.8 3-4h-3V6z" />
                  </svg>
                  <span className="text-sm font-medium leading-relaxed line-clamp-3">{pkg.overview}</span>
                </p>
                <PackagePriceOrQuote pkg={pkg} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
