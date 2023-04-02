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

export const Home = (): React.ReactElement => {
  const [hits, setHits] = useState<number>(INITAL_HITS)
  const [turns, setTurns] = useState<number>(INITIAL_TURNS)
  const [flippedCards, setFlippedCards] = useState<number>(INITIAL_FLIPPED_CARDS)
  const [isGameActive, setIsGameActive] = useState<boolean>(false)
  const [characters, setCharacters] = useState<CharactersProps[]>([])
  const [firstCardSelected, setFirstCardSelected] = useState<CharactersProps>()

  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: {
      ids: ['195', '690', '238', '353', '530', '6'],
    },
  })

  useEffect(() => {
    if (data) {
      const { charactersByIds } = data
      const combineCharacters = charactersByIds?.map((character) => ({
        ...character,
        isFlipped: true,
      }))
      setCharacters([...combineCharacters, ...combineCharacters])
    }
  }, [data])

  const handleFlippedCard = (character: CharactersProps, position: number) => {
    let secondCardSelected
    let flippedCardCounter = flippedCards + 1
    const clone = [...characters]

    const selectedCard = () => ({ ...character, isFlipped: !character.isFlipped })

    const flippingCard = () => {
      const flipped = { ...character, isFlipped: !clone[position].isFlipped }

      clone[position] = flipped
      setCharacters(clone)

      return flipped
    }

    if (flippedCardCounter === MIN_SELECTED_CARDS) {
      setFirstCardSelected(flippingCard())
    }
    if (flippedCardCounter === MAX_SELECTED_CARDS) {
      secondCardSelected = flippingCard()
      setTurns((turn) => turn + 1)
    }

    if (flippedCardCounter === MAX_SELECTED_CARDS) {
      if (firstCardSelected?.name === secondCardSelected?.name) {
        flippedCardCounter = 0
        setHits((hit) => hit + 1)
      } else {
        flippedCardCounter = 0
        setTimeout(() => {
          flippingCard()
        }, 2000)
      }
    }
    console.log({ clone, flippedCardCounter })
    // clone[position] = selectedCard()
    setFlippedCards(flippedCardCounter)
    // setCharacters(clone)
  }

  console.log(characters)

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
                  onClick={isGameActive ? () => handleFlippedCard(character, position) : null}
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
