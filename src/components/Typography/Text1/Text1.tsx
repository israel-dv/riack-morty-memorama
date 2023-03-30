import React from 'react'

import { HeadingProps } from 'src/utils/types/heading.types'

import './Text1.styles.scss'

export const Text1: React.FC<HeadingProps> = ({ text }) => {
  return <span className="text1">{text}</span>
}
