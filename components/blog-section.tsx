import Image from 'next/image'
import Link from 'next/link'
import { Clock, Tag } from 'lucide-react'

export async function BlogSection() {
  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  let blogs: any[] = [];
  try {
    const res = await fetch(`${API}/api/blogs?limit=3`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      blogs = data.blogs || [];
    }
  } catch (err) {
    console.error("Error fetching blogs for landing page:", err);
  }

  if (blogs.length === 0) {
    return null; // hide section if no blogs
  }

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
          {blogs.map((post, idx) => {
            const imageSrc = post.thumbnailUrl || "/images/safari_lions.png";
            return (
              <article key={post._id || idx} className="flex flex-col bg-safari-cream/60">
                <div className="relative h-56 w-full">
                  <Image src={imageSrc} alt={post.title} fill className="object-cover" />
                  {post.category && (
                    <span className="absolute bottom-0 left-4 flex translate-y-1/2 items-center gap-2 bg-safari-ink px-3 py-1.5 text-xs font-bold tracking-wide text-white">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col bg-white px-5 pb-6 pt-8 shadow-sm">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-safari-ink line-clamp-2">{post.title}</h3>
                  <div 
                    className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  <Link href={`/blogs/${post.slug}`} className="group mt-5 flex items-center gap-2 text-xs font-bold tracking-widest text-safari-ink">
                    READ MORE
                    <span className="flex items-center text-safari-green">
                      <span className="block h-px w-8 bg-safari-green transition-all group-hover:w-12" />
                      <svg viewBox="0 0 12 12" className="h-3 w-3 fill-safari-green" aria-hidden="true">
                        <path d="M2 5h6L5.5 2.5 7 1l5 5-5 5-1.5-1.5L8 7H2z" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
