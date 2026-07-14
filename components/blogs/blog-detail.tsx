import Image from 'next/image'
import { Calendar } from 'lucide-react'

export function BlogDetail({ blog }: { blog: any }) {
  const dateStr = blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) : '';
  const imageSrc = blog.thumbnailUrl || "/images/safari_lions.png";

  return (
    <article className="space-y-8">
      {/* Featured Image */}
      <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-lg overflow-hidden">
        <Image src={imageSrc} alt={blog.title} fill className="object-cover" />
      </div>

      <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
        <Calendar className="w-4 h-4 text-safari-green" />
        <span>{dateStr}</span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-safari-ink leading-tight">
        {blog.title}
      </h1>

      <div 
        className="prose prose-lg max-w-none text-muted-foreground font-body text-[15px] leading-relaxed space-y-6" 
        dangerouslySetInnerHTML={{ __html: blog.content }} 
      />
    </article>
  )
}

