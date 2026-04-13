// jest.setup.ts
import '@testing-library/jest-dom'

// Mock IntersectionObserver (not available in jsdom)
global.IntersectionObserver = jest.fn((_callback, _options) => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
  takeRecords: jest.fn(() => []),
})) as unknown as typeof IntersectionObserver

// Mock next/image to render a plain <img> (avoids jsdom image processing issues)
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />
  },
}))
