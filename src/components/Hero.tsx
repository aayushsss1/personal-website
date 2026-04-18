'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '100dvh' }}
      aria-labelledby="hero-heading"
    >
      {/* Background photo — moves slower than scroll (parallax) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          transform: `scale(1.1) translateY(${scrollY * 0.25}px)`,
        }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.5)' }}
        aria-hidden="true"
      />

      {/* Content — floats slightly against scroll */}
      <div
        className="relative z-10 text-center px-6"
        style={{ transform: `translateY(${-scrollY * 0.12}px)` }}
      >
        <h1
          id="hero-heading"
          className="font-serif text-5xl md:text-7xl text-text-primary mb-4"
        >
          Aayush Subramaniam
        </h1>
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-text-secondary">
          photographer&nbsp;·&nbsp;builder&nbsp;·&nbsp;traveler
        </p>
      </div>

      {/* Scroll chevron */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary hover:text-text-primary transition-colors animate-bounce"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 7l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}
