import { HeadingProps } from 'src/utils/types/heading.types'

import './Heading2.style.scss'

export const Heading2 = ({ text }: HeadingProps) => {
  return <h2 className="heading2">{text}</h2>
}
