import { memo, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FaUmbrellaBeach, FaRoute, FaRegCalendarAlt } from 'react-icons/fa'
import { GiForkKnifeSpoon, GiMicrophone } from 'react-icons/gi'
import { HiOutlineLibrary } from 'react-icons/hi'
import { MdHotel, MdStore } from 'react-icons/md'
import { RiMotorbikeFill } from 'react-icons/ri'
import { SiApacheairflow } from 'react-icons/si'

import BottomBanner from 'components/BottomBanner'
import CarouselBg from 'components/CarouselBg'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HomeCard from 'components/HomeCard'

import useTitle from 'hooks/useTitle'

import { HomeBg } from './styled'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setTitle(t('Home'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <CarouselBg />
      {isLoading && (
        <div className="d-flex flex-column my-5">
          <div className="d-flex flex-column align-self-center">
            <p>Carregando informações...</p>
          </div>
        </div>
      )}
      {!isLoading && (
        <HomeBg className="d-flex flex-column py-5">
          <Container className="py-5">
            <Row className="justify-content-center g-2">
              <Col className="d-flex col-6 col-md-4 ">
                <HomeCard
                  icon={FaUmbrellaBeach}
                  title="Pontos Turísticos"
                  description="Conheça nossas praias, lagoas, grutas e outros pontos turísticos"
                  page="/pontos-turisticos"
                />
              </Col>
              <Col className="d-flex col-6 col-md-4">
                <HomeCard
                  icon={MdHotel}
                  title="Hotéis e Pousadas"
                  description="Saiba onde se hospedar em Maricá"
                  page="/hoteis-e-pousadas"
                />
              </Col>
              <Col className="d-flex col-6 col-md-4 ">
                <HomeCard
                  icon={GiForkKnifeSpoon}
                  title="Bares e Restaurantes"
                  description="Aprecie a gastronomia de Maricá"
                  page="/bares-e-restaurantes"
                />
              </Col>
              <Col className="d-flex col-6 col-md-4 ">
                <HomeCard
                  icon={RiMotorbikeFill}
                  title="Delivery"
                  description="Receba o melhor de Maricá no conforto da sua casa"
                  page="/delivery"
                />
              </Col>
              <Col className="d-flex col-6 col-md-4 ">
                <HomeCard
                  icon={MdStore}
                  title="Comércio Local"
                  description="Veja onde fazer as suas compras"
                  page="/comercio-local"
                />
              </Col>
              <Col className="d-flex col-6 col-md-4 ">
                <HomeCard
                  icon={GiMicrophone}
                  title="Espaços para Eventos
                  "
                  description="Locais para fazer suas festas ou reuniões"
                  page="/espacos-para-eventos"
                />
              </Col>
              <Col className="d-flex col-6 col-md-4 ">
                <HomeCard
                  icon={FaRegCalendarAlt}
                  title="Eventos"
                  description="Confira o calendário de eventos da cidade"
                  page="/eventos"
                />
              </Col>
              <Col className="d-flex col-6 col-md-4 ">
                <HomeCard
                  icon={FaRoute}
                  title="Roteiros turísticos"
                  description="Conheça diversas trilhas ecológicas e de aventura, com variados níveis de dificuldade."
                  page="https://contato.site/5d9bab8/marica-cvb3/paginaprincipal"
                  target="_blank"
                />
              </Col>
              <Col className="d-flex col-6 col-md-4 ">
                <HomeCard
                  icon={SiApacheairflow}
                  title="Artesanato"
                  description="Conheça e compre as criações dos artesãos de Maricá/RJ"
                  page="http://www.feirartemarica.com.br/"
                  target="_blank"
                />
              </Col>
              <Col className="d-flex col-6 col-md-4 ">
                <HomeCard
                  icon={HiOutlineLibrary}
                  title="Sobre a cidade"
                  description="Conheça mais sobre Maricá"
                  page="/sobre"
                />
              </Col>
            </Row>
          </Container>
        </HomeBg>
      )}

      <BottomBanner />
      <Footer />
    </>
  )
}

export default memo(Home)
