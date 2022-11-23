import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import { AboutProvider } from 'context/AboutContext'
import { BannersProvider } from 'context/BannersContext'
import { TouristicPointsProvider } from 'context/TouristicPointsContext'

import App from './App'
import GlobalStyles from './styles/GlobalStyles'

import 'services/i18n'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense>
    <TouristicPointsProvider>
      <AboutProvider>
        <BannersProvider>
          <App />
          <GlobalStyles />
        </BannersProvider>
      </AboutProvider>
    </TouristicPointsProvider>
  </Suspense>,
)
