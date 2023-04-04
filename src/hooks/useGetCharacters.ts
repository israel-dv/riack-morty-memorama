import { QueryFunctionOptions, useQuery } from '@apollo/client'

import { GET_CHARACTERS } from 'api/queries/getCharacters.query'

export const useGetCharacters = (ids: string[], options?: QueryFunctionOptions) => {
  return useQuery(GET_CHARACTERS, {
    variables: {
      ids,
    },
    // This supply try - catch. This log is only to value an error
    onError: (error) => {
      throw new Error(`Error getCharacters: ${error}`)
    },
    ...options,
  })
}
