import React from 'react'

import { HeadingProps } from 'src/utils/types/heading.types'

import './Text2.styles.scss'

export const Text2: React.FC<HeadingProps> = ({ text }) => {
  return <span className="text2">{text}</span>
}
