// __tests__/components/Hero.test.tsx
import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders name', () => {
    render(<Hero />)
    expect(screen.getByText('Aayush Subramaniam')).toBeInTheDocument()
  })

  it('renders tagline', () => {
    render(<Hero />)
    expect(screen.getByText(/photographer/i)).toBeInTheDocument()
  })

  it('renders scroll-down link to #about', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /scroll down/i })).toHaveAttribute('href', '#about')
  })
})
