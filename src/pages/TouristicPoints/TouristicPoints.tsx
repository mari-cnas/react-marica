import { memo, useCallback, useEffect, useState } from 'react'

import { Spinner, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTouristicPoints } from 'TouristicPointsContext/TouristicPointsContext'

import Footer from 'components/Footer'
import GeneralCard from 'components/GeneralCard'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { TouristicPointType } from 'types/TouristicPointType'

import { Categories, Category, HomeBg } from './styled'

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

  const handleSearch = useCallback(
    () => searchTouristicPoints(search),
    [searchTouristicPoints, search],
  )

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    fetchTouristicPoints()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchTouristicPoints])
  console.log('busca', search)
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
                <Link to="/">
                  <AiOutlineArrowLeft />
                </Link>{' '}
                <h2> Pontos Turísticos</h2>
              </Col>
              <Col>
                <Button variant="primary">
                  <FaMapMarkedAlt className="me-1" />
                  Mapa
                </Button>
              </Col>
              <Col className="col-4 d-flex align-items-center">
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder="Buscar pontos turísticos"
                    className="me-2"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Button variant="outline-success" onClick={handleSearch}>
                    Search
                  </Button>
                </div>
              </Col>
            </Row>
            <Categories className=" my-2  flex-nowrap flex-md-wrap">
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
                <Col className="d-flex my-2">
                  <GeneralCard ponto={point} key={point.id} />
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
