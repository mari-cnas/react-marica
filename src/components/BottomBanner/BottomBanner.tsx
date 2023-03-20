import { memo, ReactElement, useEffect, useState } from 'react'

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

  return (
    <Bg>
      <Bg2 className="d-none d-md-block" />
      <Container className="d-flex justify-content-between py-5">
        <Row style={{ zIndex: 1 }} className="w-100 flex-column flex-md-row">
          <Col className="col-12 col-md-7 d-flex flex-column">
            <Title>Conheça nosso aplicativo</Title>
            <Text>
              Tenha o Guia Oficial de Turismo de Maricá a qualquer momento, na
              palma das suas mãos!
            </Text>
            <div className="d-flex mt-auto mb-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.marica2030.app"
                className="me-3"
              >
                <img src={googlePlay} alt="logo" className="img-fluid " />
              </a>
              <a href="https://apps.apple.com/br/app/maric%C3%A1-oficial/id1493299199">
                <img src={appStore} alt="logo" className="img-fluid " />
              </a>
            </div>
          </Col>
          <Col className="col-12 col-md-5 d-flex justify-content-center justify-content-md-end">
            <img src={phone} alt="logo2" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Bg>
  )
}

export default memo(BottomBanner)
