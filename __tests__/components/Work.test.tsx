import { render, screen } from '@testing-library/react'
import Work from '@/components/Work'

jest.mock('@/data/projects.json', () => [
  { name: 'Test Project', description: 'A test', tags: ['React'], url: 'https://example.com', featured: true },
])
jest.mock('@/data/writing.json', () => [
  { title: 'Test Paper', description: 'A paper', url: 'https://example.com' },
])

describe('Work', () => {
  it('renders section with id="work"', () => {
    render(<Work />)
    expect(document.getElementById('work')).toBeInTheDocument()
  })

  it('renders a project name', () => {
    render(<Work />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders a writing item', () => {
    render(<Work />)
    expect(screen.getByText('Test Paper')).toBeInTheDocument()
  })

  it('project name is a link', () => {
    render(<Work />)
    expect(screen.getByText('Test Project').closest('a')).toHaveAttribute('href', 'https://example.com')
  })
})
