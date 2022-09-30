import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './index'

describe('Button', () => {
  test('renders Button', () => {
    render(
      <Button type="normal" size="medium">
        click me
      </Button>
    )
    const linkElement = screen.getByText(/click me/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('renders primary Button', () => {
    const { container } = render(<Button type="primary">click me</Button>)

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('.timu-btn-primary')).toBeInTheDocument()
  })

  test('renders small Button', () => {
    const { container } = render(<Button size="small">click me</Button>)

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('.timu-btn-small')).toBeInTheDocument()
  })
  test('renders large Button', () => {
    const { container } = render(<Button size="large">click me</Button>)

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('.timu-btn-large')).toBeInTheDocument()
  })

  test('should support click', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>click me</Button>)

    const linkElement = screen.getByText(/click me/i)
    fireEvent.click(linkElement)
    expect(onClick).toBeCalled()
  })

  test('should support blur', () => {
    const onBlur = jest.fn()
    render(<Button onBlur={onBlur}>click me</Button>)

    const linkElement = screen.getByText(/click me/i)
    fireEvent.blur(linkElement)
    expect(onBlur).toBeCalled()
  })

  test('should support onMouseOver', () => {
    const onMouseOver = jest.fn()
    render(<Button onMouseOver={onMouseOver}>click me</Button>)

    const linkElement = screen.getByText(/click me/i)
    fireEvent.mouseOver(linkElement)
    expect(onMouseOver).toBeCalled()
  })

  test('should support onFocus', () => {
    const onFocus = jest.fn()
    render(<Button onFocus={onFocus}>click me</Button>)

    const linkElement = screen.getByText(/click me/i)
    fireEvent.focus(linkElement)
    expect(onFocus).toBeCalled()
  })
})
