import React from 'react'

import './CardsContainer.styles.scss'

type CardsContainerProps = {
  children?: React.ReactNode
}

export const CardsContainer: React.FC<CardsContainerProps> = ({ children = null }) => {
  return <div className="cards-container">{children}</div>
}
