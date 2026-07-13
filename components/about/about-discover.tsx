import Image from 'next/image'
import { TornEdge } from '@/components/torn-edge'

export function AboutDiscover() {
  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-safari-gold">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                   <path d="M17.5 2a5.5 5.5 0 0 0-5.5 5.5c0 1.25.4 2.4 1.08 3.33L9.25 14.66A2.5 2.5 0 0 0 5 15.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5c0-.2-.04-.4-.1-.58l3.75-3.75c.92.68 2.08 1.08 3.33 1.08a5.5 5.5 0 0 0 5.5-5.5 5.5 5.5 0 0 0-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5S15.57 4 17.5 4 21 5.57 21 7.5 19.43 11 17.5 11z"/>
                </svg>
                <h3 className="font-script text-3xl md:text-4xl text-safari-gold">Where Adventure Meets the Wild!</h3>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-safari-ink">
                Discover The Wonders Of Kenya
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Maka Grace Tours and Travel is a premier travel agency based in Kenya, dedicated to providing personalised travel experiences to adventurers from across the globe. With deep local knowledge and genuine passion for the beauty of East Africa, we offer a diverse range of tour packages that are carefully crafted to match the unique interests, budget, and travel style of every client.
              </p>
              <p>
                What truly distinguishes Maka Grace Tours and Travel is our unwavering commitment to personalised service. We believe that every traveller is unique &mdash; with different dreams, expectations, and ways of experiencing the world. That is why we take the time to listen, understand, and tailor every journey specifically around you. Whether you are a seasoned adventurer chasing the Great Migration or a first-time visitor dreaming of your first safari sunrise &mdash; we have the expertise, the connections, and the heart to make it happen.
              </p>
              <p>
                Maka Grace Tours and Travel is equally renowned for our team of expert local guides who are deeply passionate about Kenya&apos;s wildlife, landscapes, and cultures. Our guides are not only highly knowledgeable about the flora and fauna of every park and reserve &mdash; they carry a deep understanding of local communities, traditions, and conservation. This allows us to provide truly immersive experiences that connect our travellers with the land, wildlife, and people of Kenya on a meaningful level.
              </p>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-[500px] h-full">
              {/* Back Image (Cheetah) */}
              <div className="absolute top-0 left-0 w-2/3 h-[70%] z-10 shadow-xl overflow-hidden bg-background pb-5">
                <div className="relative w-full h-full">
                  <Image
                    src="/placeholder.jpg"
                    alt="Cheetah resting"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full">
                  <TornEdge fill="#ffffff" />
                </div>
              </div>

              {/* Front Image (Lion) */}
              <div className="absolute bottom-10 right-0 w-3/4 h-[75%] z-20 shadow-2xl bg-white pb-5 transform rotate-2 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/placeholder.jpg"
                    alt="Lion close up"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full">
                  <TornEdge fill="#ffffff" />
                </div>
              </div>

              {/* Years of Experience Badge */}
              <div className="absolute bottom-24 left-4 lg:-left-6 z-30 bg-white shadow-xl p-6 text-center w-40 h-40 flex flex-col items-center justify-center transform -rotate-3 border border-border/20">
                <div className="absolute inset-1 border border-dashed border-border pointer-events-none" />
                <div className="text-5xl font-bold text-safari-green mb-1 leading-none">100%</div>
                <div className="text-safari-ink font-medium leading-tight text-base">
                  Custom<br/>Itineraries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
