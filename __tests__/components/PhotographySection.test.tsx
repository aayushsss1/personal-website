import { render, screen } from '@testing-library/react'
import PhotographySection from '@/components/PhotographySection'

jest.mock('@/data/photos.json', () => [
  { filename: 'wide.jpg', alt: 'Wide shot', orientation: 'landscape', featured: true },
  { filename: 'side1.jpg', alt: 'Side 1', orientation: 'landscape', featured: true },
  { filename: 'side2.jpg', alt: 'Side 2', orientation: 'landscape', featured: true },
  { filename: 'extra.jpg', alt: 'Extra', orientation: 'landscape', featured: false },
])

describe('PhotographySection', () => {
  it('renders section with id="photography"', () => {
    render(<PhotographySection />)
    expect(document.getElementById('photography')).toBeInTheDocument()
  })

  it('renders Photography heading', () => {
    render(<PhotographySection />)
    expect(screen.getByText('Photography')).toBeInTheDocument()
  })

  it('renders link to /photography', () => {
    render(<PhotographySection />)
    expect(screen.getByText(/View full gallery/i).closest('a')).toHaveAttribute('href', '/photography')
  })

  it('renders link to Unsplash', () => {
    render(<PhotographySection />)
    const unsplashLink = screen.getByText(/Unsplash/i).closest('a')
    expect(unsplashLink).toHaveAttribute('href', expect.stringContaining('unsplash.com'))
  })

  it('renders exactly 3 featured photos', () => {
    render(<PhotographySection />)
    const imgs = screen.getAllByRole('img')
    expect(imgs).toHaveLength(3)
  })
})
