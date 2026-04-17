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

  it('renders two photos with distinct alt text', () => {
    render(<About />)
    expect(screen.getByAltText('Aayush in an open landscape')).toBeInTheDocument()
    expect(screen.getByAltText('Aayush looking out at a mountain vista')).toBeInTheDocument()
  })
})
