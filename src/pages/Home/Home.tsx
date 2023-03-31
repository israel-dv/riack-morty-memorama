import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'

import { Character } from 'src/__generated__/graphql'
import { GET_CHARACTERS } from 'src/api/queries/getCharacters.query'
import { Card } from 'src/components/Card'
import { CardsContainer } from 'src/components/Container/CardsContainer'
import { GameContainer } from 'src/components/Container/GameContainer'
import { Header } from 'src/components/Header'
import { Typography } from 'src/components/Typography'
import { randomNumbers } from 'src/utils/functions/randomNumber'

import './Home.styles.scss'

const randomIDS = randomNumbers(6).map(String)

export const Home = (): React.ReactElement => {
  const [characters, setCharacters] = useState<Character[]>([])

  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: {
      ids: randomIDS,
    },
  })

  useEffect(() => {
    if (data) {
      const { charactersByIds } = data
      setCharacters([...charactersByIds, ...charactersByIds])
    }
  }, [data])

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
              characters.map((character) => (
                <Card
                  key={character.id}
                  imgUrl={character.image}
                  title={character.name}
                  subtitle={`${character.status} - ${character.species}`}
                  isFlipped
                />
              ))
            )}
          </CardsContainer>
        </GameContainer>
      </main>
    </>
  )
}
