
import type { Metadata, Viewport } from 'next'
import { Quicksand, Grand_Hotel } from 'next/font/google'
import './globals.css'
import { PostHogProvider } from '@/components/providers/PostHogProvider'
import { GlobalStructuredData } from '@/components/global-structured-data'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['400', '500', '600', '700'],
})

const grandHotel = Grand_Hotel({
  subsets: ['latin'],
  variable: '--font-grand-hotel',
  weight: '400',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.makagracetours.com'),
  title: {
    default: 'Maka Grace Tours and Travel | Premier Kenya Safaris & Holidays',
    template: '%s | Maka Grace Tours and Travel'
  },
  description:
    'Discover the magic of Kenya with Maka Grace Tours and Travel. We offer expert-guided safaris, custom itineraries, and unforgettable adventures across the Maasai Mara, Amboseli, and beyond.',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://www.makagracetours.com',
    siteName: 'Maka Grace Tours and Travel',
    images: [
      {
        url: '/logo-maka-icon.png',
        width: 800,
        height: 600,
        alt: 'Maka Grace Tours and Travel Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maka Grace Tours and Travel | Premier Kenya Safaris & Holidays',
    description: 'Discover the magic of Kenya with Maka Grace Tours and Travel.',
    images: ['/logo-maka-icon.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#166938',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light bg-background ${quicksand.variable} ${grandHotel.variable}`}>
      <body className="font-sans antialiased">
        <PostHogProvider>
          {children}
        </PostHogProvider>
        <GlobalStructuredData />
      </body>
    </html>
  )
}

