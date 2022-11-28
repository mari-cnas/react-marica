import { memo, ReactElement } from 'react'

import { Card } from 'react-bootstrap'
import { IconType } from 'react-icons'

import { CardBg, InfoText, InfoTitle, LinkDiv } from './styled'

interface IHomeCardProps {
  children?: React.ReactNode
  title: string
  description: string
  icon: IconType
  page: string
}

const HomeCard: React.FC<IHomeCardProps> = ({
  children,
  title,
  description,
  icon,
  page,
}) => {
  const Icon = icon
  children as ReactElement
  return (
    <CardBg className="w-100 ">
      <div className="d-flex justify-content-center">
        <Icon style={{ width: '48px', height: '56px' }} />
      </div>
      <Card.Body className="d-flex flex-column px-0">
        <InfoTitle className="text-center">{title}</InfoTitle>
        <InfoText className="text-center">{description}</InfoText>
        <LinkDiv className="d-flex align-self-center">
          <a href={page}>Acessar</a>
        </LinkDiv>
      </Card.Body>
    </CardBg>
  )
}
export default memo(HomeCard)
