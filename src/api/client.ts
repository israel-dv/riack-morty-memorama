import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

export const apiClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', // This URL could be in Enviroments Variables
  cache: new InMemoryCache(),
})
