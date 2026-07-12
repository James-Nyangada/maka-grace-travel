'use client'

import { SignpostBig, Flame, Tent, TreePine } from 'lucide-react'

const uniqueFeatures = [
  {
    icon: <SignpostBig className="w-10 h-10 text-safari-green" strokeWidth={1.5} />,
    title: "Authentic Safari Experiences",
    description: "Untouched Wilderness & Iconic Destinations With Expert Guides."
  },
  {
    icon: <Flame className="w-10 h-10 text-safari-green" strokeWidth={1.5} />,
    title: "Diverse Wildlife Sightings",
    description: "Witness The Big Five And Rare Species In Their Natural Habitat."
  },
  {
    icon: <Tent className="w-10 h-10 text-safari-green" strokeWidth={1.5} />,
    title: "Luxury & Budget-Friendly Stays",
    description: "Stay In Handpicked Lodges, Tented Camps, Or Luxury Resorts."
  },
  {
    icon: <TreePine className="w-10 h-10 text-safari-green" strokeWidth={1.5} />,
    title: "Eco-Friendly & Community Supportive",
    description: "Travel Responsibly While Supporting Conservation And Local Communities."
  }
]

export function AboutUnique() {
  return (
    <section className="py-20 md:py-28 bg-safari-cream relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <h3 className="font-script text-3xl md:text-4xl text-safari-gold mb-2">The Uwanda Difference</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-safari-ink mb-6">
            What Makes Us Unique
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            At Uwanda Tours And Safaris, we go beyond ordinary safaris to offer exceptional, immersive, and sustainable travel experiences. From expert guides and diverse wildlife sightings to luxury stays and eco-conscious travel, every journey with us is designed to be extraordinary and unforgettable.
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
