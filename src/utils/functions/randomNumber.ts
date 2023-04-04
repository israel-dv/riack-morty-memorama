const MAX_LIMT_CHARACTERS = 826
const MIN_LIMIT_CHARACTERS = 1

export const randomNumbers = (numbers: number): number[] => {
  return Array.from({ length: numbers }, () =>
    Math.floor(Math.random() * (MAX_LIMT_CHARACTERS - 1) + MIN_LIMIT_CHARACTERS)
  )
}
