export function TailorCta() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative flex flex-col gap-8 overflow-hidden rounded-lg bg-safari-green px-8 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          {/* Dotted plane doodle */}
          <svg
            className="pointer-events-none absolute right-[28%] top-3 hidden h-20 w-40 text-white/70 lg:block"
            viewBox="0 0 160 80"
            fill="none"
            aria-hidden="true"
          >
            <path d="M10 70 C 40 60, 60 30, 110 25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
            <path d="M118 14 l5 8 10 2 -8 5 -1 10 -8 -7 -10 2 4 -9 -6 -8 10 2 z" fill="currentColor" transform="scale(0.7) translate(60, 8)" />
          </svg>

          <div className="flex items-center gap-6">
            <svg
              viewBox="0 0 72 56"
              fill="none"
              stroke="white"
              strokeWidth="2"
              className="h-16 w-20 shrink-0"
              aria-hidden="true"
            >
              <path d="M8 40 L8 26 L20 26 L26 14 L52 14 L52 40" />
              <path d="M4 40 L68 40" />
              <circle cx="20" cy="46" r="6" />
              <circle cx="52" cy="46" r="6" />
              <path d="M30 20 L30 26 M38 20 L38 26 M46 20 L46 26" />
            </svg>
            <div>
              <p className="mb-2 font-script text-2xl text-safari-gold-light md:text-[28px]">Your Journey Starts Here</p>
              <h2 className="text-2xl font-bold text-white md:text-3xl">Let Us Create Your Tailor-Made Trip.</h2>
              <p className="mt-2 max-w-xl text-white/90 leading-relaxed">
                Tell us where you want to go, when you want to travel, and how you like to explore.
                We will handle everything else &mdash; and deliver an experience worth talking about.
              </p>
            </div>
          </div>

          <a
            href="/booking"
            className="inline-block self-start whitespace-nowrap rounded-md bg-white px-8 py-4 text-sm font-bold tracking-wide text-safari-ink transition-colors hover:bg-safari-cream lg:self-center"
          >
            LET&apos;S GET STARTED
          </a>
        </div>
      </div>
    </section>
  )
}
