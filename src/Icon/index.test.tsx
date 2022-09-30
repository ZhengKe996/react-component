import React from 'react'
import { render } from '@testing-library/react'
import Icon from './index'

describe('Button', () => {
  test('renders Button', () => {
    const { container } = render(<Icon type="fixed" />)
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
