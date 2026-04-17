// __tests__/components/Nav.test.tsx
import { render, screen } from '@testing-library/react'
import Nav from '@/components/Nav'

describe('Nav', () => {
  it('renders all four nav links', () => {
    render(<Nav />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('links point to correct anchors', () => {
    render(<Nav />)
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '#about')
    expect(screen.getByText('Work').closest('a')).toHaveAttribute('href', '#work')
    expect(screen.getByText('Photography').closest('a')).toHaveAttribute('href', '#photography')
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#contact')
  })
})
