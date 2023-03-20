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
import { FooterBg } from './styled'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Footer: React.FC<IBaseComponentProps> = ({ children }) => {
  children as ReactElement

  return (
    <FooterBg>
      <Container>
        <Row className="d-flex flex-column flex-xl-row justify-content-between pt-2 pb-2">
          <Col className="d-flex flex-column align-items-center align-items-xl-start">
            <ul className="list-unstyled list-group list-group-horizontal align-items-center  mt-4 mt-xl-0 mb-1 mb-xl-4">
              <li className="d-flex align-items-center me-xl-3">
                <AiFillFacebook className="me-2" size={22} />{' '}
                <a
                  href="https://web.facebook.com/prefeiturademarica"
                  className="d-flex d-none d-md-block "
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="d-flex align-items-center me-xl-3">
                <AiOutlineInstagram className="me-2" size={22} />
                <a
                  href="https://www.instagram.com/prefeiturademarica"
                  className="d-flex d-none d-md-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="d-flex align-items-center me-xl-3">
                <AiOutlineTwitter className="me-2" size={22} />
                <a
                  href="https://twitter.com/MaricaRJ"
                  className="d-flex d-none d-md-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li className="d-flex align-items-center me-xl-3">
                <AiFillYoutube className="me-2" size={22} />
                <a
                  href="https://www.youtube.com/user/prefeiturademarica1"
                  className="d-flex d-none d-md-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
              </li>
            </ul>
            <a
              href="https://app.marica2030.com.br/"
              className="text-decoration-underline"
              target="_blank"
              rel="noreferrer"
            >
              Área do comerciante
            </a>
          </Col>
          <Col className="d-flex flex-column flex-md-row justify-content-center justify-content-xl-between align-items-center">
            <img
              src={logo2}
              alt="logo2"
              className=" mx-3 my-3 my-xl-0"
              style={{ height: '60px', width: '108px' }}
            />

            <div className="d-flex flex-column">
              <a
                href="https://www.conhecamarica.com.br/static/media/guia-gastronomico.f9556598.pdf"
                className="text-decoration-underline"
                target="_blank"
                rel="noreferrer"
              >
                Manual Gastronomia
              </a>
              <a
                href="https://www.conhecamarica.com.br/static/media/guia-hospedagem.2046547a.pdf"
                className="text-decoration-underline"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Manual Hospedagem
              </a>
            </div>
            <img src={logo} alt="logo" className=" ms-3 my-3 my-xl-0" />
          </Col>
        </Row>
      </Container>
    </FooterBg>
  )
}

export default memo(Footer)
