import { randomNumbers } from '../../utils/functions/randomNumber'
import { suffle } from '../../utils/functions/suffle'

describe('Suffle function', () => {
  const randomArray = randomNumbers(10)
  const suffleArray = suffle(randomArray)

  test('suffle should return an array', () => {
    expect(suffleArray).toBeInstanceOf(Array)
  })

  test('suffle array should be diferent of first array', () => {
    expect(JSON.stringify(randomArray)).not.toEqual(JSON.stringify(suffleArray))
  })
})
