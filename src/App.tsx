import React from 'react'

import './App.scss'
import { GameContainer } from './components/Container/GameContainer'
import { Header } from './components/Header'
import { Typography } from './components/Typography'

export function App(): React.ReactElement {
  return (
    <>
      <Header />
      <main className="main-content">
        <GameContainer>
          <Typography.Heading1 text={'Personajes'} />
          <div>Hello</div>
        </GameContainer>
      </main>
    </>
  )
}
