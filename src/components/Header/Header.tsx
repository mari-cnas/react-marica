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

import logosm from '../../assets/marica-logo-sm.png'
import logo from '../../assets/marica-logo.png'
import { Bg } from './styled'

interface IHeaderProps {
  children?: React.ReactNode
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
  children as ReactElement
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Bg className="d-flex align-items-center ">
        <Container className="d-flex justify-content-between align-items-center w-100">
          <GiHamburgerMenu
            type="button"
            onClick={() => setMenuIsVisible(true)}
          />
          <div className="d-md-block d-none">
            <a href="/">
              <img src={logo} alt="logo" className="img-fluid" />
            </a>
          </div>
          <div className="d-md-none d-block">
            <a href="/">
              <img src={logosm} alt="logo" className="img-fluid" />
            </a>
          </div>
          <div>
            <div className="d-flex flex-row d-none d-md-block list-unstyled list-group list-group-horizontal align-items-center">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook size={20} className="mx-1" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={20} className="mx-1" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter size={20} className="mx-1" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillYoutube size={20} className="mx-1" />
              </a>
            </div>
          </div>
        </Container>
      </Bg>
    </>
  )
}

export default memo(Header)
