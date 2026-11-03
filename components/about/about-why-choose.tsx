'use client'

import Image from 'next/image'
import { MapPin, Leaf, Route, Headset } from 'lucide-react'

const features = [
  {
    icon: <MapPin className="w-8 h-8 text-safari-green" strokeWidth={1.5} />,
    title: "Expert Local Guides",
    description: "Knowledgeable, professional, and genuinely passionate about Kenya's wildlife and landscapes."
  },
  {
    icon: <Leaf className="w-8 h-8 text-safari-green" strokeWidth={1.5} />,
    title: "Sustainable Tourism",
    description: "We partner with lodges and operators who prioritise eco-friendly practices and conservation."
  },
  {
    icon: <Route className="w-8 h-8 text-safari-green" strokeWidth={1.5} />,
    title: "Tailor-Made Experiences",
    description: "Every itinerary is built around your travel style, budget, and the destinations that excite you most."
  },
  {
    icon: <Headset className="w-8 h-8 text-safari-green" strokeWidth={1.5} />,
    title: "Seamless Travel Planning",
    description: "From booking to touchdown \u2014 we handle every detail with prompt, hassle-free, 24/7 support."
  }
]

export function AboutWhyChoose() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Image */}
          <div className="relative h-[500px] md:h-[600px] w-full lg:w-[110%] lg:-ml-10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 w-full h-full bg-muted">
              <Image
                src="/images/person-lake.png"
                alt="Person looking at lake"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* White Torn Edge overlay on the right */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at 100% 50%, transparent 40%, #ffffff 41%)',
                backgroundSize: '16px 20px',
                backgroundPosition: 'right center',
                backgroundRepeat: 'repeat-y'
              }}
            />
            
            {/* Green Badge Overlay */}
            <div className="absolute bottom-16 left-8 md:left-16 bg-safari-green rounded-[2rem] transform -rotate-[15deg] p-6 shadow-xl z-10 w-48 text-center flex flex-col items-center justify-center aspect-square">
              <p className="font-script text-white text-4xl leading-tight transform rotate-[5deg]">
                Never stop
                <br />
                <span className="text-5xl">Exploring</span>
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-10 lg:pl-12">
            <div className="space-y-2">
              <p className="font-script text-3xl md:text-4xl text-safari-gold">Unmatched Experiences, Unforgettable Memories</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-safari-ink">
                Why Choose Us
              </h2>
              <p className="text-muted-foreground leading-relaxed pt-4 text-lg">
                Experience Kenya like never before with expertly guided, tailor-made travel experiences that prioritise adventure, comfort, and authentic local culture. We offer seamless travel planning and genuine wildlife encounters for a journey you will never forget.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border border-border/30">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-safari-ink mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
