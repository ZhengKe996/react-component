import React, { CSSProperties, HTMLAttributes, useState, useEffect, MouseEvent } from 'react'
import classNames from 'classnames'
import { CloseOutlined } from '@ant-design/icons'

import './index.scss'

interface TagProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
  closable?: boolean
  color?: string
  visible?: boolean
  onClose?: Function
}

const Tag = (props: TagProps) => {
  const { className, children, closable, color, onClose, style: pstyle, ...others } = props
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if ('visible' in props && typeof props.visible !== 'undefined') {
      setVisible(props.visible)
    }
  }, [props, props.visible])

  const customColor = color && color.match(/^#/)
  const cls = classNames({
    'timu-tag': true,
    [`timu-tag-${color}`]: color && !customColor,
    [className as string]: !!className
  })

  const style: CSSProperties = { ...pstyle }
  if (customColor) {
    style.backgroundColor = color
  }

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    typeof onClose === 'function' && onClose(e)

    if (e.defaultPrevented) {
      return
    }
    if (!('visible' in props)) {
      setVisible(false)
    }
  }

  if (!visible) {
    return null
  }

  return (
    <span {...others} className={cls} style={style}>
      {children}
      {closable ? <CloseOutlined onClick={handleClick} /> : null}
    </span>
  )
}

export default Tag
