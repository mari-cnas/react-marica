import { memo, useCallback, useEffect, useState } from 'react'

import { Spinner, Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { HiSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import { useEvents } from 'context/EventsContext'

import Footer from 'components/Footer'
import GeneralCardSlug from 'components/GeneralCardSlug'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import { Categories, Category, HomeBg, InputBox, MapButton } from './styled'

const Events: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { loading, error, events, categories, fetchEvents, searchEvents } =
    useEvents()
  const [search, setSearch] = useState('')
  const [hasSearch, setHasSearch] = useState(false)

  const handleSearch = useCallback(() => {
    searchEvents(search)
    setHasSearch(true)
  }, [searchEvents, setHasSearch, search])
  const clearSearch = useCallback(() => {
    setSearch('')
    searchEvents('')
    setHasSearch(false)
  }, [searchEvents, setHasSearch])

  useEffect(() => {
    setTitle(t('Eventos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    fetchEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchEvents])

  return (
    <Wrapper>
      <Header />
      {loading && (
        <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {!loading && !error && (
        <HomeBg className="d-flex flex-column py-5">
          <Container className="py-1">
            <Row className=" justify-content-between">
              <Col className="d-flex">
                <div className="d-flex align-items-center">
                  <Link to="/">
                    <AiOutlineArrowLeft size={20} style={{ color: 'black' }} />
                  </Link>
                  <div className="d-flex flex-column ms-2">
                    <h2 className="mb-0">Eventos</h2>
                  </div>
                </div>
              </Col>
              <Col className="d-flex flex-column flex-md-row align-items-center justify-content-end">
                <Link to="/espacos-para-eventos/mapa">
                  <MapButton className="me-3 my-2 py-2 px-3">
                    <FaMapMarkedAlt className="me-1" />
                    Mapa
                  </MapButton>
                </Link>
                <InputBox>
                  <input
                    type="text"
                    placeholder="Buscar eventos"
                    className="border-0 mx-3 py-2 w-100"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Button type="button" variant="link" onClick={handleSearch}>
                    <HiSearch style={{ color: 'black' }} />
                  </Button>
                  {hasSearch === true && (
                    <Button
                      style={{ height: '40px', color: 'black' }}
                      type="button"
                      variant="link"
                      onClick={clearSearch}
                      className="text-decoration-none"
                    >
                      <p className="m-0">x</p>
                    </Button>
                  )}
                </InputBox>
              </Col>
            </Row>
            <Categories className=" ps-2 my-2  flex-nowrap flex-md-wrap">
              {categories?.map((category) => (
                <Category
                  className="me-2 my-2"
                  key={category.id}
                  value={category.label}
                  onClick={handleSearch}
                >
                  {category.label}
                </Category>
              ))}
            </Categories>
            <Row className="justify-content-center row-cols-1 row-cols-md-3">
              {events?.map((point) => (
                <Col className="d-flex my-2" key={point.id}>
                  <GeneralCardSlug ponto={point} pagina="eventos" />
                </Col>
              ))}
            </Row>
          </Container>
        </HomeBg>
      )}

      <Footer />
    </Wrapper>
  )
}

export default memo(Events)
