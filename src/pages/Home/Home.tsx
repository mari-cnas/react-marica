import { memo, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FaUmbrellaBeach } from 'react-icons/fa'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { MdHotel } from 'react-icons/md'

import BottomBanner from 'components/BottomBanner'
import CarouselBg from 'components/CarouselBg'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HomeCard from 'components/HomeCard'
import LanguageSwitcher from 'components/LanguageSwitcher'

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
            <Row className="justify-content-center">
              <Col className="col-6 col-md-4 mb-2">
                <HomeCard
                  icon={FaUmbrellaBeach}
                  title="Pontos Turísticos"
                  description="Conheça nossas praias, lagoas, grutas e outros pontos turísticos"
                  page="/pontos-turisticos"
                />
              </Col>
              <Col className="col-6 col-md-4 mb-2">
                <HomeCard
                  icon={MdHotel}
                  title="Hotéis e Pousadas"
                  description="Saiba onde se hospedar em Maricá"
                  page="/hoteis-e-pousadas"
                />
              </Col>
              <Col className="col-6 col-md-4 mb-2">
                <HomeCard
                  icon={GiForkKnifeSpoon}
                  title="Bares e Restaurantes"
                  description="Aprecie a gastronomia de Maricá"
                  page="/bares-e-restaurantes"
                />
              </Col>
              <Col className="col-6 col-md-4 mb-2">
                <HomeCard
                  icon={FaUmbrellaBeach}
                  title="Delivery"
                  description="Receba o melhor de Maricá no conforto da sua casa"
                  page="/delivery"
                />
              </Col>
              <Col className="col-6 col-md-4 mb-2">
                <HomeCard
                  icon={FaUmbrellaBeach}
                  title="Comércio Local"
                  description="Veja onde fazer as suas compras"
                  page="/comercio-local"
                />
              </Col>
              <Col className="col-6 col-md-4 mb-2">
                <HomeCard
                  icon={FaUmbrellaBeach}
                  title="Espaços para Eventos
                  "
                  description="Locais para fazer suas festas ou reuniões"
                  page="/espacos-para-eventos"
                />
              </Col>
              <Col className="col-6 col-md-4 mb-2">
                <HomeCard
                  icon={FaUmbrellaBeach}
                  title="Eventos"
                  description="Confira o calendário de eventos da cidade"
                  page="/eventos"
                />
              </Col>
              <Col className="col-6 col-md-4 mb-2">
                <HomeCard
                  icon={FaUmbrellaBeach}
                  title="Roteiros turísticos"
                  description="Conheça diversas trilhas ecológicas e de aventura, com variados níveis de dificuldade."
                  page="https://contato.site/5d9bab8/marica-cvb3/paginaprincipal"
                />
              </Col>
              <Col className="col-6 col-md-4 mb-2">
                <HomeCard
                  icon={FaUmbrellaBeach}
                  title="Artesanato"
                  description="Conheça e compre as criações dos artesãos de Maricá/RJ"
                  page="http://www.feirartemarica.com.br/"
                />
              </Col>
              <Col className="col-6 col-md-4 mb-2">
                <HomeCard
                  icon={FaUmbrellaBeach}
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