'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, ArrowRight, ChevronRight, Map, TreePine, Calendar, ChevronsRight } from 'lucide-react'

const allPackages = [
  {
    id: 1,
    image: '/placeholder.jpg',
    route: 'Zanzibar → Nyerere NP → Zanzibar',
    title: '3-Day Flight Package Zanzibar to Nyerere Private',
    features: ['Wild Adventure from Zanzibar', 'Safari Meets Culture'],
    price: '$750',
    type: 'Mid-Range'
  },
  {
    id: 2,
    image: '/placeholder.jpg',
    route: 'Zanzibar → Nyerere NP → Zanzibar',
    title: '2-Day Flying Zanzibar to Nyerere National Park',
    features: ['Game Drive Spots Wildlife', 'Boat Safari Rufiji River'],
    price: '$690',
    type: 'Mid-Range'
  },
  {
    id: 3,
    image: '/placeholder.jpg',
    route: 'Zanzibar → Nyerere NP → Zanzibar',
    title: '1-Day Game Drive Safari Flying Zanzibar To Nyerere NP (Selous GR)',
    features: ['One Day, Big Adventure', 'Wild Safari in a Day'],
    price: '$450',
    type: 'Mid-Range'
  },
  {
    id: 4,
    image: '/placeholder.jpg',
    route: 'Dar Es Salaam → Mikumi NP → Ruaha NP → Nyerere NP → Dar Es Salaam',
    title: '8-Day Amazing Safari Mikumi NP, Ruaha NP, Selous GR (Nyerere NP)',
    features: ['Diverse Wildlife Encounters', 'Scenic Landscapes'],
    price: '$1,969',
    type: 'Mid-Range'
  },
  {
    id: 5,
    image: '/placeholder.jpg',
    route: 'Zanzibar → Serengeti NP → Zanzibar',
    title: '2-Day Zanzibar to Serengeti by Flight + 2 Game Drive',
    features: ['Chance to spot the Big Five', '2 thrilling game drives'],
    price: '$1,185',
    type: 'Mid-Range'
  },
  {
    id: 6,
    image: '/placeholder.jpg',
    route: 'Zanzibar → Serengeti NP → Zanzibar',
    title: '3-Day Flight Package Zanzibar to Serengeti National Park',
    features: ['Witness the Big Five', 'Migration Views (Seasonal)'],
    price: '$1,799',
    type: 'Mid-Range'
  }
]

export function PackagesContent() {
  const [priceRange, setPriceRange] = useState(100)

  return (
    <section className="py-20 bg-safari-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filter */}
          <aside className="w-full lg:w-1/4 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-border/40 p-6 sticky top-28">
              <h3 className="text-xl font-bold text-safari-ink mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-safari-green rounded-full"></span>
                Search By Filter
              </h3>
              
              <div className="space-y-6">
                {/* Destination */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-safari-green" />
                    </div>
                    <select className="w-full appearance-none bg-white border border-border/60 rounded-md py-3 pl-10 pr-10 text-safari-ink focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-shadow cursor-pointer">
                      <option value="all">Destination: All</option>
                      <option value="serengeti">Serengeti NP</option>
                      <option value="nyerere">Nyerere NP</option>
                      <option value="mikumi">Mikumi NP</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <ChevronRight className="h-4 w-4 text-muted-foreground rotate-90" />
                    </div>
                    <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-safari-ink">Destination</div>
                  </div>
                </div>

                {/* Safari Comfort */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <TreePine className="h-5 w-5 text-safari-green" />
                    </div>
                    <select className="w-full appearance-none bg-white border border-border/60 rounded-md py-3 pl-10 pr-10 text-safari-ink focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-shadow cursor-pointer">
                      <option value="all">Safari Comfort: All</option>
                      <option value="mid">Mid-Range</option>
                      <option value="luxury">Luxury</option>
                      <option value="budget">Budget</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <ChevronRight className="h-4 w-4 text-muted-foreground rotate-90" />
                    </div>
                    <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-safari-ink">Safari Comfort</div>
                  </div>
                </div>

                {/* Days */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-safari-green" />
                    </div>
                    <select className="w-full appearance-none bg-white border border-border/60 rounded-md py-3 pl-10 pr-10 text-safari-ink focus:outline-none focus:border-safari-green focus:ring-1 focus:ring-safari-green transition-shadow cursor-pointer">
                      <option value="all">Days: All</option>
                      <option value="1-3">1 - 3 Days</option>
                      <option value="4-7">4 - 7 Days</option>
                      <option value="8+">8+ Days</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <ChevronRight className="h-4 w-4 text-muted-foreground rotate-90" />
                    </div>
                    <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-safari-ink">Days</div>
                  </div>
                </div>

                {/* Price Slider */}
                <div className="pt-4">
                  <h4 className="font-bold text-safari-ink mb-4">Filter By Price</h4>
                  <div className="relative w-full h-2 bg-muted rounded-full">
                    <div className="absolute top-0 left-0 h-full bg-safari-green rounded-l-full" style={{ width: '100%' }}></div>
                    <div className="absolute top-1/2 -mt-2.5 -ml-2.5 left-0 w-5 h-5 bg-white border-2 border-safari-green rounded-full cursor-pointer shadow"></div>
                    <div className="absolute top-1/2 -mt-2.5 -mr-2.5 right-0 w-5 h-5 bg-white border-2 border-safari-green rounded-full cursor-pointer shadow"></div>
                  </div>
                  <div className="mt-4 text-sm font-semibold text-safari-ink">
                    Price: <span className="text-muted-foreground font-medium">$100 — $5,000</span>
                  </div>
                </div>

                <button className="w-full bg-safari-green text-white font-bold py-3 px-6 rounded-md hover:bg-safari-green-dark transition-colors self-start mt-4 max-w-[150px]">
                  Apply Filter
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 flex flex-col">
            
            {/* Top Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-border/40 p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-safari-ink font-semibold text-sm">
                Showing <span className="text-safari-gold">1 - 10</span> of 26 Results
              </p>
              <div className="flex items-center gap-2">
                <select className="bg-transparent text-safari-ink font-semibold text-sm focus:outline-none cursor-pointer pr-4 appearance-none">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration: Shortest</option>
                </select>
                <ChevronRight className="h-4 w-4 text-safari-ink rotate-90 -ml-5 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {allPackages.map((pkg) => (
                <article key={pkg.id} className="bg-white rounded-xl shadow-sm border border-border/40 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
                  <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
                    <Image src={pkg.image} alt={pkg.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                  </div>
                  <div className="flex flex-col flex-grow p-6 pt-6 relative">
                    <div className="absolute -top-4 right-4 bg-white px-4 py-1.5 text-sm font-semibold text-safari-ink shadow-md rounded-sm border border-border/10 z-10">
                      {pkg.type}
                    </div>
                    <p className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                      <MapPin className="h-4 w-4 text-safari-green" />
                      {pkg.route}
                    </p>
                    <h3 className="text-xl font-bold leading-tight text-safari-ink mb-4 hover:text-safari-green transition-colors cursor-pointer">
                      {pkg.title}
                    </h3>
                    
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="h-4 w-4 text-safari-green shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto pt-5 border-t border-border/50 flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        Starting From <span className="text-lg font-bold text-safari-green">{pkg.price}</span>
                      </p>
                      <a href="#" aria-label={`View ${pkg.title}`} className="group/btn flex items-center text-safari-green">
                        <span className="block h-px w-12 bg-safari-green transition-all group-hover/btn:w-16" />
                        <ArrowRight className="-ml-1 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-auto">
              <button className="w-10 h-10 rounded-full bg-safari-green text-white flex items-center justify-center font-bold shadow-md">
                1
              </button>
              <button className="w-10 h-10 rounded-full bg-white text-safari-ink hover:bg-safari-cream flex items-center justify-center font-bold shadow-sm border border-border/40 transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-full bg-white text-safari-ink hover:bg-safari-cream flex items-center justify-center font-bold shadow-sm border border-border/40 transition-colors">
                3
              </button>
              <button className="w-10 h-10 rounded-full bg-white text-safari-ink hover:bg-safari-cream flex items-center justify-center shadow-sm border border-border/40 transition-colors">
                <ChevronsRight className="h-5 w-5" />
                
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
