import React from 'react'

import { HeadingProps } from '@memorama/utils/types/heading.types'

import './Heading2.style.scss'

export const Heading2: React.FC<HeadingProps> = ({ text }) => {
  return <h2 className="heading2">{text}</h2>
}
