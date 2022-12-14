import { memo } from 'react'

import { Container } from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { RiMotorbikeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import Footer from 'components/Footer'
import Header from 'components/Header'

import { DeliveryBox, HomeBg, IconDiv } from './styled'

const Delivery: React.FC = () => {
  return (
    <>
      <Header />
      <HomeBg className="d-flex flex-column py-5">
        <Container className="py-1">
          <div className="d-flex align-items-center">
            <Link to="/">
              <AiOutlineArrowLeft size={20} style={{ color: 'black' }} />
            </Link>
            <h2 className="ms-2">Delivery</h2>
          </div>
          <p>Selecione o tipo de estabelecimento:</p>
          <DeliveryBox>
            <IconDiv className="px-2">
              <RiMotorbikeFill size={20} />
            </IconDiv>
            <Link to="/bares-e-restaurantes">Bares e Restaurantes</Link>
          </DeliveryBox>
          <DeliveryBox>
            <IconDiv className="px-2">
              <RiMotorbikeFill size={20} />
            </IconDiv>
            <Link to="/comercio-local">Comércio Local</Link>
          </DeliveryBox>
        </Container>
      </HomeBg>
      <Footer />
    </>
  )
}

export default memo(Delivery)
