import { memo, useState } from 'react'

import GoogleMapReact from 'google-map-react'

import Config from 'Config'

import GeneralMarker from 'components/GeneralMarker'

import { PageType } from 'types/PageType'

interface IGeneralMapProps {
  children?: React.ReactNode
  endPoint: PageType[] | undefined
}

const GeneralMap: React.FC<IGeneralMapProps> = ({ endPoint }) => {
  return (
    <div>
      {endPoint?.length && (
        <div className="w-100" style={{ height: 'calc(100vh - 95px)' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: `${Config.services.google.mapsAPI.key}`,
            }}
            defaultCenter={{
              lat: -22.9037088,
              lng: -42.8180507,
            }}
            defaultZoom={12}
          >
            {endPoint?.map((_endPoint) => (
              <GeneralMarker
                key={_endPoint.id}
                touristicPoint={_endPoint}
                lat={_endPoint.lat}
                lng={_endPoint.lng}
              />
            ))}
          </GoogleMapReact>
        </div>
      )}
    </div>
  )
}

export default memo(GeneralMap)
