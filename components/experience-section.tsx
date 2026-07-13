import { TornEdge } from './torn-edge'

import { BadgeDollarSign, PawPrint, Settings, Leaf } from 'lucide-react'

const cards = [
  {
    title: 'Flexible & Budget Friendly',
    subtext: 'Packages for every budget — from day trips at USD 50 to luxury multi-day safaris.',
    icon: <BadgeDollarSign className="h-14 w-14" strokeWidth={1.5} />,
  },
  {
    title: 'Expert Wildlife Guides',
    subtext: 'Our certified local guides know every trail, species, and story in Kenya\'s parks.',
    icon: <PawPrint className="h-14 w-14" strokeWidth={1.5} />,
  },
  {
    title: 'Customisable Itineraries',
    subtext: 'Every trip is built around you. Choose your destinations, duration, and style.',
    icon: <Settings className="h-14 w-14" strokeWidth={1.5} />,
  },
  {
    title: 'Sustainable & Eco-Friendly',
    subtext: 'We work with lodges and operators who protect Kenya\'s wildlife and local communities.',
    icon: <Leaf className="h-14 w-14" strokeWidth={1.5} />,
  },
]

export function ExperienceSection() {
  return (
    <section className="relative">
      <div className="safari-pattern">
        <TornEdge fill="#166938" className="translate-y-px" />
      </div>
      <div className="bg-safari-green pb-40 pt-14 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-6">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="hidden h-20 w-20 shrink-0 text-white lg:block"
                aria-hidden="true"
              >
                <circle cx="40" cy="12" r="4" />
                <path d="M36 18l-8 6-10 2v6l10-2M36 18l6 4v10l-6 16h-6l6-14-8-4-8 14h-6l8-18" />
                <path d="M50 20c4 2 6 6 6 10" strokeDasharray="2 3" />
              </svg>
              <div>
                <h2 className="text-3xl font-bold text-white md:text-4xl">Experience Kenya Like Never Before!</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-white/90">
                  Explore Kenya&apos;s breathtaking landscapes, diverse wildlife, and vibrant local culture
                  with Maka Grace Tours and Travel &mdash; your trusted partner from the first call to the
                  moment you return home.
                </p>
              </div>
            </div>
            <a
              href="/packages"
              className="inline-block self-start whitespace-nowrap rounded-md bg-white px-8 py-4 text-sm font-bold tracking-wide text-safari-ink transition-colors hover:bg-safari-cream"
            >
              VIEW ALL PACKAGES
            </a>
          </div>
        </div>
      </div>

      {/* Cards overlapping the green/cream boundary */}
      <div className="safari-pattern relative pb-4">
        <TornEdge fill="#166938" flip className="-translate-y-px" />
        <div className="mx-auto -mt-36 max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <div key={card.title} className="group relative z-20 overflow-hidden rounded-lg bg-white p-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Hover Background Pattern */}
                <div 
                  className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `
                      linear-gradient(144deg, transparent 65%, #4A9D19 65%),
                      linear-gradient(116deg, transparent 40%, #237A20 40%),
                      #125B34
                    `
                  }}
                />
                <div className="flex h-full flex-col items-center gap-4 rounded-md border border-dashed border-safari-gold/60 group-hover:border-transparent px-4 py-8 text-center transition-colors duration-300">
                  <div className="text-safari-gold group-hover:text-white transition-all duration-300 group-hover:scale-110">{card.icon}</div>
                  <h3 className="text-lg font-bold leading-snug text-safari-ink group-hover:text-white transition-colors duration-300">{card.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-300">{card.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
