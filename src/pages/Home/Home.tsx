import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'

import { GET_CHARACTERS } from 'src/api/queries/getCharacters.query'
import { Button } from 'src/components/Button'
import { Card } from 'src/components/Card'
import { CardsContainer } from 'src/components/Container/CardsContainer'
import { GameContainer } from 'src/components/Container/GameContainer'
import { Header } from 'src/components/Header'
import { Typography } from 'src/components/Typography'
import { randomNumbers } from 'src/utils/functions/randomNumber'
import { CharactersProps } from 'src/utils/types/characters.types'

import './Home.styles.scss'

const randomIDS = randomNumbers(6).map(String)

export const Home = (): React.ReactElement => {
  const [isGameAvtice, setIsGameActive] = useState<boolean>(false)
  const [flippedCards, setFlippedCards] = useState<number>(0)
  const [characters, setCharacters] = useState<CharactersProps[]>([])

  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: {
      ids: randomIDS,
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
    if (flippedCards !== 2) return

    const clone = [...characters]
    clone[position] = { ...character, isFlipped: !character.isFlipped }

    setFlippedCards((flipped) => flipped + 1)
    setCharacters(clone)
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
          <Typography.Heading2 text={'Personajes'} />
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
                  onClick={isGameAvtice ? () => handleFlippedCard(character, position) : null}
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
