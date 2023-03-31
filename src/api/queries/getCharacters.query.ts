import { gql } from 'src/__generated__'

export const GET_CHARACTERS = gql(`
  query GetCharacters($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      name
      status
      species
      image
    }
  }
`)
