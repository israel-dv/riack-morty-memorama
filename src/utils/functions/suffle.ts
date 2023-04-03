export function suffle<T>(input: T[]): T[] {
  for (let position = 0; position < input.length - 1; position++) {
    const randomPosition = Math.floor(Math.random() * (position + 1))
    const cardAux = input[position]
    input[position] = input[randomPosition]
    input[randomPosition] = cardAux
  }
  return input
}
