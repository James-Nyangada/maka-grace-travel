import Image from 'next/image'
import { PersonStanding, Users } from 'lucide-react'

function FeatureIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-flex h-12 w-12 items-start">
      <span className="absolute right-0 top-0 h-6 w-6 rounded-full bg-safari-gold" aria-hidden="true" />
      <span className="relative z-10 mt-2 text-safari-green">{children}</span>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2 lg:px-8">
        {/* Image collage */}
        <div className="relative pl-8 sm:pl-14">
          {/* Vertical ribbon */}
          <div className="absolute left-0 top-8 z-20">
            <div className="flex h-72 w-16 items-center justify-center bg-safari-green">
              <span className="rotate-180 text-sm font-bold tracking-wide text-white [writing-mode:vertical-rl]">
                2,500 + Customer Worldwide
              </span>
            </div>
            <div className="h-0 w-0 border-l-[32px] border-r-[32px] border-t-[18px] border-l-transparent border-r-transparent border-t-safari-green" />
          </div>

          <div className="relative h-[520px] max-w-[480px]">
            <div className="absolute left-4 top-0 h-[420px] w-[68%] overflow-hidden">
              <Image
                src="/images/cheetah-tree.png"
                alt="Cheetah sitting beside a tree in the savanna"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[400px] w-[64%] overflow-hidden shadow-xl">
              <Image src="/images/lion.png" alt="Male lion walking through golden grass" fill className="object-cover" />
            </div>
            {/* Experience badge */}
            <div className="absolute bottom-24 left-16 z-10 w-40 border border-dashed border-safari-gold bg-white p-5 text-center shadow-lg sm:left-24">
              <p className="text-5xl font-bold text-safari-green">25</p>
              <p className="mt-1 text-base leading-snug text-safari-ink">year of experience</p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="flex items-center gap-2 font-script text-3xl text-safari-gold md:text-[34px]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-safari-green" aria-hidden="true">
              <path d="M12 21c0-6 2-10 8-13-1 6-3 9-8 13zM12 21c0-4-1.5-7-6-9 .8 4 2.5 6.5 6 9z" />
            </svg>
            Where Adventure Meets the Wild!
          </p>
          <h2 className="mt-4 text-3xl font-bold text-safari-ink md:text-4xl">Discover The Wonders Of Tanzania</h2>
          <p className="mt-6 text-justify leading-relaxed text-muted-foreground">
            At Uwanda Tours And Safaris, we craft unforgettable safari experiences that immerse you in
            Tanzania&apos;s breathtaking landscapes, diverse wildlife, and rich cultural heritage. With expert
            guides, customized itineraries, and a strong commitment to sustainability, we ensure every journey is
            unique, authentic, and filled with adventure.
          </p>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <FeatureIcon>
                <PersonStanding className="h-8 w-8" strokeWidth={1.6} />
              </FeatureIcon>
              <h3 className="mt-4 text-xl font-semibold text-safari-gold">Low Price &amp; Friendly</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We use to offer best prices for our tour packages so as we can do even budget safari.
              </p>
            </div>
            <div>
              <FeatureIcon>
                <Users className="h-8 w-8" strokeWidth={1.6} />
              </FeatureIcon>
              <h3 className="mt-4 text-xl font-semibold text-safari-gold">Trusted Travel Guide</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Our Staffs are trustful incase you forget anything worry out
              </p>
            </div>
          </div>

          <a
            href="#"
            className="mt-10 inline-block rounded-md bg-safari-green px-8 py-4 text-sm font-bold tracking-wide text-white transition-colors hover:bg-safari-green-dark"
          >
            MORE ABOUT US
          </a>
        </div>
      </div>
    </section>
  )
}
