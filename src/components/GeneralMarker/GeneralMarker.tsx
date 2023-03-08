import { memo, useRef, useState } from 'react'

import { FaMapMarkerAlt } from 'react-icons/fa'

import MapCard from 'components/MapCard'

import useClickOutside from 'hooks/useClickOutside'

import { TouristicPointType } from 'types/TouristicPointType'

import { Button, IconContainer, Menu, TriangleDiv } from './styled'

interface IGeneralMarkerProps {
  touristicPoint: TouristicPointType
  lat: number
  lng: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GeneralMarker: React.FC<IGeneralMarkerProps> = ({ touristicPoint }) => {
  const [show, setShow] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  useClickOutside(cardRef, () => setShow(false))

  return (
    <div style={{ position: 'relative' }} ref={cardRef}>
      <IconContainer>
        <Button type="button" onClick={() => setShow(!show)}>
          <FaMapMarkerAlt color="rgb(221, 75, 62)" size={28} />
        </Button>
        {show && (
          <Menu>
            <MapCard apiContent={touristicPoint} title={touristicPoint.nome} />
            {/* <TriangleDiv /> */}
          </Menu>
        )}
      </IconContainer>
    </div>
  )
}

export default memo(GeneralMarker)
