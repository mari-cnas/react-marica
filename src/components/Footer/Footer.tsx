import { memo, ReactElement } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai'

import logo2 from '../../assets/marica-protege.png'
import logo from '../../assets/marica-turismo-logo.png'
import { Bg } from './styled'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Footer: React.FC<IBaseComponentProps> = ({ children }) => {
  children as ReactElement

  return (
    <Bg>
      <Container>
        <Row className="d-flex justify-content-between pt-4 pb-2">
          <Col>
            <ul className="list-unstyled list-group list-group-horizontal align-items-center mb-4">
              <li className="me-3">
                <AiFillFacebook /> Facebook
              </li>
              <li className="me-3">
                <AiOutlineInstagram /> Instagram
              </li>
              <li className="me-3">
                <AiOutlineTwitter /> Twitter
              </li>
              <li className="me-3">
                <AiFillYoutube /> Youtube
              </li>
            </ul>
            Área do comerciante
          </Col>
          <Col className="d-flex justify-content-between align-items-center">
            <img src={logo2} alt="logo2" className=" mx-3 w-25" />

            <div>
              <p>Manual Gastronomia</p>
              <p> Manual Hospedagem</p>
            </div>
            <img src={logo} alt="logo" className=" ms-3" />
          </Col>
        </Row>
      </Container>
    </Bg>
  )
}

export default memo(Footer)
