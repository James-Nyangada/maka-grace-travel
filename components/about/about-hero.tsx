'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Plane } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/maasai-hero.png"
          alt="Maasai people jumping"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Decorative dashed line and plane - simplified version */}
      <div className="absolute left-10 lg:left-32 top-1/2 -translate-y-1/2 z-10 hidden md:block opacity-90">
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-12">
          <path d="M20 130 C 10 70, 80 20, 100 80 C 120 140, 180 50, 180 50" stroke="white" strokeWidth="2" strokeDasharray="6 6" fill="transparent"/>
        </svg>
        <Plane className="text-white absolute top-[25px] right-[10px] rotate-45" size={24} />
      </div>

      <div className="relative z-10 text-center text-white px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-sans">About Us</h1>
        <div className="flex items-center justify-center gap-2 text-lg">
          <Link href="/" className="text-safari-gold-light hover:text-white transition-colors underline underline-offset-4 decoration-safari-gold-light/40">
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="text-white font-medium">About Us</span>
        </div>
      </div>
    </section>
  )
}
