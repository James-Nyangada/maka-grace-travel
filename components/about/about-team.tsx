import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export function AboutTeam() {
  return (
    <section className="py-20 md:py-28 bg-background relative border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="font-script text-3xl md:text-4xl text-safari-gold mb-2">The People Behind Your Journey</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-safari-ink mb-6">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Every great journey starts with a person who cares. Our small but passionate team brings together local expertise, travel industry experience, and a genuine love for Kenya &mdash; to make sure your experience exceeds every expectation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* Marykala - Founder */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/40 group max-w-sm mx-auto w-full">
            <div className="relative h-80 w-full overflow-hidden bg-muted">
              <Image
                src="/images/placeholder-safari.jpg"
                alt="Marykala - Founder"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 md:p-8">
              <h4 className="text-2xl font-bold text-safari-ink mb-1">Marykala</h4>
              <p className="text-safari-green font-medium mb-4">Founder & Travel Director</p>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                Marykala is the heart of Maka Grace Tours and Travel. With a passion for sharing the beauty of Kenya with the world and a commitment to making every client feel truly cared for, she founded the agency with one mission: to make travel personal, seamless, and extraordinary. Available Monday to Sunday, 8 AM to 9 PM EAT &mdash; she is always just a call or WhatsApp away.
              </p>
              <Link 
                href="https://wa.me/254705794254" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-4 rounded-lg font-bold transition-colors"
              >
                <MessageCircle size={20} />
                <span>Chat with Marykala</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
