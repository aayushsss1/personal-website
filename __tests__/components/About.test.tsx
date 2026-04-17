import { render, screen } from '@testing-library/react'
import About from '@/components/About'

describe('About', () => {
  it('renders section with id="about"', () => {
    render(<About />)
    expect(document.getElementById('about')).toBeInTheDocument()
  })

  it('renders bio text', () => {
    render(<About />)
    expect(screen.getByText(/I'm Aayush/i)).toBeInTheDocument()
  })

  it('renders two photos', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
