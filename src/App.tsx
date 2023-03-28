import React from 'react'

import { Header } from './components/Header'

export function App(): React.ReactElement {
  return (
    <>
      <Header />
      <main className="container-cards">
        <h3>Personajes</h3>
      </main>
    </>
  )
}
