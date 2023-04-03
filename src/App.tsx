import { ApolloProvider } from '@apollo/client'

import { apiClient } from 'api/client'

import { Home } from 'pages/Home'

export const App = () => {
  return (
    <ApolloProvider client={apiClient}>
      <Home />
    </ApolloProvider>
  )
}
