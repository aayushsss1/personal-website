import { render, screen } from '@testing-library/react'
import PhotographyGrid from '@/components/PhotographyGrid'

jest.mock('@/data/photos.json', () => [
  { filename: 'shot1.jpg', alt: 'Shot 1', orientation: 'landscape', featured: true },
  { filename: 'shot2.jpg', alt: 'Shot 2', orientation: 'portrait', featured: false },
])

describe('PhotographyGrid', () => {
  it('renders an image for each photo', () => {
    render(<PhotographyGrid />)
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })

  it('uses alt text from data', () => {
    render(<PhotographyGrid />)
    expect(screen.getByAltText('Shot 1')).toBeInTheDocument()
    expect(screen.getByAltText('Shot 2')).toBeInTheDocument()
  })
})
