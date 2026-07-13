import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Faint dotted map background */}
      <div className="dots-pattern absolute right-0 top-0 h-72 w-1/2 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-2 lg:px-8">
        {/* Polaroid collage */}
        <div className="relative mx-auto h-[360px] w-full max-w-md">
          {/* Blue plane doodle */}
          <svg
            className="absolute -left-2 bottom-6 h-16 w-20 text-sky-500"
            viewBox="0 0 80 60"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 42 L34 30 L20 18 L28 14 L48 26 L66 18 C70 16 74 20 71 24 L56 34 L60 52 L52 54 L42 40 L20 50 Z" opacity="0.85" />
          </svg>
          <div className="absolute left-8 top-6 w-64 rotate-[-8deg] bg-white p-3 pb-10 shadow-xl">
            <div className="relative h-48 w-full">
              <Image src="/images/polaroid-sunset.png" alt="Safari jeeps on the plains at sunset" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute left-24 top-16 w-64 rotate-[7deg] bg-white p-3 pb-10 shadow-xl">
            <div className="relative h-48 w-full">
              <Image src="/images/blog-giraffe-jeep.png" alt="Giraffe beside a safari vehicle" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Review */}
        <div className="relative">
          <h2 className="text-2xl font-bold text-safari-ink md:text-[26px]">Amazing, I Recommend A Million Times!!</h2>
          <div className="mt-3 flex gap-1" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-safari-gold text-safari-gold" />
            ))}
          </div>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            &quot;Maka Grace Tours and Travel turned our Kenya dream into reality. From the moment we
            enquired to the moment we landed back home, Marykala and her team handled every detail
            with professionalism and warmth. Our Maasai Mara safari was beyond anything we imagined.
            The guiding was exceptional, the lodge was stunning, and the personal touches made it
            feel like a trip built just for us. We will absolutely be back.&quot;
          </p>
          <div className="mt-6 h-1 w-10 bg-safari-green" />
          <p className="mt-4 font-bold text-safari-ink">Sarah &amp; David M.</p>
          <p className="mt-1 text-xs text-muted-foreground">Nairobi, Kenya &middot; Maasai Mara Safari, March 2025</p>

          <div className="absolute right-0 top-40 hidden h-14 w-14 items-center justify-center bg-safari-cream lg:flex">
            <Quote className="h-7 w-7 fill-safari-green text-safari-green" />
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              aria-label="Review by Tanja"
              className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-safari-green ring-offset-2"
            >
              <Image src="/images/avatar-1.png" alt="Tanja from Germany" fill className="object-cover" />
            </button>
            <button type="button" aria-label="Next reviewer" className="relative h-11 w-11 overflow-hidden rounded-full opacity-90">
              <Image src="/images/avatar-2.png" alt="Happy traveler" fill className="object-cover" />
            </button>
            <button type="button" aria-label="Next reviewer" className="relative h-11 w-11 overflow-hidden rounded-full opacity-90">
              <Image src="/images/avatar-3.png" alt="Happy traveler" fill className="object-cover" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
