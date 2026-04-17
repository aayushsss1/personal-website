import { render, screen } from '@testing-library/react'
import Skills from '@/components/Skills'

jest.mock('@/data/skills.json', () => ({
  frameworks: ['React', 'PyTorch'],
  softSkills: ['Leadership', 'Creativity'],
}))

describe('Skills', () => {
  it('renders frameworks', () => {
    render(<Skills />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('PyTorch')).toBeInTheDocument()
  })

  it('renders soft skills', () => {
    render(<Skills />)
    expect(screen.getByText('Leadership')).toBeInTheDocument()
  })
})
