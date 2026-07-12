export function QuoteCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0c1a14] via-[#3d4a44] to-[#c9c9c5] py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-script text-2xl text-safari-gold-light md:text-[28px]">Journey Into the Wild</p>
          <h2 className="mt-4 text-balance text-2xl font-bold text-white md:text-3xl">
            Experience Tanzania&apos;s Untamed Beauty With Expert-Guided Safaris.
          </h2>
        </div>
        <div className="flex items-center gap-10">
          <svg
            viewBox="0 0 60 40"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            className="hidden h-10 w-14 lg:block"
            aria-hidden="true"
          >
            <path d="M4 30 C 14 10, 34 8, 44 18 C 50 24, 46 32, 38 30" />
            <path d="M40 24 l-3 7 8 1" />
          </svg>
          <a
            href="#contact"
            className="inline-block whitespace-nowrap rounded-md bg-white px-8 py-4 text-sm font-bold tracking-wide text-safari-ink transition-colors hover:bg-safari-cream"
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </section>
  )
}
