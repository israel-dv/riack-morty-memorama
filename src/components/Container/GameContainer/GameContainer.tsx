import React from 'react'

import './GameContainer.styles.scss'

type GameContainerProps = {
  children: React.ReactNode
}

export const GameContainer = ({ children }: GameContainerProps) => {
  return <div className="game-container">{children}</div>
}
