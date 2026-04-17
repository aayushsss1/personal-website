import { render, screen } from '@testing-library/react'
import Contact from '@/components/Contact'

describe('Contact', () => {
  it('renders section with id="contact"', () => {
    render(<Contact />)
    expect(document.getElementById('contact')).toBeInTheDocument()
  })

  it('renders email as mailto link', () => {
    render(<Contact />)
    const emailLink = screen.getByText(/aayushsubramaniam@gmail.com/i)
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:aayushsubramaniam@gmail.com')
  })

  it('renders GitHub link', () => {
    render(<Contact />)
    expect(screen.getByText(/github/i).closest('a')).toHaveAttribute(
      'href',
      'https://github.com/aayushsss1'
    )
  })
})
