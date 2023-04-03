import { CARD_LOGO } from 'src/utils/constants/sourceFiles'

import { Typography } from '../Typography'
import './Card.styles.scss'

type CardProps = {
  isFlipped?: boolean
  imgUrl?: string
  title?: string
  subtitle?: string
  onClick?: () => void | null
}

export const Card = ({ imgUrl, title, subtitle, isFlipped = false, onClick }: CardProps) => {
  return (
    <div className={`card ${!isFlipped ? 'card-flipped' : 'card-normal'}`} onClick={onClick}>
      {!isFlipped ? (
        <img src={CARD_LOGO} />
      ) : (
        <>
          <img src={imgUrl} className="img-character" />
          <Typography.Text1 text={title} />
          <Typography.Text2 text={subtitle} />
        </>
      )}
    </div>
  )
}
