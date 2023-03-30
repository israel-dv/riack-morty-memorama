import { Fragment } from 'react'

import { Heading1 } from './Heading1'
import { Heading2 } from './Heading2'
import { Text1 } from './Text1'
import { Text2 } from './Text2/Text2'

type TypographyProps = {
  children: React.ReactNode
}

export const Typography = ({ children }: TypographyProps): React.ReactElement => {
  return <Fragment key={'typography'}>{children}</Fragment>
}

Typography.Heading1 = Heading1
Typography.Heading2 = Heading2
Typography.Text1 = Text1
Typography.Text2 = Text2
