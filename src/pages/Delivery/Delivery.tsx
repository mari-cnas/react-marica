import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { RiMotorbikeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import { DeliveryBox, HomeBg, IconDiv } from './styled'

const Delivery: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Delivery'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <Wrapper>
      <Header />
      <HomeBg className="d-flex flex-column py-5 flex-grow-1">
        <Container className="py-1">
          <div className="d-flex align-items-center mb-3">
            <Link to="/">
              <AiOutlineArrowLeft size={20} style={{ color: 'black' }} />
            </Link>
            <h2 className="mb-0 ms-2">Delivery</h2>
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
    </Wrapper>
  )
}

export default memo(Delivery)
