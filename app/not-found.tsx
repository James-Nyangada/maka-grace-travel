import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-safari-cream text-safari-ink">
      <h2 className="text-4xl font-display font-bold mb-4">Not Found</h2>
      <p className="mb-8">Could not find requested resource</p>
      <Link href="/" className="bg-safari-green text-white px-6 py-3 rounded-full hover:bg-safari-green-dark transition-colors">
        Return Home
      </Link>
    </div>
  )
}
