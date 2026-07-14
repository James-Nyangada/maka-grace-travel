import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Tag } from 'lucide-react'

export async function BlogList() {
  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  let blogs: any[] = [];
  try {
    const res = await fetch(`${API}/api/blogs`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      blogs = data.blogs || [];
    }
  } catch (err) {
    console.error("Error fetching blogs:", err);
  }

  if (blogs.length === 0) {
    return <div className="text-center py-10 text-muted-foreground">No blogs found. Check back later!</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogs.map((blog, idx) => {
        const dateStr = blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) : '';
        const imageSrc = blog.thumbnailUrl || "/images/safari_lions.png";
        
        return (
          <div key={blog._id || idx} className="bg-white border border-border/40 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col group">
            <div className="relative h-64 w-full overflow-hidden">
              <Image src={imageSrc} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              {blog.category && (
                <div className="absolute bottom-0 left-0 bg-safari-green text-white text-[11px] font-bold tracking-wider px-4 py-2 flex items-center gap-1.5 z-10">
                  <Tag className="w-3 h-3" /> {blog.category}
                </div>
              )}
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center gap-2 text-[12px] text-muted-foreground mb-3">
                <Calendar className="w-3.5 h-3.5 text-safari-green" />
                {dateStr}
              </div>
              <h3 className="text-[22px] font-sans font-bold text-safari-ink mb-6 line-clamp-2 leading-snug group-hover:text-safari-green transition-colors">
                <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
              </h3>
              <div className="mt-auto">
                <Link href={`/blogs/${blog.slug}`} className="inline-flex items-center gap-3 text-[13px] font-bold tracking-widest text-safari-ink hover:text-safari-green transition-colors uppercase group/link">
                  READ MORE 
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-3 group-hover/link:translate-x-1 transition-transform">
                    <path d="M0 6H22M16 1L23 6L16 11" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

