import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-safari-cream text-safari-ink">
      <h1 className="text-4xl font-display font-bold mb-4">Page Not Found</h1>
      <p className="mb-8">Could not find requested resource</p>
      <Link href="/" className="bg-safari-green text-white px-6 py-3 rounded-full hover:bg-safari-green-dark transition-colors">
        Return Home
      </Link>
    </main>
  )
}
