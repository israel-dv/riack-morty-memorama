import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.scss'
import { Home } from './pages/Home'

const root = createRoot(document.getElementById('root') as HTMLAnchorElement)
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
