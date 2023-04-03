import React from 'react'

import './GameContainerStyles.scss'

type GameContainerProps = {
  children: React.ReactNode
}

export const GameContainer = ({ children }: GameContainerProps) => {
  return <div className="game-container">{children}</div>
}
