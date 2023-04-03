import { HeadingProps } from 'utils/types/heading.types'

import './Heading1.styles.scss'

export const Heading1 = ({ text }: HeadingProps) => {
  return <h1 className="heading1">{text}</h1>
}
