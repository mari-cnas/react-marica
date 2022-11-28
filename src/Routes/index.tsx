import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import About from 'pages/About'
import Delivery from 'pages/Delivery'
import Event from 'pages/Event'
import Events from 'pages/Events'
import EventsMap from 'pages/EventsMap'
import EventSpace from 'pages/EventSpace'
import EventSpaces from 'pages/EventSpaces'
import EventSpacesMap from 'pages/EventSpacesMap'
import Home from 'pages/Home'
import Hotel from 'pages/Hotel'
import Hotels from 'pages/Hotels'
import HotelsMap from 'pages/HotelsMap'
import LocalMarket from 'pages/LocalMarket'
import LocalMarkets from 'pages/LocalMarkets'
import LocalMarketsMap from 'pages/LocalMarketsMap'
import NotFound from 'pages/NotFound'
import Restaurant from 'pages/Restaurant'
import Restaurants from 'pages/Restaurants'
import RestaurantsMap from 'pages/RestaurantsMap'
import TouristicPoint from 'pages/TouristicPoint'
import TouristicPoints from 'pages/TouristicPoints'
import TouristicPointsMap from 'pages/TouristicPointsMap'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos-turisticos" element={<TouristicPoints />} />
        <Route
          path="/pontos-turisticos/:id/:nome"
          element={<TouristicPoint />}
        />
        <Route
          path="/pontos-turisticos/mapa"
          element={<TouristicPointsMap />}
        />
        <Route path="/hoteis-e-pousadas" element={<Hotels />} />
        <Route path="/hoteis-e-pousadas/:id/:nome" element={<Hotel />} />
        <Route path="/hoteis-e-pousadas/mapa" element={<HotelsMap />} />
        <Route path="/bares-e-restaurantes" element={<Restaurants />} />
        <Route
          path="/bares-e-restaurantes/:id/:nome"
          element={<Restaurant />}
        />
        <Route path="/bares-e-restaurantes/mapa" element={<RestaurantsMap />} />
        <Route path="/comercio-local" element={<LocalMarkets />} />
        <Route path="/comercio-local/:id/:nome" element={<LocalMarket />} />
        <Route path="/comercio-local/mapa" element={<LocalMarketsMap />} />
        <Route path="/espacos-para-eventos" element={<EventSpaces />} />
        <Route
          path="/espacos-para-eventos/:id/:nome"
          element={<EventSpace />}
        />
        <Route path="/espacos-para-eventos/mapa" element={<EventSpacesMap />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/eventos/:id/:nome" element={<Event />} />
        <Route path="/eventos/mapa" element={<EventsMap />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
