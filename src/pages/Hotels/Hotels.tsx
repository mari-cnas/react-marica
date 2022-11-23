import { memo, useEffect } from 'react'

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useHotels } from 'context/HotelsContext'

import Footer from 'components/Footer'
import GeneralCard from 'components/GeneralCard'
import Header from 'components/Header'
import LanguageSwitcher from 'components/LanguageSwitcher'

import useTitle from 'hooks/useTitle'

import { HomeBg } from './styled'

const Hotels: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { loading, hotels, fetchHotel } = useHotels()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  console.log('tp', hotels)
  return (
    <>
      <Header />
      {loading && (
        <div className="d-flex flex-column my-5">
          <div className="d-flex flex-column align-self-center">
            <p>Carregando informações...</p>
          </div>
        </div>
      )}
      {!loading && (
        <HomeBg className="d-flex flex-column py-5">
          <Container className="py-5">
            <div className="d-flex justify-content-between">
              <Link to="/">
                <AiOutlineArrowLeft />
              </Link>{' '}
              <h2> Hoteis e Pousadas</h2>
              <Button variant="primary">
                <FaMapMarkedAlt className="me-1" />
                Mapa
              </Button>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </div>

            <Row className="justify-content-center">
              <Col className="col-6 col-md-4 mb-2">oi</Col>
            </Row>
          </Container>
        </HomeBg>
      )}
      <Footer />
    </>
  )
}

export default memo(Hotels)
// {touristicPoints.map((touristicPoint) => (
// <GeneralCard
// local={touristicPoint?.nome}
// capa={touristicPoint?.capa}
/// >
