import { Button } from 'components/Button'

import './ButtonContainer.styles.scss'

type ButtonContainerProps = {
  isGameFinished: boolean
  isGameActive: boolean
  onRepeat: () => void
  onStart: () => void
  onPlay: () => void
}

export const ButtonContainer = ({
  isGameActive,
  isGameFinished,
  onRepeat,
  onStart,
  onPlay,
}: ButtonContainerProps) => {
  if (isGameActive) return null

  return (
    <div className="btn-container">
      {isGameFinished ? (
        <>
          <Button type="repeat" onClick={onRepeat} />
          <Button type="start" onClick={onStart} />
        </>
      ) : (
        <Button type="play" onClick={onPlay} />
      )}
    </div>
  )
}
