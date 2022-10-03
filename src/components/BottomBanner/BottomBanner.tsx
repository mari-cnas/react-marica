import { memo, ReactElement, useEffect, useRef, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import appStore from '../../assets/app-store.png'
import phone from '../../assets/cellphone.png'
import googlePlay from '../../assets/google-play.png'
import { Bg, Bg2, Text, Title } from './styled'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const BottomBanner: React.FC<IBaseComponentProps> = ({ children }) => {
  children as ReactElement
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!e.target) setIsOpen(false)
    })
  })

  return (
    <Bg>
      <Bg2 />
      <Container className="d-flex justify-content-between py-5">
        <Row style={{ zIndex: 1 }}>
          <Col className="col-7">
            <Title>Conheça nosso aplicativo</Title>
            <Text>
              Tenha o Guia Oficial de Turismo de Maricá a qualquer momento, na
              palma das suas mãos!
            </Text>
            <img src={googlePlay} alt="logo" className="py-5 me-3" />
            <img src={appStore} alt="logo" className="py-3" />
          </Col>
          <Col className="col-5 text-end">
            <img src={phone} alt="logo2" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Bg>
  )
}

export default memo(BottomBanner)
