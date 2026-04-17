// __tests__/components/Nav.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('hamburger button has aria-expanded=false by default', () => {
    render(<Nav />)
    const button = screen.getByRole('button', { name: /open menu/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('clicking hamburger opens mobile overlay', async () => {
    const user = userEvent.setup()
    render(<Nav />)
    const button = screen.getByRole('button', { name: /open menu/i })
    await user.click(button)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('pressing Escape closes mobile overlay', async () => {
    const user = userEvent.setup()
    render(<Nav />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
