import Image from 'next/image'
import { Calendar, Tag } from 'lucide-react'

const posts = [
  {
    image: '/images/blog-guides.png',
    alt: 'Tourist and safari guide examining a tree in the forest',
    date: '2 May, 2025',
    title: 'How Much Does a Tanzania Safari Cost',
  },
  {
    image: '/images/blog-giraffe-jeep.png',
    alt: 'Giraffe standing beside a safari jeep under a cloudy sky',
    date: '2 May, 2025',
    title: 'How to book safari in Tanzania',
  },
  {
    image: '/images/blog-packing.png',
    alt: 'Safari packing essentials laid out on a table',
    date: '2 May, 2025',
    title: 'Safari Packing List for Tanzania (Everything You Need to Know...',
  },
]

export function BlogSection() {
  return (
    <section id="blogs" className="bg-white pb-20 pt-4">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-script text-3xl text-safari-gold md:text-[32px]">Safari Stories &amp; Travel Tips</p>
          <h2 className="mt-4 text-2xl font-bold text-safari-ink md:text-3xl">
            Inspiring Journeys, Expert Tips, And Untold Safari Secrets.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col bg-safari-cream/60">
              <div className="relative h-56 w-full">
                <Image src={post.image} alt={post.alt} fill className="object-cover" />
                <span className="absolute bottom-0 left-4 flex translate-y-1/2 items-center gap-2 bg-safari-ink px-3 py-1.5 text-xs font-bold tracking-wide text-white">
                  <Tag className="h-3 w-3" />
                  SAFARI TIP
                </span>
              </div>
              <div className="flex flex-1 flex-col bg-white px-5 pb-6 pt-8 shadow-sm">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </p>
                <h3 className="mt-3 flex-1 text-lg font-bold leading-snug text-safari-ink">{post.title}</h3>
                <a href="#" className="group mt-5 flex items-center gap-2 text-xs font-bold tracking-widest text-safari-ink">
                  READ MORE
                  <span className="flex items-center text-safari-green">
                    <span className="block h-px w-8 bg-safari-green transition-all group-hover:w-12" />
                    <svg viewBox="0 0 12 12" className="h-3 w-3 fill-safari-green" aria-hidden="true">
                      <path d="M2 5h6L5.5 2.5 7 1l5 5-5 5-1.5-1.5L8 7H2z" />
                    </svg>
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
