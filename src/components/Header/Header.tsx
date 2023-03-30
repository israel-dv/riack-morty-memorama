import React from 'react'

import { APP_LOGO } from 'src/utils/constants/sourceFiles'

import './HeaderStyles.scss'

const TITLE = 'Juego de memoria'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={APP_LOGO} alt="logo-memorama" className="logo" />
      <div className="title-game">
        <span>{TITLE}</span>
      </div>
    </header>
  )
}
