'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Photography', href: '#photography' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop nav — fades in after scrolling past hero */}
      <nav
        className={`
          hidden md:flex fixed top-0 left-0 right-0 z-50
          items-center justify-center gap-10 py-4 px-8
          transition-all duration-500
          ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        style={{ background: 'rgba(13,13,13,0.85)', backdropFilter: 'blur(8px)' }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger — always visible */}
      <div className="md:hidden fixed top-0 right-0 z-50 p-5">
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex flex-col gap-[5px] p-2"
        >
          <span className="block w-5 h-[1.5px] bg-text-primary" />
          <span className="block w-5 h-[1.5px] bg-text-primary" />
          <span className="block w-5 h-[1.5px] bg-text-primary" />
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-bg flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-5 right-5 p-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <span className="text-2xl">✕</span>
          </button>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl tracking-widest uppercase text-text-primary hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
