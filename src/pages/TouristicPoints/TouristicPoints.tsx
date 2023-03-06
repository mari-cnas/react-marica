import { memo, useCallback, useEffect, useState } from 'react'

import { Spinner, Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { HiSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import { useTouristicPoints } from 'context/TouristicPointsContext'

import Footer from 'components/Footer'
import GeneralCardSlug from 'components/GeneralCardSlug'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Categories, Category, HomeBg, InputBox, MapButton } from './styled'

const TouristicPoints: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const {
    loading,
    error,
    touristicPoints,
    categories,
    fetchTouristicPoints,
    searchTouristicPoints,
  } = useTouristicPoints()
  const [search, setSearch] = useState('')
  const [hasSearch, setHasSearch] = useState(false)

  const handleSearch = useCallback(() => {
    searchTouristicPoints(search)
    setHasSearch(true)
  }, [searchTouristicPoints, setHasSearch, search])
  const clearSearch = useCallback(() => {
    setSearch('')
    searchTouristicPoints('')
    setHasSearch(false)
  }, [searchTouristicPoints, setHasSearch])

  useEffect(() => {
    setTitle(t('Pontos Turísticos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    fetchTouristicPoints()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchTouristicPoints])

  return (
    <>
      <Header />
      {loading && (
        <div className="d-flex flex-column my-5">
          <div className="d-flex flex-column align-self-center">
            <Spinner animation="border" variant="primary" />
          </div>
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
                    <h2>Pontos Turísticos</h2>
                  </div>
                </div>
              </Col>
              <Col className="d-flex flex-column flex-md-row align-items-center justify-content-end">
                <Link to="/pontos-turisticos/mapa">
                  <MapButton className="me-3 my-2 py-2 px-3">
                    <FaMapMarkedAlt className="me-1" />
                    Mapa
                  </MapButton>
                </Link>
                <InputBox>
                  <input
                    type="text"
                    placeholder="Buscar pontos turísticos"
                    className="border-0 mx-3 py-2"
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
              {touristicPoints?.map((point) => (
                <Col className="d-flex my-2" key={point.id}>
                  <GeneralCardSlug ponto={point} pagina="pontos-turisticos" />
                </Col>
              ))}
            </Row>
          </Container>
        </HomeBg>
      )}

      <Footer />
    </>
  )
}

export default memo(TouristicPoints)
