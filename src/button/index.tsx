import React, { ReactNode, CSSProperties, HTMLAttributes } from 'react'
import classNames from 'classnames'
import './index.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
  type?: 'normal' | 'primary' | 'dashed' | 'text' | 'link'
  size?: 'small' | 'medium' | 'large'
  style?: CSSProperties
  children?: ReactNode
}

const Button = (props: ButtonProps) => {
  const { className, type = 'normal', size = 'medium', children, style, ...other } = props
  const cls = classNames({
    'timu-btn': true,
    [`timu-btn-${type}`]: type,
    [`timu-btn-${size}`]: size,
    [className as string]: !!className
  })
  return (
    <button className={cls} style={style} {...other}>
      {children}
    </button>
  )
}

export default Button
