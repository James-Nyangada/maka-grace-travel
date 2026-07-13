import Image from 'next/image'
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react'

const packages = [
  {
    image: '/images/package-giraffe-jeep.png',
    alt: 'Maasai Mara — wildebeest migration or lion on savanna',
    route: 'Nairobi to Maasai Mara — 5 Days',
    title: 'Nairobi to Maasai Mara — 5 Days',
    type: 'Mid Range',
    quote: '3 game drives · Bush breakfast · Mara River crossing viewpoint. Includes: All meals · Luxury tent lodge · Airport transfers',
    price: 'USD 850',
  },
  {
    image: '/images/package-safari-truck.png',
    alt: 'Diani Beach — turquoise water, white sand, dhow boat',
    route: 'Nairobi to Diani Beach — 4 Days',
    title: 'Nairobi to Diani Beach — 4 Days',
    type: 'Budget',
    quote: 'Beach lodge · Snorkelling · Seafood dining · Colobus monkey walks. Includes: Breakfast · Beach hotel · Return road/air transfer',
    price: 'USD 320',
  },
  {
    image: '/images/package-plane.png',
    alt: 'Amboseli — elephant herd with Kilimanjaro backdrop',
    route: 'Nairobi to Amboseli — 3 Days',
    title: 'Nairobi to Amboseli — 3 Days',
    type: 'Mid Range',
    quote: '2 game drives · Maasai village visit · Kilimanjaro sunrise views. Includes: All meals · Mid-range lodge · Return transfers',
    price: 'USD 480',
  },
  {
    image: '/images/package-safari-truck.png',
    alt: 'Zanzibar — Stonetown streets or beach sunset',
    route: 'Zanzibar',
    title: '5-Day Zanzibar Luxury Escape',
    type: 'Luxury',
    quote: 'Spice tour · Stone Town · Private beach villa · Dhow sunset cruise. Includes: All meals · Luxury resort · Return flights from Nairobi',
    price: 'USD 1,200',
  },
]

export function PackagesSection() {
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
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.title} className="relative z-10 flex flex-col bg-white p-3 shadow-sm">
              <div className="relative h-60 w-full overflow-hidden">
                <Image src={pkg.image} alt={pkg.alt} fill className="object-cover" />
                <span className="absolute bottom-3 right-3 bg-white px-4 py-1.5 text-sm font-semibold text-safari-ink shadow">
                  {pkg.type}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-3 pb-5 pt-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-safari-ink">
                  <MapPin className="h-4 w-4 text-safari-green" />
                  {pkg.route}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-safari-ink">{pkg.title}</h3>
                <p className="mt-4 flex items-start gap-2 text-safari-green">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="mt-1 h-5 w-5 shrink-0" aria-hidden="true">
                    <path d="M4 6h6v6c0 3-2 5-5 6l-1-2c2-.7 3-1.8 3-4H4V6zm10 0h6v6c0 3-2 5-5 6l-1-2c2-.7 3-1.8 3-4h-3V6z" />
                  </svg>
                  <span className="text-sm font-medium leading-relaxed">{pkg.quote}</span>
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
