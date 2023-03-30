import React from 'react'

import { HeadingProps } from 'src/utils/types/heading.types'

import './Heading1Styles.scss'

export const Heading1: React.FC<HeadingProps> = ({ text }) => {
  return <h1 className="heading1">{text}</h1>
}
