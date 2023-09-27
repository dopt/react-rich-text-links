import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DoptProvider } from '@dopt/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DoptProvider
      userId="USER_ID"
      apiKey="DOPT_BLOCKS_API_KEY"
      flowVersions={{ YOUR_FLOW: 0 }}
    >
      <App />
    </DoptProvider>
  </React.StrictMode>,
)
