import React, { ReactNode, CSSProperties } from 'react'
import classNames from 'classnames'
import './index.css'

interface ButtonProps {
  className?: string
  type: 'normal' | 'primary' | 'dashed' | 'text' | 'link'
  style?: CSSProperties
  children?: ReactNode
}

const Button = (props: ButtonProps) => {
  const { className, type, children, style } = props
  const cls = classNames({
    'timu-btn': true,
    [`timu-btn-${type}`]: type,
    [className as string]: !!className
  })
  return (
    <button className={cls} style={style}>
      {children}
    </button>
  )
}

export default Button
