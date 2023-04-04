export function suffle<T>(input: T[]): T[] {
  const suffleArray = [...input]

  for (let position = 0; position < input.length - 1; position++) {
    const randomPosition = Math.floor(Math.random() * (position + 1))
    const cardAux = suffleArray[position]

    suffleArray[position] = suffleArray[randomPosition]
    suffleArray[randomPosition] = cardAux
  }

  return suffleArray
}
