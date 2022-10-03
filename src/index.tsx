import React, { Suspense } from 'react'

import { AboutProvider } from 'AboutContext/AboutContext'
import { BannersProvider } from 'BannersContext/BannersContext'
import ReactDOM from 'react-dom/client'
import { TouristicPointsProvider } from 'TouristicPointsContext/TouristicPointsContext'

import 'services/i18n'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense>
    <TouristicPointsProvider>
      <AboutProvider>
        <BannersProvider>
          <App />
        </BannersProvider>
      </AboutProvider>
    </TouristicPointsProvider>
  </Suspense>,
)
