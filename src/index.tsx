import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import { AboutProvider } from 'context/AboutContext'
import { BannersProvider } from 'context/BannersContext'
import { EventsProvider } from 'context/EventsContext'
import { EventSpacesProvider } from 'context/EventSpacesContext'
import { HotelsProvider } from 'context/HotelsContext'
import { LocalMarketsProvider } from 'context/LocalMarketsContext'
import { RestaurantsProvider } from 'context/RestaurantsContext'
import { TouristicPointsProvider } from 'context/TouristicPointsContext'

import App from './App'
import GlobalStyles from './styles/GlobalStyles'

import 'services/i18n'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense>
    <EventsProvider>
      <EventSpacesProvider>
        <LocalMarketsProvider>
          <RestaurantsProvider>
            <HotelsProvider>
              <TouristicPointsProvider>
                <AboutProvider>
                  <BannersProvider>
                    <App />
                    <GlobalStyles />
                  </BannersProvider>
                </AboutProvider>
              </TouristicPointsProvider>
            </HotelsProvider>
          </RestaurantsProvider>
        </LocalMarketsProvider>
      </EventSpacesProvider>
    </EventsProvider>
  </Suspense>,
)
