import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './index'

test('renders Button', () => {
  render(<Button type="normal">click me</Button>)
  const linkElement = screen.getByText(/click me/)
  expect(linkElement).toBeInTheDocument()
})
