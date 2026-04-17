// src/app/photography/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import PhotographyGrid from '@/components/PhotographyGrid'

export const metadata: Metadata = {
  title: 'Photography — Aayush Subramaniam',
  description: 'Landscape and travel photography shot on a Fujifilm XT4.',
}

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <div className="px-6 md:px-16 lg:px-32 pt-16 pb-10 flex items-center justify-between">
        <Link
          href="/"
          className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm"
        >
          ← Back
        </Link>
        <div className="text-right">
          <h1 className="font-serif text-2xl text-text-primary">Photography</h1>
          <p className="text-text-secondary text-xs mt-1">Shot on a Fujifilm XT4</p>
        </div>
      </div>

      {/* Grid */}
      <PhotographyGrid />

      {/* Footer */}
      <div className="px-6 md:px-16 lg:px-32 py-16 text-center">
        <a
          href="https://unsplash.com/@aayushsubramaniam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm"
        >
          Also on Unsplash →
        </a>
      </div>
    </main>
  )
}
