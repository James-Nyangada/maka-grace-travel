'use client'

import { Shield, Star, UserCheck, Leaf } from 'lucide-react'

const coreValues = [
  {
    icon: <Shield className="w-8 h-8 text-safari-green" strokeWidth={1.5} />,
    title: "Integrity",
    description: "We are honest in everything \u2014 our pricing, our advice, and our promises."
  },
  {
    icon: <Star className="w-8 h-8 text-safari-green" strokeWidth={1.5} />,
    title: "Excellence",
    description: "We set a high standard for every trip, every communication, and every detail."
  },
  {
    icon: <UserCheck className="w-8 h-8 text-safari-green" strokeWidth={1.5} />,
    title: "Personalisation",
    description: "No two clients are the same. We never offer a one-size-fits-all experience."
  },
  {
    icon: <Leaf className="w-8 h-8 text-safari-green" strokeWidth={1.5} />,
    title: "Sustainability",
    description: "We protect the Kenya we love by operating with environmental and community responsibility."
  }
]

export function AboutMissionVision() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="sr-only">Our Mission, Vision, and Values</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          
          <div className="bg-safari-cream/40 p-8 md:p-12 rounded-2xl border border-border/40">
            <h3 className="font-script text-3xl md:text-4xl text-safari-gold mb-4">Our Mission</h3>
            <p className="text-xl md:text-2xl font-bold text-safari-ink leading-relaxed">
              "To provide exceptional, reliable, and personalised travel experiences that showcase the beauty of Kenya while delivering outstanding customer service, comfort, and value to every traveller."
            </p>
          </div>
          
          <div className="p-8 md:p-12 lg:p-0 lg:py-6">
            <h3 className="font-script text-3xl md:text-4xl text-safari-gold mb-4">Our Vision</h3>
            <p className="text-xl font-medium text-safari-ink leading-relaxed">
              "To be Kenya's most trusted and recommended travel agency &mdash; known for the quality of our journeys, the warmth of our service, and the depth of our local connections."
            </p>
          </div>
          
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-safari-ink mb-10 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 bg-safari-cream/50 w-16 h-16 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-safari-ink mb-2">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}
