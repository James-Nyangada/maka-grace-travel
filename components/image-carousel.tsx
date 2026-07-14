'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function ImageCarousel({ 
  images, 
  altText,
  priority = false 
}: { 
  images: string[]; 
  altText: string;
  priority?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Filter out any empty strings or nulls, and fix wrong backend ports
  const validImages = images
    .filter(Boolean)
    .map(url => url.replace('localhost:3000/uploads', 'localhost:4000/uploads'))

  useEffect(() => {
    if (validImages.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validImages.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [validImages.length])

  if (validImages.length === 0) {
    return (
      <Image 
        src="/placeholder.jpg" 
        alt="Placeholder" 
        fill 
        className="object-cover" 
      />
    )
  }

  return (
    <>
      {validImages.map((src, idx) => (
        <Image
          key={`${src}-${idx}`}
          src={src}
          alt={`${altText} - image ${idx + 1}`}
          fill
          priority={priority && idx === 0}
          className={`object-cover transition-opacity duration-1000 ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </>
  )
}
