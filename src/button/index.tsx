import React, { ReactNode } from 'react'
import classNames from 'classnames'
import './index.css'

interface ButtonProps {
  className?: string
  type: 'normal' | 'primary'
  children?: ReactNode
}

const Button = (props: ButtonProps) => {
  const { className, type, children } = props
  const cls = classNames({
    'in-hzpt-btn': true,
    [`in-hzpt-button-${type}`]: type,
    [className as string]: !!className
  })
  return <button className={cls}>{children}</button>
}

export default Button
