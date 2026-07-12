import Image from 'next/image'

export function PackageGalleryTab() {
  const images = Array(6).fill('/images/placeholder-safari.jpg')

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-3xl font-sans font-bold text-safari-ink mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
            <Image src={src} alt="Gallery image" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
