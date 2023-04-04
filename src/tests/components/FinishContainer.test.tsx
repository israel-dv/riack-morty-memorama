import { render } from '@testing-library/react'

import { FinishContainer } from 'components/Container/FinishContainer'

import { CONGRATS, FINISHED_TEXT, TURNS } from 'utils/constants/titles'

const TEST_TURNS = 10

describe('Finished Container', () => {
  test('Test to evaluate the rigth titles', () => {
    const { getByText } = render(<FinishContainer turns={TEST_TURNS} />)

    expect(getByText(CONGRATS)).toBeTruthy()
    expect(getByText(`${FINISHED_TEXT}${TEST_TURNS} ${TURNS.toLowerCase()}`)).toBeTruthy()
  })
})
