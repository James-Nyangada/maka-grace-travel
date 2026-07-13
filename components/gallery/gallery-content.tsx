'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

// Dummy data for gallery
const galleryImages = [
  { id: 1, src: '/placeholder.jpg', category: 'Wildlife', title: 'Majestic Lion' },
  { id: 2, src: '/placeholder.jpg', category: 'Landscapes', title: 'Serengeti Sunset' },
  { id: 3, src: '/placeholder.jpg', category: 'Culture', title: 'Maasai Warriors' },
  { id: 4, src: '/placeholder.jpg', category: 'Wildlife', title: 'Elephant Herd' },
  { id: 5, src: '/placeholder.jpg', category: 'Accommodations', title: 'Luxury Tent' },
  { id: 6, src: '/placeholder.jpg', category: 'Landscapes', title: 'Ngorongoro Crater' },
  { id: 7, src: '/placeholder.jpg', category: 'Wildlife', title: 'Cheetah on the Prowl' },
  { id: 8, src: '/placeholder.jpg', category: 'Culture', title: 'Local Village' },
  { id: 9, src: '/placeholder.jpg', category: 'Accommodations', title: 'Safari Lodge Pool' },
]

const categories = ['All', 'Wildlife', 'Landscapes', 'Culture', 'Accommodations']

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section className="bg-safari-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header & Filters */}
        <div className="text-center mb-12">
          <p className="font-script text-3xl text-safari-gold md:text-[34px]">A Glimpse of the Wild</p>
          <h2 className="mt-4 text-3xl font-bold text-safari-ink md:text-4xl">
            Captured Moments from Our Safaris
          </h2>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-safari-green text-white shadow-md'
                    : 'bg-white text-safari-ink border border-border hover:border-safari-green hover:text-safari-green'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative h-72 w-full overflow-hidden rounded-xl bg-gray-200 cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
              onClick={() => setLightboxImage(image.src)}
            >
              <Image 
                src={image.src} 
                alt={image.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-safari-green-dark/0 transition-colors duration-300 group-hover:bg-safari-green-dark/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="h-10 w-10 text-white mb-3" />
                <h3 className="text-white font-bold text-lg translate-y-4 transition-transform duration-300 group-hover:translate-y-0">{image.title}</h3>
                <p className="text-safari-gold text-sm font-semibold translate-y-4 transition-transform duration-300 group-hover:translate-y-0 delay-75">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 backdrop-blur-sm animate-in fade-in duration-300">
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white hover:text-safari-gold transition-colors z-50 p-2"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative h-[80vh] w-full max-w-5xl">
              <Image 
                src={lightboxImage} 
                alt="Enlarged gallery image" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
