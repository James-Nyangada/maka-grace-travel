import Image from 'next/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export function BlogSidebar({ showRelated = false }: { showRelated?: boolean }) {
  const popularBlogs = [
    {
      title: "How Much Does A Tanzania Safari Cost",
      date: "02 May 2025",
      image: "/images/placeholder-safari.jpg",
      slug: "how-much-does-a-tanzania-safari-cost"
    },
    {
      title: "How To Book Safari In Tanzania",
      date: "02 May 2025",
      image: "/images/placeholder-safari.jpg",
      slug: "how-much-does-a-tanzania-safari-cost"
    },
    {
      title: "Safari Packing List For Tanzania (Everything You...",
      date: "02 May 2025",
      image: "/images/placeholder-safari.jpg",
      slug: "how-much-does-a-tanzania-safari-cost"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Popular Blogs */}
      <div className="bg-[#f9f9f9] p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-safari-green"></div>
          <h3 className="text-xl font-sans font-bold text-safari-ink">Popular Blogs</h3>
        </div>
        <div className="space-y-6">
          {popularBlogs.map((blog, idx) => (
            <Link href={`/blogs/${blog.slug}`} key={idx} className="flex gap-4 group">
              <div className="relative w-24 h-16 rounded overflow-hidden shrink-0">
                <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[11px] text-safari-green font-medium mb-1">
                  <Calendar className="w-3 h-3" />
                  {blog.date}
                </div>
                <h4 className="text-[13px] font-sans font-bold text-safari-ink leading-snug group-hover:text-safari-green transition-colors">{blog.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Related Blogs */}
      {showRelated && (
        <div className="bg-[#f9f9f9] p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-safari-green"></div>
            <h3 className="text-xl font-sans font-bold text-safari-ink">Related Blogs</h3>
          </div>
          <div className="space-y-6">
            {popularBlogs.slice(1, 3).map((blog, idx) => (
              <Link href={`/blogs/${blog.slug}`} key={idx} className="flex gap-4 group">
                <div className="relative w-24 h-16 rounded overflow-hidden shrink-0">
                  <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-safari-green font-medium mb-1">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </div>
                  <h4 className="text-[13px] font-sans font-bold text-safari-ink leading-snug group-hover:text-safari-green transition-colors">{blog.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="bg-[#f9f9f9] p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-safari-green"></div>
          <h3 className="text-xl font-sans font-bold text-safari-ink">Categories</h3>
        </div>
        <ul className="space-y-3">
          <li>
            <Link href="#" className="flex items-center justify-between bg-white px-4 py-3 border border-border/40 text-[14px] text-safari-ink hover:text-safari-green transition-colors group">
              <span>Safari Tip</span>
              <span className="text-muted-foreground group-hover:text-safari-green transition-colors">3</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
