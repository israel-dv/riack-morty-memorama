import React from 'react'

import './GameContainerStyles.scss'

type GameContainerProps = {
  children: React.ReactNode
}

export const GameContainer: React.FC<GameContainerProps> = ({ children }) => {
  return <div className="game-container">{children}</div>
}
