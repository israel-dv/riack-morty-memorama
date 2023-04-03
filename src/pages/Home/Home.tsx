import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'

import { GET_CHARACTERS } from 'src/api/queries/getCharacters.query'
import { Button } from 'src/components/Button'
import { Card } from 'src/components/Card'
import { CardsContainer } from 'src/components/Container/CardsContainer'
import { GameContainer } from 'src/components/Container/GameContainer'
import { Header } from 'src/components/Header'
import { Typography } from 'src/components/Typography'
import {
  CHAR_INITIAL,
  HITS_TO_WIN,
  INITAL_HITS,
  INITIAL_FLIPPED_CARDS,
  INITIAL_TURNS,
  MAX_SELECTED_CARDS,
  MIN_SELECTED_CARDS,
} from 'src/utils/constants/homeValues'
import { CHARACTERS, HITS, TURNS } from 'src/utils/constants/titles'
import { randomNumbers } from 'src/utils/functions/randomNumber'
import { suffle } from 'src/utils/functions/suffleCards'
import { CharactersProps } from 'src/utils/types/characters.types'

import './Home.styles.scss'

export const Home = (): React.ReactElement => {
  const [randomIDS, setRandomIDS] = useState<string[]>(randomNumbers(6).map(String))
  const [isGameActive, setIsGameActive] = useState<boolean>(false)
  const [hits, setHits] = useState<number>(INITAL_HITS)
  const [turns, setTurns] = useState<number>(INITIAL_TURNS)
  const [flippedCards, setFlippedCards] = useState<number>(INITIAL_FLIPPED_CARDS)
  const [characters, setCharacters] = useState<CharactersProps[]>([])
  const [firstCardSelected, setFirstCardSelected] = useState<CharactersProps>(CHAR_INITIAL)

  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: {
      ids: randomIDS,
    },
  })

  const isCardUnblock = isGameActive && flippedCards !== MAX_SELECTED_CARDS
  const isGameFinished = hits === HITS_TO_WIN

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

  useEffect(() => {
    if (hits === HITS_TO_WIN) setIsGameActive(false)
  }, [hits])

  const handlePlay = () => {
    const sufflingCards = suffle(characters)
    setCharacters([...sufflingCards])
    setTimeout(() => {
      const flippedCards = sufflingCards.map((character, indexID) => ({
        ...character,
        isFlipped: false,
        indexID,
      }))
      setCharacters([...flippedCards])
      setIsGameActive((isActive) => !isActive)
    }, 3000)
  }

  const handleRepeat = () => {
    const revertCards = characters.map((character) => ({
      ...character,
      isFlipped: false,
      isMatched: false,
    }))

    setHits(0)
    setTurns(0)
    setIsGameActive(true)
    setCharacters(revertCards)
  }

  const handleStart = () => {
    setRandomIDS(randomNumbers(6).map(String))
    setHits(0)
    setTurns(0)
    setIsGameActive(false)
  }

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
        }, 1000)
      }
    }
  }

  return (
    <>
      <Header />
      <main className="main-content">
        <GameContainer>
          {loading ? (
            <div>Loading</div>
          ) : isGameFinished ? (
            <div className="end-game-container">
              <Typography.Heading1 text="¡Felicitaciones!" />
              <Typography.Heading2 text={`Terminaste el juego con ${turns} turnos`} />
            </div>
          ) : (
            <>
              {isGameActive ? (
                <>
                  <Typography.Heading2 text={`${HITS}: ${hits}`} />
                  <Typography.Heading2 text={`${TURNS}: ${turns}`} />
                </>
              ) : (
                <Typography.Heading2 text={CHARACTERS} />
              )}
              <CardsContainer>
                {characters.map((character, position) => (
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
                ))}
              </CardsContainer>
            </>
          )}
          <div className="btn-container">
            {isGameFinished ? (
              <>
                <Button type="repeat" onClick={handleRepeat} />
                <Button type="start" onClick={handleStart} />
              </>
            ) : (
              <Button type="play" onClick={handlePlay} />
            )}
          </div>
        </GameContainer>
      </main>
    </>
  )
}
