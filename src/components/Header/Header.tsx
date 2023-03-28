import React from 'react'

import './HeaderStyles.scss'

const TITLE = 'Juego de memoria'
const IMAGE_SOURCE = '/public/images/ricky_morty_logo.png'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={IMAGE_SOURCE} alt="logo-memorama" className="logo" />
      <div className="title-game">
        <span>{TITLE}</span>
      </div>
    </header>
  )
}
