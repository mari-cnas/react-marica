/* eslint-disable react/jsx-props-no-spreading */
import { memo, useEffect, useState } from 'react'

import { Spinner, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import {
  AiOutlineArrowLeft,
  AiOutlineMail,
  AiOutlineClockCircle,
  AiOutlineCheckCircle,
  AiFillFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'

import { useLocalMarkets } from 'context/LocalMarketsContext'

import Category from 'components/Category'
import Footer from 'components/Footer'
import GoogleMap from 'components/GoogleMap'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import appStore from '../../assets/app-store.png'
import googlePlay from '../../assets/google-play.png'
import { HomeBg, IconDiv, ImageDiv } from './styled'

const LocalMarket: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { loading, error, localMarket, fetchCategory, fetchLocalMarket } =
    useLocalMarkets()
  const { id } = useParams()
  const [categoryValue, setCategoryValue] = useState('')

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  useEffect(() => {
    if (localMarket?.item?.nome)
      setTitle(t(`${localMarket.item?.nome} | Comércio Local`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage, localMarket?.item?.nome])

  useEffect(() => {
    if (id) fetchLocalMarket(Number(id))
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
      {!loading && !error && localMarket && (
        <>
          {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
          {localMarket?.item.images.length < 4 && (
            <div className="d-flex justify-content-between">
              {localMarket?.item.images.map((banner) => (
                <ImageDiv
                  key={banner.id}
                  capa={banner.src}
                  className="d-block w-100"
                />
              ))}
            </div>
          )}
          {localMarket?.item.images.length >= 4 && (
            <Slider {...settings}>
              {localMarket?.item.images.map((banner) => (
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
                    <Link to="/comercio-local">
                      <AiOutlineArrowLeft
                        size={20}
                        style={{ color: 'black' }}
                      />
                    </Link>
                    <div className="d-flex flex-column mx-2">
                      <p className="mb-1">Comércio Local</p>
                      <h2 className="mb-4">{localMarket.item.nome}</h2>
                    </div>
                  </div>
                  <Category
                    categories={localMarket.item.categorias}
                    fetchCategory={fetchCategory}
                    setCategoryValue={setCategoryValue}
                  />
                  <p className="mb-5">{localMarket.item.descricao_t}</p>
                  <h3>Sobre</h3>
                  <div className="border-top mb-5">
                    {localMarket.item.addresses != null && (
                      <>
                        {localMarket.item.addresses.map((address) => (
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
                    {localMarket.item.phones != null && (
                      <>
                        {localMarket?.item.phones.map((phone) => (
                          <div className="d-flex ">
                            <IconDiv>
                              {phone.whatsapp === true ? (
                                <BsWhatsapp size={22} className="me-2" />
                              ) : (
                                <BsTelephone size={22} className="me-2" />
                              )}
                            </IconDiv>
                            <div className="d-flex flex-column" key={phone.id}>
                              <p className="d-flex text-start me-3">
                                {phone.nome} &nbsp;{phone.number}
                              </p>
                            </div>
                          </div>
                        ))}{' '}
                      </>
                    )}
                    {localMarket.item.email != null && (
                      <div className="d-flex ">
                        <IconDiv>
                          <AiOutlineMail size={22} className="me-2" />
                        </IconDiv>
                        <span>{localMarket?.item.email}</span>
                      </div>
                    )}
                    {localMarket.item.site != null && (
                      <>
                        {localMarket.item.site && (
                          <div className="d-flex mt-3">
                            <IconDiv>
                              <TbWorld size={22} className="me-2" />
                            </IconDiv>
                            <a
                              href={localMarket?.item.site}
                              target="_blank"
                              className=" text-decoration-none"
                              rel="noreferrer"
                            >
                              {localMarket?.item.site}
                            </a>
                          </div>
                        )}{' '}
                      </>
                    )}
                    {localMarket.item.redes != null && (
                      <>
                        {localMarket.item.redes.map((rede) => (
                          <div className="d-flex mt-3">
                            <IconDiv>
                              {rede.nome === 'Facebook' ? (
                                <div className="d-flex">
                                  <AiFillFacebook size={22} className="me-2" />
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
                              ) : (
                                <div className="d-flex">
                                  <AiOutlineInstagram
                                    size={22}
                                    className="me-2"
                                  />
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
                              )}
                            </IconDiv>
                          </div>
                        ))}
                      </>
                    )}
                    {localMarket.item.horario_funcionamento.length > 0 && (
                      <div className="d-flex ">
                        <IconDiv>
                          <AiOutlineClockCircle size={22} className="me-2" />
                        </IconDiv>
                        <Row>
                          <Col className="col-4">
                            {localMarket.item.horario_funcionamento.map(
                              (horario) => (
                                <p className="fw-bold">{horario.label}</p>
                              ),
                            )}
                          </Col>
                          <Col className="col-8">
                            {localMarket.item.horario_funcionamento.map(
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
                  {localMarket.item?.estruturas?.length > 0 && (
                    <>
                      <h3>Estruturas</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {localMarket.item.estruturas.map((estrutura) => (
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
                  {localMarket.item?.restricoes?.length > 0 && (
                    <>
                      <h3>Restrições</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {localMarket.item.restricoes.map((restricao) => (
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
                  {localMarket.item?.formas_pagamento?.length > 0 && (
                    <>
                      <h3>Formas de pagamento</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {localMarket?.item.formas_pagamento.map((pagamento) => (
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
                      lat={Number(localMarket.item.addresses[0].lat)}
                      lng={Number(localMarket.item.addresses[0].lng)}
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

export default memo(LocalMarket)
