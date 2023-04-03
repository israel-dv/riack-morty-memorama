import { Typography } from 'components/Typography'

import './FinishContainer.styles.scss'

type FinishContainerProps = {
  turns: number
}

export const FinishContainer = ({ turns }: FinishContainerProps) => {
  return (
    <div className="end-game-container">
      <Typography.Heading1 text="¡Felicitaciones!" />
      <Typography.Heading2 text={`Terminaste el juego con ${turns} turnos`} />
    </div>
  )
}
