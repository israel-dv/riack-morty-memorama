import React from 'react'

import './HeaderStyles.scss'

const TITLE = 'Juego de memoria'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img src="/public/images/ricky_morty_logo.png" alt="logo-memorama" className="logo" />
      <div className="title-game">
        <span>{TITLE}</span>
      </div>
    </header>
  )
}
