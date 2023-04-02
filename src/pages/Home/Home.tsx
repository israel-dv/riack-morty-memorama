import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'

import { GET_CHARACTERS } from 'src/api/queries/getCharacters.query'
import { Button } from 'src/components/Button'
import { Card } from 'src/components/Card'
import { CardsContainer } from 'src/components/Container/CardsContainer'
import { GameContainer } from 'src/components/Container/GameContainer'
import { Header } from 'src/components/Header'
import { Typography } from 'src/components/Typography'
import { CHARACTERS, HITS, TURNS } from 'src/utils/constants/titles'
import { randomNumbers } from 'src/utils/functions/randomNumber'
import { CharactersProps } from 'src/utils/types/characters.types'

import './Home.styles.scss'

// const randomIDS = randomNumbers(6).map(String)
const MAX_SELECTED_CARDS = 2
const MIN_SELECTED_CARDS = 1
const INITAL_HITS = 0
const INITIAL_TURNS = 0
const INITIAL_FLIPPED_CARDS = 0
const CHAR_INITIAL = {
  name: '',
  status: '',
  species: '',
  image: '',
  isFlipped: false,
  isMatched: false,
  indexID: 0,
}

export const Home = (): React.ReactElement => {
  const [isGameActive, setIsGameActive] = useState<boolean>(false)
  const [hits, setHits] = useState<number>(INITAL_HITS)
  const [turns, setTurns] = useState<number>(INITIAL_TURNS)
  const [flippedCards, setFlippedCards] = useState<number>(INITIAL_FLIPPED_CARDS)
  const [characters, setCharacters] = useState<CharactersProps[]>([])
  const [firstCardSelected, setFirstCardSelected] = useState<CharactersProps>(CHAR_INITIAL)

  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: {
      ids: ['195', '690', '238', '353', '530', '6'],
    },
  })

  const isCardUnblock = isGameActive && flippedCards !== MAX_SELECTED_CARDS

  console.log({ isCardUnblock, flippedCards })

  useEffect(() => {
    if (data) {
      const { charactersByIds } = data
      if (charactersByIds) {
        const combineCharacters = [...charactersByIds, ...charactersByIds]
        const setCharactersProps = combineCharacters.map((character, indexID) => ({
          ...character,
          isFlipped: true,
          isMatched: false,
          indexID,
        }))
        setCharacters([...setCharactersProps])
      }
    }
  }, [data])

  const handleFlippedCard = (character: CharactersProps, position: number) => {
    const countFlippedCard = flippedCards + 1
    const cloneCards = [...characters]

    if (countFlippedCard === MIN_SELECTED_CARDS) {
      cloneCards[position] = { ...character, isFlipped: true }
      setFirstCardSelected(cloneCards[position])
      setCharacters(cloneCards)
      setFlippedCards((flippedCard) => flippedCard + 1)
    }
    if (countFlippedCard === MAX_SELECTED_CARDS) {
      if (character.indexID === firstCardSelected.indexID) return
      cloneCards[position] = { ...character, isFlipped: true }
      setCharacters(cloneCards)
      setFlippedCards((flippedCard) => flippedCard + 1)
      // if (character.indexID === firstCardSelected.indexID) {
      // return
      // cloneCards[position] = { ...character, isFlipped: false }
      // cloneCards[firstCardSelected.indexID] = { ...character, isFlipped: false }
      // setFirstCardSelected(CHAR_INITIAL)
      // setCharacters(cloneCards)
      // }
      if (firstCardSelected?.name === character.name) {
        cloneCards[firstCardSelected.indexID] = {
          ...firstCardSelected,
          isMatched: true,
          isFlipped: true,
        }
        cloneCards[position] = { ...character, isMatched: true, isFlipped: true }
        setTurns((turn) => turn + 1)
        setHits((hit) => hit + 1)
        setCharacters(cloneCards)
        setFlippedCards(0)
      } else {
        const revertCards = cloneCards.map((cloneChar) => {
          if (cloneChar.isMatched) return cloneChar
          return { ...cloneChar, isFlipped: false }
        })
        setTurns((turn) => turn + 1)
        setTimeout(() => {
          setCharacters(revertCards)
          setFlippedCards(0)
        }, 2000)
      }
    }
  }

  const handlePlay = () => {
    const flippedCards = characters.map((character) => ({ ...character, isFlipped: false }))
    setCharacters(flippedCards)
    setIsGameActive((isActive) => !isActive)
  }

  return (
    <>
      <Header />
      <main className="main-content">
        <GameContainer>
          <div className="title-container">
            {isGameActive ? (
              <>
                <Typography.Heading2 text={`${HITS}: ${hits}`} />
                <Typography.Heading2 text={`${TURNS}: ${turns}`} />
              </>
            ) : (
              <Typography.Heading2 text={CHARACTERS} />
            )}
          </div>
          <CardsContainer>
            {loading ? (
              <div>Loading</div>
            ) : (
              characters.map((character, position) => (
                <Card
                  key={`${character.name}-${position}`}
                  imgUrl={character.image}
                  title={character.name}
                  subtitle={`${character.status} - ${character.species}`}
                  isFlipped={character.isFlipped}
                  onClick={
                    isCardUnblock && !character.isMatched
                      ? () => handleFlippedCard(character, position)
                      : null
                  }
                />
              ))
            )}
          </CardsContainer>
          <div className="btn-container">
            <Button onClick={handlePlay} />
          </div>
        </GameContainer>
      </main>
    </>
  )
}
