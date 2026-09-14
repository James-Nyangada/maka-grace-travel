'use client'

import Image from 'next/image'
import { 
  Camera, 
  Umbrella, 
  Mountain, 
  Users, 
  Globe2, 
  Heart, 
  Baby, 
  GraduationCap, 
  Briefcase, 
  CalendarDays, 
  Car, 
  Ticket, 
  FileCheck, 
  ShieldCheck, 
  Building 
} from 'lucide-react'

const services = [
  {
    title: 'Safari & Wildlife Packages',
    description: 'Tailor-made wildlife safari experiences across Kenya\'s iconic national parks and reserves',
    icon: Camera,
    image: '/images/services-safari.png',
  },
  {
    title: 'Beach & Coastal Holidays',
    description: 'Relaxing coastal getaways to Diani, Watamu, Malindi, Lamu, and more',
    icon: Umbrella,
    image: '/images/beach-hero.png',
  },
  {
    title: 'Mountain Climbing & Hiking',
    description: 'Guided hikes and climbs including Mount Kenya and the Aberdare ranges',
    icon: Mountain,
    image: '/images/safari-parallax-bg.png',
  },
  {
    title: 'Cultural & Heritage Tours',
    description: 'Authentic cultural experiences with Maasai communities and Kenya\'s rich heritage',
    icon: Users,
    image: '/images/maasai-hero.png',
  },
  {
    title: 'International Travel Packages',
    description: 'Full travel packages with flights and visas to destinations beyond Kenya',
    icon: Globe2,
    image: '/images/balloons-hero.png',
  },
  {
    title: 'Honeymoon & Romance Packages',
    description: 'Curated romantic escapes with premium lodges, private dinners, and exclusive experiences',
    icon: Heart,
    image: '/images/lodge-aerial.png',
  },
  {
    title: 'Family Holiday Packages',
    description: 'Safe, fun, family-friendly itineraries for travellers of all ages',
    icon: Baby,
    image: '/images/testimonial2.webp',
  },
  {
    title: 'Group / School Trips',
    description: 'Coordinated group travel for schools, colleges, and organisations',
    icon: GraduationCap,
    image: '/images/testimonial1.webp',
  },
  {
    title: 'Corporate Travel & Retreats',
    description: 'Professional travel management and retreat planning for businesses',
    icon: Briefcase,
    image: '/images/About-2.webp',
  },
  {
    title: 'Weekend Getaways',
    description: 'Quick 2–3 day escapes from Nairobi to nearby Kenya destinations',
    icon: CalendarDays,
    image: '/images/person-lake.png',
  },
  {
    title: 'Airport Transfers',
    description: 'Reliable, punctual airport pick-up and drop-off across Kenya',
    icon: Car,
    image: '/images/airport_transfer_new.png',
  },
  {
    title: 'Air Ticketing & Flight Booking',
    description: 'Domestic and international flight bookings at competitive rates',
    icon: Ticket,
    image: '/images/balloons.png',
  },
  {
    title: 'Visa Processing Assistance',
    description: 'Expert support and guidance for visa applications and international travel documentation',
    icon: FileCheck,
    image: '/images/About-1.webp',
  },
  {
    title: 'Travel Insurance',
    description: 'Recommended travel insurance options to protect every trip',
    icon: ShieldCheck,
    image: '/images/safari_elephants.png',
  },
  {
    title: 'Hotel & Accommodation Booking',
    description: 'Hotels, lodges, camps, and resorts sourced for every budget and preference',
    icon: Building,
    image: '/images/safari_sunset.png',
  },
]

export function ServicesContent() {
  return (
    <section className="bg-safari-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-script text-3xl text-safari-gold md:text-[34px]">What We Offer</p>
          <h2 className="mt-4 text-3xl font-bold text-safari-ink md:text-4xl">
            Our Comprehensive Travel Services
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Whether you are looking for an adventurous safari, a relaxing beach holiday, or expert assistance with flights and visas, we provide end-to-end services to make your travel seamless and unforgettable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-border/40"
              >
                {/* Top Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Accent Ribbon */}
                  <div className="absolute top-0 left-8 h-1 w-12 bg-safari-gold rounded-b-md transition-all duration-300 group-hover:w-24 group-hover:bg-safari-green" />
                </div>
                
                {/* Content */}
                <div className="relative flex flex-col flex-1 p-8 pt-6">
                  {/* Icon Container - overlapping the image */}
                  <div className="absolute -top-10 right-8 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-lg border border-border/50 text-safari-green transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-safari-green group-hover:text-white">
                    <Icon strokeWidth={1.5} className="h-8 w-8" />
                  </div>
                  
                  <h3 className="mt-2 text-xl font-bold text-safari-ink mb-3 group-hover:text-safari-green transition-colors duration-300 pr-12">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

