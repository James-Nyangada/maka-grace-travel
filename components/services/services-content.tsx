'use client'

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
  },
  {
    title: 'Beach & Coastal Holidays',
    description: 'Relaxing coastal getaways to Diani, Watamu, Malindi, Lamu, and more',
    icon: Umbrella,
  },
  {
    title: 'Mountain Climbing & Hiking',
    description: 'Guided hikes and climbs including Mount Kenya and the Aberdare ranges',
    icon: Mountain,
  },
  {
    title: 'Cultural & Heritage Tours',
    description: 'Authentic cultural experiences with Maasai communities and Kenya\'s rich heritage',
    icon: Users,
  },
  {
    title: 'International Travel Packages',
    description: 'Full travel packages with flights and visas to destinations beyond Kenya',
    icon: Globe2,
  },
  {
    title: 'Honeymoon & Romance Packages',
    description: 'Curated romantic escapes with premium lodges, private dinners, and exclusive experiences',
    icon: Heart,
  },
  {
    title: 'Family Holiday Packages',
    description: 'Safe, fun, family-friendly itineraries for travellers of all ages',
    icon: Baby,
  },
  {
    title: 'Group / School Trips',
    description: 'Coordinated group travel for schools, colleges, and organisations',
    icon: GraduationCap,
  },
  {
    title: 'Corporate Travel & Retreats',
    description: 'Professional travel management and retreat planning for businesses',
    icon: Briefcase,
  },
  {
    title: 'Weekend Getaways',
    description: 'Quick 2–3 day escapes from Nairobi to nearby Kenya destinations',
    icon: CalendarDays,
  },
  {
    title: 'Airport Transfers',
    description: 'Reliable, punctual airport pick-up and drop-off across Kenya',
    icon: Car,
  },
  {
    title: 'Air Ticketing & Flight Booking',
    description: 'Domestic and international flight bookings at competitive rates',
    icon: Ticket,
  },
  {
    title: 'Visa Processing Assistance',
    description: 'Expert support and guidance for visa applications and international travel documentation',
    icon: FileCheck,
  },
  {
    title: 'Travel Insurance',
    description: 'Recommended travel insurance options to protect every trip',
    icon: ShieldCheck,
  },
  {
    title: 'Hotel & Accommodation Booking',
    description: 'Hotels, lodges, camps, and resorts sourced for every budget and preference',
    icon: Building,
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
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-safari-green/30"
              >
                {/* Accent Ribbon */}
                <div className="absolute top-0 left-8 h-1 w-12 bg-safari-gold rounded-b-md transition-all duration-300 group-hover:w-24 group-hover:bg-safari-green" />
                
                {/* Icon Container */}
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-safari-green/10 text-safari-green transition-transform duration-300 group-hover:scale-110 group-hover:bg-safari-green group-hover:text-white">
                  <Icon strokeWidth={1.5} className="h-8 w-8" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-safari-ink mb-3 group-hover:text-safari-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
