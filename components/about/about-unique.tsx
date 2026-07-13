'use client'

import { PawPrint, Binoculars, Home, Heart } from 'lucide-react'

const uniqueFeatures = [
  {
    icon: <PawPrint className="w-10 h-10 text-safari-green" strokeWidth={1.5} />,
    title: "Authentic Safari Experiences",
    description: "Untouched wilderness and iconic destinations explored with expert-certified Kenya guides."
  },
  {
    icon: <Binoculars className="w-10 h-10 text-safari-green" strokeWidth={1.5} />,
    title: "Diverse Wildlife Sightings",
    description: "Witness the Big Five and rare species in their natural habitat across Kenya's finest parks."
  },
  {
    icon: <Home className="w-10 h-10 text-safari-green" strokeWidth={1.5} />,
    title: "Luxury & Budget-Friendly Stays",
    description: "Stay in handpicked lodges, tented camps, or luxury resorts \u2014 all selected for quality and comfort."
  },
  {
    icon: <Heart className="w-10 h-10 text-safari-green" strokeWidth={1.5} />,
    title: "Eco-Friendly & Community Supportive",
    description: "Travel responsibly while supporting conservation efforts and the local communities we work with."
  }
]

export function AboutUnique() {
  return (
    <section className="py-20 md:py-28 bg-safari-cream relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <h3 className="font-script text-3xl md:text-4xl text-safari-gold mb-2">The Maka Grace Difference</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-safari-ink mb-6">
            What Makes Us Unique
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            At Maka Grace Tours and Travel, we go beyond ordinary travel packages to offer exceptional, immersive, and memorable experiences. From expert-guided wildlife encounters and luxury lodge stays to eco-conscious travel and cultural connections &mdash; every journey with us is designed to be extraordinary, personal, and truly unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uniqueFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border/40 group hover:-translate-y-1">
              <div className="mb-6 bg-safari-cream/50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-safari-ink mb-3">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
