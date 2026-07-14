import Image from 'next/image'
import { Package } from '@/lib/types'

export function PackageGalleryTab({ packageData }: { packageData: Package }) {
  const images = [packageData.imageUrl, ...(packageData.galleryUrls || [])]
    .filter(Boolean)
    .map(url => url.replace('localhost:3000/uploads', 'localhost:4000/uploads'))

  if (images.length === 0) {
    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <h2 className="text-3xl font-sans font-bold text-safari-ink mb-6">Gallery</h2>
        <p className="text-muted-foreground">No images available for this package.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-3xl font-sans font-bold text-safari-ink mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer bg-muted">
            <Image src={src} alt={`${packageData.name} image ${idx + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
