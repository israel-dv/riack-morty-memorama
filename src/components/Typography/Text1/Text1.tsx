import { HeadingProps } from 'utils/types/heading.types'

import './Text1.styles.scss'

export const Text1 = ({ text }: HeadingProps) => {
  return <span className="text1">{text}</span>
}
