import { Typography } from 'components/Typography'

import { CARD_LOGO } from 'utils/constants/sourceFiles'

import './Card.styles.scss'

type CardProps = {
  isFlipped?: boolean
  imgUrl?: string
  title?: string
  subtitle?: string
  onClick?: () => void
}

export const Card = ({ imgUrl, title, subtitle, isFlipped = false, onClick }: CardProps) => {
  return (
    <div className={`card ${!isFlipped ? 'card-flipped' : 'card-normal'}`} onClick={onClick}>
      {!isFlipped ? (
        <img src={CARD_LOGO} className="img-character" />
      ) : (
        <>
          <img src={imgUrl} className="img-character" data-testid="image-card" />
          <Typography.Text1 text={title} textID="title-card" />
          <Typography.Text2 text={subtitle} textID="subtitle-card" />
        </>
      )}
    </div>
  )
}
