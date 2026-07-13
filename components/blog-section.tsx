import Image from 'next/image'
import { Clock, Tag } from 'lucide-react'

const posts = [
  {
    image: '/images/blog-guides.png',
    alt: 'Maasai Mara — wildebeest or Big Five photo',
    tag: 'SAFARI TIPS',
    title: 'How Much Does a Kenya Safari Cost? (Complete 2026 Guide)',
    excerpt: 'Planning a Kenya safari but unsure about budget? We break down the real costs &mdash; from accommodation to park fees &mdash; so you can plan with confidence.',
    readTime: '8 min read',
  },
  {
    image: '/images/blog-giraffe-jeep.png',
    alt: 'Dhow boat on Diani Beach at sunset',
    tag: 'TRAVEL GUIDE',
    title: 'How to Book a Safari in Kenya: Step-by-Step Guide',
    excerpt: 'From choosing the right park to understanding what\'s included in your package &mdash; here is everything you need to know to book your Kenya safari without stress.',
    readTime: '6 min read',
  },
  {
    image: '/images/blog-packing.png',
    alt: 'Safari packing flat-lay — binoculars, hat, khaki kit',
    tag: 'PACKING TIPS',
    title: 'Safari Packing List for Kenya (Everything You Need to Know)',
    excerpt: 'Don\'t let poor packing ruin your Kenya adventure. Our complete packing list covers clothing, gear, health essentials, and what to leave at home.',
    readTime: '5 min read',
  },
]

export function BlogSection() {
  return (
    <section id="blogs" className="bg-white pb-20 pt-4">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-script text-3xl text-safari-gold md:text-[32px]">Safari &amp; Travel Tips</p>
          <h2 className="mt-4 text-2xl font-bold text-safari-ink md:text-3xl">
            Inspiring Journeys, Expert Tips, And Untold Kenya Secrets.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            All our safari and travel guides are written by our experienced Kenya-based team. Whether you&apos;re planning your first trip or your fifth, our blog covers everything you need to know before you go.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col bg-safari-cream/60">
              <div className="relative h-56 w-full">
                <Image src={post.image} alt={post.alt} fill className="object-cover" />
                <span className="absolute bottom-0 left-4 flex translate-y-1/2 items-center gap-2 bg-safari-ink px-3 py-1.5 text-xs font-bold tracking-wide text-white">
                  <Tag className="h-3 w-3" />
                  {post.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col bg-white px-5 pb-6 pt-8 shadow-sm">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-safari-ink">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
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
