import { Dispatch, memo, ReactElement, SetStateAction } from 'react'

import { FaUmbrellaBeach, FaRoute, FaRegCalendarAlt } from 'react-icons/fa'
import { GiForkKnifeSpoon, GiMicrophone } from 'react-icons/gi'
import { HiOutlineLibrary } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { MdHotel, MdStore } from 'react-icons/md'
import { RiMotorbikeFill } from 'react-icons/ri'
import { SiApacheairflow } from 'react-icons/si'
import { Link } from 'react-router-dom'

import { MenuContainer } from './styled'

interface IBaseComponentProps {
  children?: React.ReactNode
  menuIsVisible: boolean
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>
}

const MenuMobile: React.FC<IBaseComponentProps> = ({
  children,
  menuIsVisible,
  setMenuIsVisible,
}) => {
  children as ReactElement
  return (
    <MenuContainer isVisible={menuIsVisible}>
      <IoClose size={22} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <Link to="/">Inicial</Link>
        <Link to="/sobre">
          <HiOutlineLibrary /> Sobre a cidade
        </Link>
        <Link to="/pontos-turisticos">
          <FaUmbrellaBeach /> Pontos Turísticos
        </Link>
        <Link to="/hoteis-e-pousadas">
          <MdHotel /> Hotéis e Pousadas
        </Link>
        <Link to="/bares-e-restaurantes">
          <GiForkKnifeSpoon /> Bares e Restaurantes
        </Link>
        <Link to="/delivery">
          <RiMotorbikeFill /> Delivery
        </Link>
        <Link to="/comercio-local">
          <MdStore /> Comércio Local
        </Link>
        <Link to="/espacos-para-eventos">
          <GiMicrophone /> Espaçoes para Eventos
        </Link>
        <Link to="/eventos">
          <FaRegCalendarAlt /> Eventos
        </Link>
        <a href="https://contato.site/5d9bab8/marica-cvb3/paginaprincipal">
          <FaRoute />
          Roteiros Turísticos
        </a>
        <a href="http://www.feirartemarica.com.br/">
          <SiApacheairflow /> Artesanato
        </a>
      </nav>
    </MenuContainer>
  )
}
export default memo(MenuMobile)
