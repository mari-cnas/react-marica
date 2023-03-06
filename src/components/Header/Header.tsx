import { memo, ReactElement, useState } from 'react'

import { Container } from 'react-bootstrap'
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import MenuMobile from 'components/MenuMobile'
import { MenuOverlay } from 'components/MenuMobile/styled'

import logo from '../../assets/marica-logo.png'
import { Bg } from './styled'

interface IHeaderProps {
  children?: React.ReactNode
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
  children as ReactElement
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    <Bg className="d-flex align-items-center ">
      <MenuOverlay
        menuIsVisible={menuIsVisible}
        onClick={() => setMenuIsVisible(false)}
      />
      <Container className="d-flex justify-content-between align-items-center ">
        <GiHamburgerMenu type="button" onClick={() => setMenuIsVisible(true)} />
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="img-fluid" />
          </a>
        </div>

        <div className="d-flex flex-row d-none d-md-block list-unstyled list-group list-group-horizontal align-items-center">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <AiFillFacebook size={20} className="mx-1" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <AiOutlineInstagram size={20} className="mx-1" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <AiOutlineTwitter size={20} className="mx-1" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <AiFillYoutube size={20} className="mx-1" />
          </a>
        </div>
      </Container>
    </Bg>
  )
}

export default memo(Header)
