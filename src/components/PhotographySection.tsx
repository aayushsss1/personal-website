// src/components/PhotographySection.tsx
import Image from 'next/image'
import Link from 'next/link'
import photos from '@/data/photos.json'
import { Photo } from '@/types'
import ScrollReveal from './ScrollReveal'

const featured = (photos as Photo[]).filter((p) => p.featured).slice(0, 3)

export default function PhotographySection() {
  const [top, ...bottom] = featured

  return (
    <section id="photography" className="px-6 md:px-16 lg:px-32 py-24 md:py-36">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-2">
            Photography
          </h2>
          <p className="text-text-secondary text-sm mb-12">Shot on a Fujifilm XT4</p>
        </ScrollReveal>

        {/* Top: full-width landscape */}
        <ScrollReveal>
          <div className="relative w-full h-[320px] md:h-[480px] mb-3 overflow-hidden">
            <Image
              src={`/images/photography/${top.filename}`}
              alt={top.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </ScrollReveal>

        {/* Bottom: two side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          {bottom.map((photo, i) => (
            <ScrollReveal key={photo.filename} delay={(i + 1) as 1 | 2}>
              <div className="relative w-full h-[240px] md:h-[320px] overflow-hidden">
                <Image
                  src={`/images/photography/${photo.filename}`}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Links */}
        <ScrollReveal>
          <div className="flex gap-8">
            <Link
              href="/photography"
              className="text-text-primary hover:text-accent transition-colors duration-200 text-sm"
            >
              View full gallery →
            </Link>
            <a
              href="https://unsplash.com/@aayushsubramaniam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm"
            >
              Also on Unsplash →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
