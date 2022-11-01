import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import About from 'pages/About'
import Home from 'pages/Home'
import Hotels from 'pages/Hotels'
import NotFound from 'pages/NotFound'
import TouristicPoint from 'pages/TouristicPoint'
import TouristicPoints from 'pages/TouristicPoints'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos-turisticos" element={<TouristicPoints />} />
        <Route path="/pontos/:id" element={<TouristicPoint />} />
        <Route path="/hoteis-e-pousadas" element={<Hotels />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
