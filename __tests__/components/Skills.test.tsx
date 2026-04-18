import { render, screen } from '@testing-library/react'
import Skills from '@/components/Skills'

jest.mock('@/data/skills.json', () => ({
  languages: ['Python', 'Go'],
  aiAndML: ['PyTorch', 'LangChain'],
  cloudAndDevOps: ['AWS', 'Kubernetes'],
  dataScience: ['Pandas', 'NumPy'],
  softSkills: ['Leadership', 'Creativity'],
}))

describe('Skills', () => {
  it('renders languages', () => {
    render(<Skills />)
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('Go')).toBeInTheDocument()
  })

  it('renders AI & ML skills', () => {
    render(<Skills />)
    expect(screen.getByText('PyTorch')).toBeInTheDocument()
    expect(screen.getByText('LangChain')).toBeInTheDocument()
  })

  it('renders cloud & devops skills', () => {
    render(<Skills />)
    expect(screen.getByText('AWS')).toBeInTheDocument()
    expect(screen.getByText('Kubernetes')).toBeInTheDocument()
  })

  it('renders soft skills', () => {
    render(<Skills />)
    expect(screen.getByText('Leadership')).toBeInTheDocument()
  })
})
