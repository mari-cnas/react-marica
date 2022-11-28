import { Dispatch, memo, ReactElement, SetStateAction } from 'react'

import { IoClose } from 'react-icons/io5'
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
        <Link to="/sobre">Sobre a cidade</Link>
        <Link to="/pontos-turisticos">Pontos Turísticos</Link>
        <Link to="/hoteis-e-pousadas">Hotéis e Pousadas</Link>
        <Link to="/bares-e-restaurantes">Bares e Restaurantes</Link>
        <Link to="/delivery">Delivery</Link>
        <Link to="/comercio-local">Comércio Local</Link>
        <Link to="/espacos-para-eventos">Espaçoes para Eventos</Link>
        <Link to="/eventos">Eventos</Link>
        <a href="https://contato.site/5d9bab8/marica-cvb3/paginaprincipal">
          Roteiros Turísticos
        </a>
        <a href="http://www.feirartemarica.com.br/">Artesanato</a>
      </nav>
    </MenuContainer>
  )
}
export default memo(MenuMobile)
