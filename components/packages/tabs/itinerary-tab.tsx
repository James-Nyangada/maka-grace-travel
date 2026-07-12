export function PackageItineraryTab() {
  const days = [
    {
      day: 'Day 1: Arrival in Arusha',
      description: 'Upon arrival at Kilimanjaro International Airport, you will be met by our representative and transferred to your hotel in Arusha for an overnight stay. Relax and prepare for your upcoming safari adventure.'
    },
    {
      day: 'Day 2: Tarangire National Park',
      description: 'After breakfast, depart for Tarangire National Park, known for its large elephant herds and iconic baobab trees. Enjoy a full day game drive with a picnic lunch. Late afternoon, proceed to your lodge for dinner and overnight.'
    },
    {
      day: 'Day 3: Serengeti National Park',
      description: 'Head towards the world-famous Serengeti National Park. The journey takes you through the beautiful high lying farmland of Karatu and the Ngorongoro Conservation Area. Enjoy a game drive en route to your camp in the Serengeti.'
    }
  ]

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-3xl font-sans font-bold text-safari-ink mb-6">Detailed Itinerary</h2>
      <div className="space-y-6">
        {days.map((item, idx) => (
          <div key={idx} className="border-l-2 border-safari-green pl-6 pb-6 relative">
            <div className="absolute w-4 h-4 rounded-full bg-safari-gold -left-[9px] top-1 border-2 border-white"></div>
            <h3 className="font-sans font-bold text-xl text-safari-ink mb-3">{item.day}</h3>
            <p className="text-muted-foreground text-[14px] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
