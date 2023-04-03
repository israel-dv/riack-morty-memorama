import { HeadingProps } from 'src/utils/types/heading.types'

import './Heading1Styles.scss'

export const Heading1 = ({ text }: HeadingProps) => {
  return <h1 className="heading1">{text}</h1>
}
