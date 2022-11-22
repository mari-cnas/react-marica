import React, { memo, ReactElement } from 'react'

import GoogleMapReact from 'google-map-react'
import { useTouristicPoints } from 'TouristicPointsContext/TouristicPointsContext'

import Config from 'Config'

import MapMarker from 'components/MapMarker'

interface IGoogleMapProps {
  children?: React.ReactNode
  lat: number
  lng: number
  zoom: number
}

const GoogleMap: React.FC<IGoogleMapProps> = ({ children, lat, lng, zoom }) => {
  children as ReactElement

  const defaultProps = {
    center: {
      lat,
      lng,
    },
    zoom,
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${Config.services.google.mapsAPI.key}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapMarker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  )
}
export default memo(GoogleMap)
