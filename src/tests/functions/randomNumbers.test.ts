import { randomNumbers } from '../../utils/functions/randomNumber'

const NUMBERS = 10
const NUMNBER_OF_CHARACTERS = 826

describe('Testing randomNumbers function', () => {
  const randomIDS = randomNumbers(NUMBERS)

  test('randomNumber function should return an array', () => {
    expect(randomIDS).toBeInstanceOf(Array)
  })

  test('randomNumber should be >= 1 and <= 826', () => {
    randomIDS.forEach((number) => {
      expect(number).toBeLessThanOrEqual(NUMNBER_OF_CHARACTERS)
    })
  })
})
