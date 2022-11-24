import { memo, ReactElement, useEffect, useRef, useState } from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap'
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai'

import logo from '../../assets/marica-logo.png'
import { Bg, DrawerMenu } from './styled'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Header: React.FC<IBaseComponentProps> = ({ children }) => {
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
      <Container className="d-flex justify-content-between">
        <Navbar expand="false">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          Menu
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <DrawerMenu>
                <ul>
                  <li>Inicial</li>
                  <li>Sobre a cidade</li>
                  <li>Pontos Turísticos</li>
                  <li>Hotéis e Pousadas</li>
                  <li>Bares e Restaurantes</li>
                  <li>Delivery</li>
                  <li>Comércio Local</li>
                  <li>Espaçoes para Eventos</li>
                  <li>Eventos</li>
                  <li>Roteiros Turísticos</li>
                  <li>Artesanato</li>
                </ul>
              </DrawerMenu>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <img src={logo} alt="logo" className="img-fluid" />
        </div>

        <ul className="list-unstyled list-group list-group-horizontal align-items-center">
          <li>
            <AiFillFacebook size={20} className="mx-1" />
          </li>
          <li>
            <AiOutlineInstagram size={20} className="mx-1" />
          </li>
          <li>
            <AiOutlineTwitter size={20} className="mx-1" />
          </li>
          <li>
            <AiFillYoutube size={20} className="mx-1" />
          </li>
        </ul>
      </Container>
    </Bg>
  )
}

export default memo(Header)
