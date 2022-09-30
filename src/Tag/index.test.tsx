import React from 'react'
import { render, screen } from '@testing-library/react'

import Tag from './index'
describe('Button', () => {
  test('renders Tag', () => {
    render(<Tag>click me</Tag>)
    const linkElement = screen.getByText(/click me/i)
    expect(linkElement).toBeInTheDocument()
  })
})
