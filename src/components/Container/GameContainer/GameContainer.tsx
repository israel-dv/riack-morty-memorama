import { Typography } from 'components/Typography'

import { CHARACTERS, HITS, TURNS } from 'utils/constants/titles'

import './GameContainer.styles.scss'

type GameContainerProps = {
  children: React.ReactNode
  isGameActive: boolean
  hits: number
  turns: number
}

export const GameContainer = ({ children, isGameActive, hits, turns }: GameContainerProps) => {
  return (
    <div className="game-container">
      {isGameActive ? (
        <div className="titles">
          <Typography.Heading2 text={`${HITS}: ${hits}`} />
          <Typography.Heading2 text={`${TURNS}: ${turns}`} />
        </div>
      ) : (
        <Typography.Heading2 text={CHARACTERS} />
      )}
      {children}
    </div>
  )
}
