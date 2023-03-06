import { memo, ReactElement } from 'react'

import { Card } from 'react-bootstrap'
import { IconType } from 'react-icons'

import { CardBg, InfoText, InfoTitle, LinkBtn } from './styled'

interface IHomeCardProps {
  children?: React.ReactNode
  title: string
  description: string
  icon: IconType
  page: string
  target?: string
}

const HomeCard: React.FC<IHomeCardProps> = ({
  children,
  title,
  description,
  icon,
  page,
  target = '_self',
}) => {
  const Icon = icon
  children as ReactElement
  return (
    <CardBg className="w-100 ">
      <div className="d-flex justify-content-center">
        <a href={page} target={target}>
          <Icon style={{ width: '48px', height: '56px' }} />
        </a>
      </div>
      <Card.Body className="d-flex flex-column px-0">
        <a href={page} target={target}>
          <InfoTitle className="text-center">{title}</InfoTitle>
        </a>
        <InfoText className="text-center">{description}</InfoText>
        <LinkBtn className="d-flex align-self-center">
          <a href={page} target={target}>
            Acessar
          </a>
        </LinkBtn>
      </Card.Body>
    </CardBg>
  )
}
export default memo(HomeCard)
