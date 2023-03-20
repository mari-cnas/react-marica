/* eslint-disable react/jsx-props-no-spreading */
import { memo, useEffect, useState } from 'react'

import { Spinner, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import {
  AiOutlineArrowLeft,
  AiOutlineMail,
  AiOutlineClockCircle,
  AiOutlineCheckCircle,
} from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { BsTelephone, BsFacebook } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'

import { useRestaurants } from 'context/RestaurantsContext'

import Category from 'components/Category'
import Footer from 'components/Footer'
import GoogleMap from 'components/GoogleMap'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import appStore from '../../assets/app-store.png'
import googlePlay from '../../assets/google-play.png'
import { HomeBg, IconDiv, ImageDiv } from './styled'

const Restaurant: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { loading, error, restaurant, fetchCategory, fetchRestaurant } =
    useRestaurants()
  const { id } = useParams()
  const [categoryValue, setCategoryValue] = useState('')

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  const priceRange = (range: number): string[] => {
    const colorIconArray = []
    for (let i = 0; i < range; i += 1) {
      colorIconArray.push('rgb(110, 189, 0)')
    }
    for (let i = 0; i < 5 - range; i += 1) {
      colorIconArray.push('#cccccc')
    }
    return colorIconArray
  }

  useEffect(() => {
    if (restaurant?.item?.nome)
      setTitle(t(`${restaurant.item?.nome} | Bares e Restaurantes`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage, restaurant?.item?.nome])

  useEffect(() => {
    if (id) fetchRestaurant(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <Wrapper>
      <Header />
      {loading && (
        <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {!loading && !error && restaurant && (
        <>
          {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
          {restaurant?.item.images.length < 4 && (
            <div className="d-flex justify-content-between">
              {restaurant?.item.images.map((banner) => (
                <ImageDiv
                  key={banner.id}
                  capa={banner.src}
                  className="d-block w-100"
                />
              ))}
            </div>
          )}
          {restaurant?.item.images.length >= 4 && (
            <Slider {...settings}>
              {restaurant?.item.images.map((banner) => (
                <ImageDiv
                  key={banner.id}
                  capa={banner.src}
                  className="d-block w-100"
                />
              ))}
            </Slider>
          )}
          <HomeBg className="d-flex flex-column py-5">
            <Container className="py-1">
              <Row sm={1} className=" justify-content-between d-flex flex-wrap">
                <Col className="col-12 col-md-8 ">
                  <div className="d-flex align-items-center">
                    <Link to="/bares-e-restaurantes">
                      <AiOutlineArrowLeft
                        size={20}
                        style={{ color: 'black' }}
                      />
                    </Link>
                    <div className="d-flex flex-column mx-2">
                      <p className="mb-1">Bares e Restaurantes</p>
                      <h2 className="mb-4">{restaurant.item.nome}</h2>
                    </div>
                  </div>
                  <Category
                    categories={restaurant.item.categorias}
                    fetchCategory={fetchCategory}
                    setCategoryValue={setCategoryValue}
                  />
                  <p className="mb-5">{restaurant.item.descricao_t}</p>
                  <h3>Sobre</h3>
                  <div className="border-top mb-5">
                    {restaurant.item.addresses != null && (
                      <>
                        {restaurant.item.addresses.map((address) => (
                          <div className="d-flex mt-3">
                            <IconDiv>
                              <BiMap size={22} className="me-2" />
                            </IconDiv>
                            <p
                              className="d-flex text-start me-3"
                              key={address.id}
                            >
                              {address.label}
                            </p>
                          </div>
                        ))}
                      </>
                    )}
                    {restaurant.item.phones != null && (
                      <>
                        {restaurant.item.phones.map((phone) => (
                          <div className="d-flex ">
                            <IconDiv>
                              <BsTelephone size={22} className="me-2" />
                            </IconDiv>
                            <p
                              className="d-flex text-start me-3"
                              key={phone.id}
                            >
                              {phone.nome} &nbsp;{phone.number}
                            </p>
                          </div>
                        ))}
                      </>
                    )}
                    {restaurant.item.email != null && (
                      <div className="d-flex ">
                        <IconDiv>
                          <AiOutlineMail size={22} className="me-2" />
                        </IconDiv>
                        <span>{restaurant?.item.email}</span>
                      </div>
                    )}
                    {restaurant.item.site != null && (
                      <div className="d-flex mt-3">
                        <IconDiv>
                          <TbWorld size={22} className="me-2" />
                        </IconDiv>
                        <a
                          href={`https://${restaurant?.item.site}`}
                          target="_blank"
                          className=" text-decoration-none"
                          rel="noreferrer"
                        >
                          {restaurant?.item.site}
                        </a>
                      </div>
                    )}
                    {restaurant.item.redes != null && (
                      <>
                        {restaurant.item.redes.map((rede) => (
                          <div className="d-flex mt-3">
                            <IconDiv>
                              <BsFacebook size={22} className="me-2" />
                            </IconDiv>
                            <a
                              href={rede.url}
                              target="_blank"
                              className="d-flex text-start me-3 text-decoration-none"
                              key={rede.nome}
                              rel="noreferrer"
                            >
                              {rede.user}
                            </a>
                          </div>
                        ))}
                      </>
                    )}
                    {restaurant.item.horario_funcionamento.length > 0 && (
                      <div className="d-flex mt-3 ">
                        <IconDiv>
                          <AiOutlineClockCircle size={22} className="me-2" />
                        </IconDiv>
                        <Row>
                          <Col className="col-4">
                            {restaurant.item.horario_funcionamento.map(
                              (horario) => (
                                <p className="fw-bold">{horario.label}</p>
                              ),
                            )}
                          </Col>
                          <Col className="col-8">
                            {restaurant.item.horario_funcionamento.map(
                              (horario) => (
                                <p>
                                  {horario.horario.abre} às{' '}
                                  {horario.horario.fecha}
                                </p>
                              ),
                            )}
                          </Col>
                        </Row>
                      </div>
                    )}
                  </div>
                  <h3>Faixa de preço</h3>
                  <div className="border-top pt-3 mb-5 d-flex">
                    <IconDiv>
                      {restaurant?.item.faixa_preco &&
                        priceRange(restaurant?.item.faixa_preco)?.map(
                          (_priceRange) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <MdAttachMoney
                              size={22}
                              className="me-2"
                              key={id}
                              color={_priceRange}
                            />
                          ),
                        )}
                    </IconDiv>
                  </div>
                  {restaurant.item?.refeicoes?.length > 0 && (
                    <>
                      <h3>Refeições</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {restaurant?.item.refeicoes.map((refeicao) => (
                          <Col className="d-flex me-3 col-12 col-md-3">
                            <IconDiv>
                              <AiOutlineCheckCircle size={22} />
                            </IconDiv>
                            <p>{refeicao.label}</p>
                          </Col>
                        ))}
                      </Row>
                    </>
                  )}
                  {restaurant.item?.refeicoes?.length > 0 && (
                    <>
                      <h3>Cozinhas</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {restaurant?.item.cozinhas.map((cozinha) => (
                          <Col className="d-flex me-3 col-12 col-md-3">
                            <IconDiv>
                              <AiOutlineCheckCircle size={22} />
                            </IconDiv>
                            <p>{cozinha.label}</p>
                          </Col>
                        ))}
                      </Row>
                    </>
                  )}
                  {restaurant.item?.estruturas?.length > 0 && (
                    <>
                      <h3>Estruturas</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {restaurant.item.estruturas.map((estrutura) => (
                          <Col className="d-flex me-3 col-12 col-md-3">
                            <IconDiv>
                              <SVG
                                src={estrutura.icone}
                                fill="rgb(110, 189, 0)"
                                className="me-2"
                              />
                            </IconDiv>
                            <p>{estrutura.label}</p>
                          </Col>
                        ))}
                      </Row>
                    </>
                  )}
                  {restaurant.item?.restricoes?.length > 0 && (
                    <>
                      <h3>Restrições</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {restaurant.item.restricoes.map((restricao) => (
                          <Col className="d-flex me-3 col-12 col-md-3">
                            <IconDiv>
                              <SVG
                                src={restricao.icone}
                                fill="rgb(110, 189, 0)"
                                className="me-2"
                              />
                            </IconDiv>
                            <p>{restricao.label}</p>
                          </Col>
                        ))}
                      </Row>
                    </>
                  )}
                  {restaurant.item?.formas_pagamento?.length > 0 && (
                    <>
                      <h3>Formas de pagamento</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {restaurant?.item.formas_pagamento.map((pagamento) => (
                          <Col className="d-flex me-3 col-12 col-md-3">
                            <IconDiv>
                              <AiOutlineCheckCircle size={22} />
                            </IconDiv>
                            <p>{pagamento.label}</p>
                          </Col>
                        ))}
                      </Row>
                    </>
                  )}
                </Col>
                <Col className="col-12 col-md-4 ">
                  <p className="fw-bold">Localização</p>

                  <div style={{ height: 300 }}>
                    <GoogleMap
                      lat={Number(restaurant.item.addresses[0].lat)}
                      lng={Number(restaurant.item.addresses[0].lng)}
                      zoom={15}
                    />
                  </div>
                  <p className="fw-bold my-2">Conheça nosso app</p>
                  <div className="d-flex">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.marica2030.app"
                      target="_blank"
                      rel="noreferrer"
                      className="w-50 me-1"
                    >
                      <img src={googlePlay} alt="logo" className="img-fluid" />
                    </a>
                    <a
                      href="https://apps.apple.com/br/app/maric%C3%A1-oficial/id1493299199"
                      target="_blank"
                      rel="noreferrer"
                      className="w-50 ms-1"
                    >
                      <img src={appStore} alt="logo" className="img-fluid" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </HomeBg>
        </>
      )}

      <Footer />
    </Wrapper>
  )
}

export default memo(Restaurant)
