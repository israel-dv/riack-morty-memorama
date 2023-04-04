import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Card } from 'components/Card'

import { CARD_LOGO } from 'utils/constants/sourceFiles'

const CHAR = {
  name: 'Rick Sanchez',
  subtitle: 'Alive - Human',
}

describe('Testing Card', () => {
  test('Cards should have title and subtitle when is Flipped', () => {
    render(<Card title={CHAR.name} subtitle={CHAR.subtitle} isFlipped={true} />)
    expect(screen.getByTestId('title-card').innerHTML).toContain(CHAR.name)
    expect(screen.getByTestId('subtitle-card').innerHTML).toContain(CHAR.subtitle)
  })

  test('Cards should have jus 1 child (image) when is not flipped', () => {
    render(<Card title={CHAR.name} subtitle={CHAR.subtitle} isFlipped={false} />)
    const logo = screen.getByRole('img')
    expect(logo).toHaveAttribute('src', CARD_LOGO)
  })
})
