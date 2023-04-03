import { HeadingProps } from 'utils/types/heading.types'

import './Text2.styles.scss'

export const Text2 = ({ text }: HeadingProps) => {
  return <span className="text2">{text}</span>
}
