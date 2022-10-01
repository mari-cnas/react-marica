import React, { Suspense } from 'react'

import { AboutProvider } from 'AboutContext/AboutContext'
import { BannersProvider } from 'BannersContext/BannersContext'
import { HotelsProvider } from 'HotelsContext/HotelsContext'
import ReactDOM from 'react-dom/client'
import { TouristicPointsProvider } from 'TouristicPointsContext/TouristicPointsContext'

import 'services/i18n'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <TouristicPointsProvider>
        <AboutProvider>
          <BannersProvider>
            <App />
          </BannersProvider>
        </AboutProvider>
      </TouristicPointsProvider>
    </Suspense>
  </React.StrictMode>,
)
