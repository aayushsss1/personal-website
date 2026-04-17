export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{ height: '100dvh' }}
      aria-labelledby="hero-heading"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.55)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 id="hero-heading" className="font-serif text-5xl md:text-7xl text-text-primary mb-4">
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
