import { Typography } from 'components/Typography'

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

export const Button = ({ type = 'play', onClick }: ButtonProps): JSX.Element => {
  return (
    <button className={`btn-game ${type}`} onClick={onClick}>
      <Typography.Heading2 text={BUTTON_TITLE[type]} />
    </button>
  )
}
