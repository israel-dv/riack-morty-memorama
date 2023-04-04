import { render } from '@testing-library/react'

import { Button } from '../../components/Button'

describe('Test Button to show just 3 options', () => {
  test('Repeat Button', async () => {
    const { container } = render(<Button type="repeat" />)
    expect(container).toMatchSnapshot()
  })
  test('Start Button', async () => {
    const { container } = render(<Button type="start" />)
    expect(container).toMatchSnapshot()
  })
  test('Play Button', async () => {
    const { container } = render(<Button type="play" />)
    expect(container).toMatchSnapshot()
  })
})
