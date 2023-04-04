import { QueryOptions, useQuery } from '@apollo/client'

import { GET_CHARACTERS } from 'api/queries/getCharacters.query'

export const useGetCharacters = (ids: string[], options?: QueryOptions) => {
  return useQuery(GET_CHARACTERS, {
    variables: {
      ids,
    },
    // This supply try - catch. This log is only to value an error
    onError: (error) => console.log(`Error getCharacters: ${error}`),
    ...options,
  })
}
