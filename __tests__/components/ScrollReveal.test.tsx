// __tests__/components/ScrollReveal.test.tsx
import { render, screen } from '@testing-library/react'
import ScrollReveal from '@/components/ScrollReveal'

describe('ScrollReveal', () => {
  it('renders children', () => {
    render(<ScrollReveal><p>hello</p></ScrollReveal>)
    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('applies reveal class to wrapper', () => {
    const { container } = render(<ScrollReveal><p>test</p></ScrollReveal>)
    expect(container.firstChild).toHaveClass('reveal')
  })

  it('applies reveal-delay-2 class when delay=2', () => {
    const { container } = render(<ScrollReveal delay={2}><p>test</p></ScrollReveal>)
    expect(container.firstChild).toHaveClass('reveal-delay-2')
  })

  it('does not apply any reveal-delay class when no delay', () => {
    const { container } = render(<ScrollReveal><p>test</p></ScrollReveal>)
    expect(container.firstChild).not.toHaveClass('reveal-delay-1')
    expect(container.firstChild).not.toHaveClass('reveal-delay-2')
  })
})
