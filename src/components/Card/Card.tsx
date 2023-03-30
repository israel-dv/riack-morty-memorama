import React from 'react'

import { CARD_LOGO } from 'src/utils/constants/sourceFiles'

import { Typography } from '../Typography'
import './Card.styles.scss'

type CardProps = {
  isFlipped?: boolean
  imgUrl?: string
  title?: string
  subtitle?: string
}

export const Card: React.FC<CardProps> = ({ imgUrl, title, subtitle, isFlipped = false }) => {
  return (
    <div className={`card ${!isFlipped ? 'card-flipped' : 'card-normal'}`}>
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
