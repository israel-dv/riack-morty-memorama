import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { createRoot } from 'react-dom/client'

import { apiClient } from 'src/api/client'
import { Home } from 'src/pages/Home'

import './index.scss'

const root = createRoot(document.getElementById('root') as HTMLAnchorElement)
root.render(
  <React.StrictMode>
    <ApolloProvider client={apiClient}>
      <Home />
    </ApolloProvider>
  </React.StrictMode>
)
