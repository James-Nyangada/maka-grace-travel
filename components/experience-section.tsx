import { TornEdge } from './torn-edge'

const cards = [
  {
    title: 'Luxury & Budget-Friendly Safaris',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="h-14 w-14" aria-hidden="true">
        <circle cx="40" cy="12" r="4" />
        <path d="M36 18l-8 6-10 2v6l10-2M36 18l6 4v10l-6 16h-6l6-14-8-4-8 14h-6l8-18" />
        <path d="M14 52h36" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    title: 'Expert Wildlife Guides',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="h-14 w-14" aria-hidden="true">
        <path d="M32 10c-9 0-16 6-16 14 0 5 3 9 7 11l-2 8 8-5c1 .2 2 .2 3 .2 9 0 16-6 16-14S41 10 32 10z" />
        <path d="M27 26c1.5-3 4-4.5 5-4.5s3.5 1.5 5 4.5c1.5 3-1 6-5 9-4-3-6.5-6-5-9z" />
        <path d="M22 44c-3 1-5 3-5 6h14" />
      </svg>
    ),
  },
  {
    title: 'Customizable Itineraries',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="h-14 w-14" aria-hidden="true">
        <path d="M26 14a8 8 0 018 8c0 6-8 14-8 14s-8-8-8-14a8 8 0 018-8z" />
        <circle cx="26" cy="22" r="3" />
        <path d="M26 36v8c0 4 4 6 8 6h6" strokeDasharray="3 3" />
        <path d="M40 42h10l-4 4 4 4H40z" />
      </svg>
    ),
  },
  {
    title: 'Sustainable & Eco-Friendly Travel',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="h-14 w-14" aria-hidden="true">
        <path d="M32 14l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="currentColor" stroke="none" />
        <path d="M16 24c-2 8 0 16 6 22M48 24c2 8 0 16-6 22" />
        <path d="M20 44l-3 6M44 44l3 6" />
      </svg>
    ),
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
                <h2 className="text-3xl font-bold text-white md:text-4xl">Experience Africa Like Never Before!</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-white/90">
                  Explore Tanzania&apos;s Breathtaking Landscapes, Diverse Wildlife, And Vibrant Culture With Uwanda
                  Tours And Safaris.
                </p>
              </div>
            </div>
            <a
              href="#safaris"
              className="inline-block self-start whitespace-nowrap rounded-md bg-white px-8 py-4 text-sm font-bold tracking-wide text-safari-ink transition-colors hover:bg-safari-cream"
            >
              VIEW ALL SAFARIS
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
              <div key={card.title} className="rounded-lg bg-white p-3 shadow-lg relative z-20">
                <div className="flex h-full flex-col items-center gap-6 rounded-md border border-dashed border-safari-gold/60 px-6 py-10 text-center">
                  <span className="text-safari-gold">{card.icon}</span>
                  <h3 className="text-lg font-bold leading-snug text-safari-ink">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
