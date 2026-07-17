import { Compass, CarFront, Users, MessageCircle, ShieldCheck, MapPin } from 'lucide-react'

const features = [
  {
    name: 'Local & International Expertise',
    description: 'Deep East African roots combined with international safari standards.',
    icon: MapPin,
  },
  {
    name: 'Personalized Itineraries',
    description: 'Custom-tailored trips designed around your unique preferences and schedule.',
    icon: Compass,
  },
  {
    name: 'Reliable 4x4 Vehicles',
    description: 'Top-tier safari vehicles ensuring comfort and safety in the wild.',
    icon: CarFront,
  },
  {
    name: 'Professional Guides',
    description: 'Experienced, knowledgeable, and certified local guides.',
    icon: Users,
  },
  {
    name: 'Quick WhatsApp Support',
    description: 'Fast, responsive assistance before and during your journey.',
    icon: MessageCircle,
  },
  {
    name: 'Secure Booking Process',
    description: 'Safe and transparent payment methods you can trust.',
    icon: ShieldCheck,
  },
]

export function TrustSection() {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-script text-3xl text-safari-gold md:text-4xl">Peace of Mind</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-safari-ink sm:text-4xl">
            Why Choose Maka Grace Tours & Travel
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-safari-green/10 text-safari-green mb-6">
                <feature.icon className="h-8 w-8" aria-hidden="true" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold leading-7 text-safari-ink">{feature.name}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
