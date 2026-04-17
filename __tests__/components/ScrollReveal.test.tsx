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
})
