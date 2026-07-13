'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const destinations = [
  {
    id: 'maasai-mara',
    name: 'Maasai Mara',
    description: 'World-famous for the Great Migration and abundant big cat populations.',
    image: '/placeholder.jpg',
    category: 'National Reserve',
  },
  {
    id: 'amboseli',
    name: 'Amboseli National Park',
    description: 'Iconic views of Mount Kilimanjaro and massive herds of free-ranging elephants.',
    image: '/placeholder.jpg',
    category: 'National Park',
  },
  {
    id: 'tsavo',
    name: 'Tsavo East & West',
    description: 'The largest park in Kenya, known for its red elephants and rugged wilderness.',
    image: '/placeholder.jpg',
    category: 'National Park',
  },
  {
    id: 'lake-nakuru',
    name: 'Lake Nakuru',
    description: 'A birder\'s paradise, famous for its pink flamingos and rhino sanctuary.',
    image: '/placeholder.jpg',
    category: 'National Park',
  },
  {
    id: 'diani-beach',
    name: 'Diani Beach',
    description: 'Pristine white sands, crystal clear waters, and vibrant coral reefs.',
    image: '/placeholder.jpg',
    category: 'Coastal Resort',
  },
  {
    id: 'mount-kenya',
    name: 'Mount Kenya',
    description: 'Africa\'s second-highest peak, offering challenging treks and diverse alpine flora.',
    image: '/placeholder.jpg',
    category: 'Mountain',
  },
]

export function DestinationsContent() {
  return (
    <section className="bg-safari-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-script text-3xl text-safari-gold md:text-[34px]">Explore the Wonders</p>
          <h2 className="mt-4 text-3xl font-bold text-safari-ink md:text-4xl">
            Top Destinations in Kenya
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            From the endless plains of the Maasai Mara to the turquoise waters of the Indian Ocean, 
            discover the places that make Kenya the ultimate safari and holiday destination.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Link 
              key={destination.id} 
              href={`/packages?destination=${destination.id}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-safari-green/30"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={destination.image} 
                  alt={destination.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-safari-gold text-safari-ink text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {destination.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-2 text-safari-green mb-3">
                  <MapPin size={18} />
                  <span className="text-sm font-bold uppercase tracking-wider">Kenya</span>
                </div>
                
                <h3 className="text-2xl font-bold text-safari-ink mb-3 group-hover:text-safari-green transition-colors">
                  {destination.name}
                </h3>
                
                <p className="text-muted-foreground flex-grow mb-6">
                  {destination.description}
                </p>
                
                <div className="flex items-center text-safari-gold font-bold group-hover:translate-x-2 transition-transform duration-300">
                  Explore Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
