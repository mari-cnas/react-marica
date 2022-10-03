import { memo, ReactElement } from 'react'

import { FaMapMarkerAlt } from 'react-icons/fa'

interface IMapMarkerProps {
  children?: React.ReactNode
}

const MapMarker: React.FC<IMapMarkerProps> = ({ children }) => {
  children as ReactElement

  return <FaMapMarkerAlt />
}
export default memo(MapMarker)
