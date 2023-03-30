import React from 'react'

import { Card } from '../../components/Card'
import { CardsContainer } from '../../components/Container/CardsContainer'
import { GameContainer } from '../../components/Container/GameContainer'
import { Header } from '../../components/Header'
import { Typography } from '../../components/Typography'
import './Home.styles.scss'

export const Home = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main className="main-content">
        <GameContainer>
          <Typography.Heading2 text={'Personajes'} />
          <CardsContainer>
            <Card
              isFlipped
              title="Toxic Rick"
              subtitle="Dead - Humanoid"
              imgUrl="https://rickandmortyapi.com/api/character/avatar/361.jpeg"
            />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card
              isFlipped
              title="Toxic Rick"
              subtitle="Dead - Humanoid"
              imgUrl="https://rickandmortyapi.com/api/character/avatar/361.jpeg"
            />
            <Card />
            <Card />
          </CardsContainer>
        </GameContainer>
      </main>
    </>
  )
}
