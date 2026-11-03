'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen bg-safari-cream text-safari-ink">
        <main className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
          <button
            onClick={() => reset()}
            className="rounded-md bg-safari-green px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  )
}
