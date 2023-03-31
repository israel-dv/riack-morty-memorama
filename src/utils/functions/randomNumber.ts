export const randomNumbers = (numbers: number): number[] => {
  return Array.from({ length: numbers }, () => Math.floor(Math.random() * (826 - 1) + 1))
}
