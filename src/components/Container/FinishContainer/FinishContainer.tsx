import { Typography } from 'components/Typography'

import { CONGRATS, FINISHED_TEXT, TURNS } from 'utils/constants/titles'

import './FinishContainer.styles.scss'

type FinishContainerProps = {
  turns: number
}

export const FinishContainer = ({ turns }: FinishContainerProps) => {
  return (
    <div className="end-game-container">
      <Typography.Heading1 text={CONGRATS} />
      <Typography.Heading2 text={`${FINISHED_TEXT}${turns} ${TURNS.toLowerCase()}`} />
    </div>
  )
}
