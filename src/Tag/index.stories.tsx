import React from 'react'
import { ComponentMeta } from '@storybook/react'

import Tag from './index'

export default {
  title: 'Example/Tag',
  component: Tag
} as ComponentMeta<typeof Tag>

function log(e: any) {
  console.log(e)
}

function preventDefault(e: any) {
  e.preventDefault()
  console.log('Clicked! But prevent default.')
}

export const Basic = () => {
  return (
    <>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href="https://fanzhengke.top">Link</a>
      </Tag>
      <Tag closable onClose={log}>
        Tag 2
      </Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
      <Tag visible={false} closable>
        Tag 3
      </Tag>
    </>
  )
}

export const Color = () => {
  return (
    <>
      <div>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
      </div>

      <div style={{ marginTop: 10 }}>
        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </div>
    </>
  )
}
