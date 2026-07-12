import Image from 'next/image'
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react'

const packages = [
  {
    image: '/images/package-giraffe-jeep.png',
    alt: 'Tourists in a safari jeep watching giraffes up close',
    route: 'Zanzibar → Nyerere NP → Zanzibar',
    title: '3-Day Flight Package Zanzibar to Nyerere Private',
    quote: 'Wild Adventure from Zanzibar',
    price: '$750.00',
  },
  {
    image: '/images/package-safari-truck.png',
    alt: 'Open safari vehicle with tourists near a resting lioness',
    route: 'Zanzibar → Nyerere NP → Zanzibar',
    title: '2-Day Flying Zanzibar to Nyerere National Park',
    quote: 'Game Drive Spots Wildlife',
    price: '$690.00',
  },
  {
    image: '/images/package-plane.png',
    alt: 'Small bush plane on a dirt airstrip at sunset with travelers',
    route: 'Zanzibar → Nyerere NP → Zanzibar',
    title: '1-Day Game Drive Safari Flying Zanzibar To Nyerere NP (Selous GR)',
    quote: 'One Day, Big Adventure',
    price: '$450.00',
  },
]

export function PackagesSection() {
  return (
    <section id="safaris" className="safari-pattern py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="font-script text-3xl text-safari-gold md:text-[34px]">Popular Tanzania Safari Packages</p>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-4xl text-balance text-3xl font-bold text-safari-ink md:text-4xl">
            Discover Tanzania&apos;s Untamed Beauty With Our Expertly Crafted Safari Experiences.
          </h2>
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous packages"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-black/5 text-muted-foreground transition-colors hover:bg-black/10"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next packages"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-safari-green text-white transition-colors hover:bg-safari-green-dark"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.title} className="relative z-10 flex flex-col bg-white p-3 shadow-sm">
              <div className="relative h-60 w-full overflow-hidden">
                <Image src={pkg.image} alt={pkg.alt} fill className="object-cover" />
                <span className="absolute bottom-3 right-3 bg-white px-4 py-1.5 text-sm font-semibold text-safari-ink shadow">
                  Mid-Range
                </span>
              </div>
              <div className="flex flex-1 flex-col px-3 pb-5 pt-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-safari-ink">
                  <MapPin className="h-4 w-4 text-safari-green" />
                  {pkg.route}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-safari-ink">{pkg.title}</h3>
                <p className="mt-4 flex items-center gap-2 text-safari-green">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M4 6h6v6c0 3-2 5-5 6l-1-2c2-.7 3-1.8 3-4H4V6zm10 0h6v6c0 3-2 5-5 6l-1-2c2-.7 3-1.8 3-4h-3V6z" />
                  </svg>
                  <span className="text-base font-medium">{pkg.quote}</span>
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                  <p className="text-sm text-muted-foreground">
                    Starting From <span className="text-lg font-bold text-safari-green">{pkg.price}</span>
                  </p>
                  <a href="#" aria-label={`View ${pkg.title}`} className="group flex items-center text-safari-green">
                    <span className="block h-px w-16 bg-safari-green transition-all group-hover:w-20" />
                    <ArrowRight className="-ml-1 h-5 w-5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
