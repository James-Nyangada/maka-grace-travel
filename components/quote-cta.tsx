export function QuoteCta() {
  return (
    <section className="relative overflow-hidden bg-[url('/images/safari-parallax-bg.png')] bg-fixed bg-cover bg-center py-16 before:absolute before:inset-0 before:bg-black/60">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-lg">
          <p className="font-script text-2xl text-safari-gold-light md:text-[28px]">Journey Into the Wild</p>
          <h2 className="mt-4 text-balance text-2xl font-bold text-white md:text-3xl">
            Experience Kenya&apos;s Untamed Beauty With Expert-Guided Safaris.
          </h2>
        </div>
        <div className="hidden max-w-md lg:block">
          <p className="text-sm leading-relaxed text-white/90">
            From the iconic Maasai Mara wildebeest migration to the snow-capped peaks of Mount Kenya &mdash; every landscape tells a story. Let Maka Grace Tours and Travel be your guide through the wild, the beautiful, and the extraordinary.
            <br /><br />
            We handle every detail &mdash; from accommodation and transport to park permits and guided game drives &mdash; so all you have to do is arrive and be amazed.
          </p>
        </div>
        <div className="flex items-center gap-10">
          <a
            href="/contact"
            className="inline-block whitespace-nowrap rounded-md bg-white px-8 py-4 text-sm font-bold tracking-wide text-safari-ink transition-colors hover:bg-safari-cream"
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </section>
  )
}
