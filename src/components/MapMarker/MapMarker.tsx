import { memo, ReactElement } from 'react'

import { FaMapMarkerAlt } from 'react-icons/fa'

import { MapIcon } from './styled'

interface IMapMarkerProps {
  children?: React.ReactNode
  lat: number
  lng: number
}

const MapMarker: React.FC<IMapMarkerProps> = ({ children }) => {
  children as ReactElement

  return (
    <MapIcon>
      <FaMapMarkerAlt size={30} />
    </MapIcon>
  )
}
export default memo(MapMarker)
