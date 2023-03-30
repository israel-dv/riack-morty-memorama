import { DocumentNode, gql } from '@apollo/client'

type GetCharactersID = {
  ids: number[]
}

export const GET_CHARACTERS = ({ ids }: GetCharactersID): DocumentNode => {
  return gql`
    query GetCharacters {
      charactersByIds(ids: ${ids}) {
        name
        status
        species
        image
      }
    }
  `
}
