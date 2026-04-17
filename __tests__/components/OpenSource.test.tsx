import { render, screen } from '@testing-library/react'
import OpenSource from '@/components/OpenSource'

jest.mock('@/data/oss.json', () => [
  {
    repo: 'test-repo',
    prs: [
      { number: 1, title: 'Fix bug', url: 'https://github.com/test/1', status: 'Merged' },
      { number: 2, title: 'Add feature', url: 'https://github.com/test/2', status: 'Open' },
    ],
  },
])

describe('OpenSource', () => {
  it('renders repo name', () => {
    render(<OpenSource />)
    expect(screen.getByText('test-repo')).toBeInTheDocument()
  })

  it('renders PR titles', () => {
    render(<OpenSource />)
    expect(screen.getByText(/Fix bug/)).toBeInTheDocument()
    expect(screen.getByText(/Add feature/)).toBeInTheDocument()
  })

  it('renders Merged badge', () => {
    render(<OpenSource />)
    expect(screen.getByText('Merged')).toBeInTheDocument()
  })

  it('renders Open badge', () => {
    render(<OpenSource />)
    expect(screen.getByText('Open')).toBeInTheDocument()
  })
})
