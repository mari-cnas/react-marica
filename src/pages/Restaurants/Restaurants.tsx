import { memo, useCallback, useEffect, useState } from 'react'

import { Spinner, Button, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { HiSearch } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'

import { useRestaurants } from 'context/RestaurantsContext'

import Category from 'components/Category'
import Footer from 'components/Footer'
import GeneralCardSlug from 'components/GeneralCardSlug'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import { HomeBg, InputBox, MapButton } from './styled'

const Restaurants: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const {
    loading,
    error,
    restaurants,
    categories,
    fetchCategory,
    fetchRestaurants,
    searchRestaurants,
  } = useRestaurants()
  const [search, setSearch] = useState('')
  const [hasSearch, setHasSearch] = useState(false)
  const [categoryValue, setCategoryValue] = useState('')
  const navigate = useNavigate()

  const handleSearch = useCallback(() => {
    searchRestaurants(search)
    setHasSearch(true)
  }, [searchRestaurants, setHasSearch, search])
  const clearSearch = useCallback(() => {
    setSearch('')
    searchRestaurants('')
    setHasSearch(false)
  }, [searchRestaurants, setHasSearch])

  const returnToList = useCallback(() => {
    navigate(categoryValue.length > 0 ? `/bares-e-restaurantes` : `/`)
    setCategoryValue('')
    searchRestaurants('')
  }, [navigate, categoryValue, setCategoryValue, searchRestaurants])

  useEffect(() => {
    setTitle(t('Bares e Restaurantes'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    fetchRestaurants()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchRestaurants])

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
            <Row className="flex-column flex-md-row justify-content-between my-3">
              <Col className="d-flex">
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    onClick={returnToList}
                    style={{ border: 'none' }}
                  >
                    <AiOutlineArrowLeft size={20} style={{ color: 'black' }} />
                  </button>
                  <div className="d-flex flex-column ms-2">
                    {categoryValue.length >= 0 ? (
                      <>
                        <h2>Bares e Restaurantes</h2>
                        <h2>{categoryValue}</h2>
                      </>
                    ) : (
                      <h2 className="mb-0">Bares e Restaurantes</h2>
                    )}
                  </div>
                </div>
              </Col>
              <Col className="d-flex align-items-center justify-content-end">
                <Link to="/bares-e-restaurantes/mapa">
                  <MapButton className="me-3 my-2 py-2 px-3">
                    <FaMapMarkedAlt className="me-1" />
                    Mapa
                  </MapButton>
                </Link>
                <InputBox>
                  <input
                    type="text"
                    placeholder="Buscar bares e restaurantes"
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
            <Category
              categories={categories}
              fetchCategory={fetchCategory}
              setCategoryValue={setCategoryValue}
            />
            <Row className="justify-content-center row-cols-1 row-cols-md-3">
              {restaurants?.map((point) => (
                <Col className="d-flex my-2" key={point.id}>
                  <GeneralCardSlug
                    ponto={point}
                    pagina="bares-e-restaurantes"
                  />
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

export default memo(Restaurants)
