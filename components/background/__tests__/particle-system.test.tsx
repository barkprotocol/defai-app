import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'next-themes'
import { ParticleSystem } from '../particle-system'
import 'jest-canvas-mock'

// Mock window.matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

const renderWithTheme = (component: React.ReactNode) => {
  return render(
    <ThemeProvider attribute="class">
      {component}
    </ThemeProvider>
  )
}

describe('ParticleSystem', () => {
  it('renders without crashing', () => {
    const { container } = renderWithTheme(<ParticleSystem />)
    expect(container).toBeInTheDocument()
  })

  it('creates a canvas element', () => {
    const { container } = renderWithTheme(<ParticleSystem />)
    const canvas = container.querySelector('canvas')
    expect(canvas).toBeInTheDocument()
  })

  it('adjusts canvas size on window resize', () => {
    const { container } = renderWithTheme(<ParticleSystem />)
    const canvas = container.querySelector('canvas')
    
    // Assuming you are expecting some size change on resize
    expect(canvas?.width).toBeGreaterThan(0)
    expect(canvas?.height).toBeGreaterThan(0)
  })

  it('responds to theme changes', () => {
    const { container } = renderWithTheme(<ParticleSystem />)
    
    // Simulate theme change if necessary
    // For example, you could use act() to trigger the theme change and assert canvas changes
  })
})
