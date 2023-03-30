import React from 'react'

import './Card.styles.scss'

type CardProps = {
  isFlipped?: boolean
  imgUrl?: string
  title?: string
  subtitle?: string
}

export const Card: React.FC<CardProps> = ({ imgUrl, title, subtitle, isFlipped = false }) => {
  return (
    <div className={`card ${!isFlipped ? 'card-flipped' : ''}`}>
      {!isFlipped ? (
        <img src="/public/images/card.png" />
      ) : (
        <>
          <span>{title}</span>
          <span>{subtitle}</span>
        </>
      )}
    </div>
  )
}
