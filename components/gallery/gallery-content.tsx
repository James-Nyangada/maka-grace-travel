'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'
import { api } from '@/lib/api'

export function GalleryContent() {
  const [images, setImages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true)
        const data = await api.gallery.getVisible({ limit: 50 })
        setImages(data.images || [])
      } catch (error) {
        console.error("Failed to fetch gallery images:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchImages()
  }, [])

  return (
    <section className="bg-safari-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header & Filters */}
        <div className="text-center mb-12">
          <p className="font-script text-3xl text-safari-gold md:text-[34px]">A Glimpse of the Wild</p>
          <h2 className="mt-4 text-3xl font-bold text-safari-ink md:text-4xl">
            Captured Moments from Our Safaris
          </h2>
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="text-center text-safari-ink font-medium py-12">
            Loading gallery images...
          </div>
        ) : images.length === 0 ? (
          <div className="text-center text-safari-ink/60 font-medium py-12">
            No gallery images available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div 
                key={image._id} 
                className="group relative h-72 w-full overflow-hidden rounded-xl bg-gray-200 cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
                onClick={() => setLightboxImage(image.imageUrl)}
              >
                <Image 
                  src={image.imageUrl} 
                  alt={image.caption || 'Gallery Image'} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-safari-green-dark/0 transition-colors duration-300 group-hover:bg-safari-green-dark/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="h-10 w-10 text-white mb-3" />
                  <h3 className="text-white font-bold text-lg translate-y-4 transition-transform duration-300 group-hover:translate-y-0 px-4 text-center">
                    {image.caption}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {lightboxImage && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Gallery Image Lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 backdrop-blur-sm animate-in fade-in duration-300"
          >
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
