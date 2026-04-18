import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aayushsubramaniam.com'),
  title: 'Aayush Subramaniam',
  description:
    'Software engineer, photographer, and traveler based in Buffalo, New York.',
  openGraph: {
    title: 'Aayush Subramaniam',
    description: 'Software engineer, photographer, and traveler.',
    url: 'https://www.aayushsubramaniam.com',
    siteName: 'Aayush Subramaniam',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aayush Subramaniam',
    description: 'Software engineer, photographer, and traveler.',
    images: ['/images/hero.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-bg text-text-primary font-sans" suppressHydrationWarning>{children}</body>
    </html>
  )
}
