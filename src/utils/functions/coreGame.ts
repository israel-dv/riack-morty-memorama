import { MAX_SELECTED_CARDS } from 'utils/constants/homeValues'
import { CharactersProps } from 'utils/types/characters.types'

export const coreGame = (
  cards: CharactersProps[],
  countFlipepdCard: number,
  position: number,
  character: CharactersProps
) => {
  countFlipepdCard += 1
  const cloneCards = [...cards]

  if (countFlipepdCard === MAX_SELECTED_CARDS) {
    cloneCards[position] = { ...character, isFlipped: true }
    return { cloneCards }
  }
}
