import { HeadingProps } from 'utils/types/heading.types'

import './Text2.styles.scss'

export const Text2 = ({ text, textID }: HeadingProps) => {
  return (
    <span className="text2" data-testid={textID}>
      {text}
    </span>
  )
}
