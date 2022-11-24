import { Dispatch, memo, SetStateAction } from 'react'

import { FaMapMarkerAlt } from 'react-icons/fa'

import MapCard from 'components/MapCard'

import { TouristicPointType } from 'types/TouristicPointType'

import { Button, IconContainer, Menu } from './styled'

interface IGeneralMarkerProps {
  touristicPoint: TouristicPointType
  lat: number
  lng: number
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GeneralMarker: React.FC<IGeneralMarkerProps> = ({
  touristicPoint,
  show,
  setShow,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <IconContainer>
      <Button type="button" onClick={() => setShow(!show)}>
        <FaMapMarkerAlt color="rgb(221, 75, 62)" size={28} />
      </Button>
      <Menu show={show}>
        <MapCard apiContent={touristicPoint} title="malany" />
      </Menu>
    </IconContainer>
  )
}

export default memo(GeneralMarker)
