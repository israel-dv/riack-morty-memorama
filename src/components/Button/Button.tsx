import React from 'react'

import { Typography } from '../Typography'
import './Button.styles.scss'

type ButtonProps = {
  type?: 'play' | 'repeat' | 'start'
  onClick?: () => void
}

const BUTTON_TITLE = {
  play: 'Jugar',
  repeat: 'Repetir',
  start: 'Iniciar',
}

export const Button: React.FC<ButtonProps> = ({ type = 'play', onClick }) => {
  return (
    <button className={`btn-game ${type}`} onClick={onClick}>
      <Typography.Heading2 text={BUTTON_TITLE[type]} />
    </button>
  )
}
