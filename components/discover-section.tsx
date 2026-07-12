import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

function ImageCard({
  src,
  alt,
  label,
}: {
  src: string
  alt: string
  label: string
}) {
  return (
    <a href="#" className="group relative block h-72 overflow-hidden rounded-lg lg:h-full lg:min-h-[280px]">
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
          <h2 className="mt-4 text-3xl font-bold text-safari-ink md:text-4xl">Unveil Tanzania&apos;s Wild Beauty</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5">
          {/* Row 1: National Parks */}
          <div className="grid gap-5 lg:grid-cols-[1.45fr_1fr]">
            <div className="rounded-lg bg-safari-green px-8 py-10 lg:px-10">
              <h3 className="text-2xl font-bold text-safari-gold-light">National Parks</h3>
              <p className="mt-5 leading-relaxed text-white/95">
                Explore Tanzania&apos;s most iconic national parks with our experienced guides. From the vast plains
                of the Serengeti to the awe-inspiring Ngorongoro Crater, each destination promises unique wildlife
                encounters and stunning scenery. Witness nature at its finest, where every sunrise brings a new
                adventure.
              </p>
            </div>
            <ImageCard src="/images/cheetah-standing.png" alt="Cheetah standing in the dry savanna" label="Read More" />
          </div>

          {/* Row 2: Activities */}
          <div id="activities" className="grid gap-5 lg:grid-cols-[1fr_1.45fr]">
            <ImageCard
              src="/images/balloons.png"
              alt="Hot air balloons floating over the Serengeti at sunrise"
              label="Explore Activities"
            />
            <div className="rounded-lg bg-safari-gold px-8 py-10 lg:px-10">
              <h3 className="text-2xl font-bold text-safari-ink">Activities</h3>
              <p className="mt-5 leading-relaxed text-white">
                Prepare for an adventure beyond the ordinary with Uwanda Tours And Safaris. Discover thrilling
                activities, from game drives to cultural tours, and immerse yourself in Tanzania&apos;s untamed
                beauty. Whether it&apos;s hot air ballooning over the Serengeti or walking safaris in the wild,
                there&apos;s an experience for every explorer.
              </p>
            </div>
          </div>

          {/* Row 3: Accommodations */}
          <div className="grid gap-5 lg:grid-cols-[1.45fr_1fr]">
            <div className="rounded-lg bg-safari-green px-8 py-10 lg:px-10">
              <h3 className="text-2xl font-bold text-safari-gold-light">Accommodations</h3>
              <p className="mt-5 leading-relaxed text-white/95">
                Stay in handpicked lodges, luxury tented camps, or budget-friendly retreats that match your style.
                Whether you seek comfort or wilderness immersion, we have the perfect stay for your safari
                experience. Rest in the heart of nature, where the sounds of the wild become your lullaby.
              </p>
            </div>
            <ImageCard
              src="/images/lodge-aerial.png"
              alt="Aerial view of a tropical safari lodge with a pool among palm trees"
              label="Explore Stays"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
