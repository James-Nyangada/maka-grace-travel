import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

function ImageCard({
  src,
  alt,
  label,
  href = '#',
}: {
  src: string
  alt: string
  label: string
  href?: string
}) {
  return (
    <a href={href} className="group relative block h-72 overflow-hidden rounded-lg lg:h-full lg:min-h-[280px]">
      <Image src={src} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <span className="absolute bottom-6 left-6 flex items-center gap-3 text-xl font-bold text-white">
        {label}
        <span className="block h-px w-24 bg-white" />
        <ArrowRight className="-ml-2 h-5 w-5" />
      </span>
    </a>
  )
}

export function DiscoverSection() {
  return (
    <section id="discover" className="safari-pattern pb-20 pt-16 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-script text-3xl text-safari-gold md:text-[34px]">Discover &amp; Explore</p>
          <h2 className="mt-4 text-3xl font-bold text-safari-ink md:text-4xl">Unveil Kenya&apos;s Wild Beauty</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5">
          {/* Row 1: National Parks */}
          <div className="grid gap-5 lg:grid-cols-[1.45fr_1fr]">
            <div className="rounded-lg bg-safari-green px-8 py-10 lg:px-10">
              <h3 className="text-2xl font-bold text-safari-gold-light">National Parks</h3>
              <p className="mt-5 leading-relaxed text-white/95">
                Explore Kenya&apos;s world-famous national parks with our expert-guided tours. From the Big Five encounters in the Maasai Mara to the stunning birdlife of Lake Nakuru &mdash; we bring you face to face with nature at its most raw and magnificent.
              </p>
            </div>
            <ImageCard src="/images/cheetah-standing.png" alt="Cheetah standing in the dry savanna" label="Explore Parks" href="/packages?category=Safaris" />
          </div>

          {/* Row 2: Activities */}
          <div id="activities" className="grid gap-5 lg:grid-cols-[1fr_1.45fr]">
            <ImageCard
              src="/images/balloons.png"
              alt="Hot air balloons floating over the Serengeti at sunrise"
              label="Explore Activities"
              href="/packages?category=Activities"
            />
            <div className="rounded-lg bg-safari-gold px-8 py-10 lg:px-10">
              <h3 className="text-2xl font-bold text-white">Activities</h3>
              <p className="mt-5 leading-relaxed text-white">
                An adventure requires more than just a destination &mdash; it demands the right experience. From hot air balloon rides over the Maasai Mara and snorkelling in Diani&apos;s coral reefs to hiking the trails of Mount Kenya, we match you with activities that match your pace.
              </p>
            </div>
          </div>

          {/* Row 3: Accommodations */}
          <div className="grid gap-5 lg:grid-cols-[1.45fr_1fr]">
            <div className="rounded-lg bg-safari-green px-8 py-10 lg:px-10">
              <h3 className="text-2xl font-bold text-safari-gold-light">Accommodation</h3>
              <p className="mt-5 leading-relaxed text-white/95">
                Whether you dream of a tented bush camp under a star-filled Kenyan sky or a world-class coastal resort with ocean views &mdash; we source accommodation that matches your budget, taste, and travel style. From budget-friendly lodges to private villas, we find your perfect stay.
              </p>
            </div>
            <ImageCard
              src="/images/lodge-aerial.png"
              alt="Aerial view of a tropical safari lodge with a pool among palm trees"
              label="Explore Stays"
              href="/packages?category=Accommodation"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
