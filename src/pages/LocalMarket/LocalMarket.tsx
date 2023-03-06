/* eslint-disable react/jsx-props-no-spreading */
import { memo, useEffect } from 'react'

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

import Footer from 'components/Footer'
import GoogleMap from 'components/GoogleMap'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import appStore from '../../assets/app-store.png'
import googlePlay from '../../assets/google-play.png'
import { Categories, HomeBg, IconDiv, ImageDiv } from './styled'

const LocalMarket: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { loading, error, localMarket, fetchLocalMarket } = useLocalMarkets()
  const { id } = useParams()

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
        <div className="d-flex flex-column my-5">
          <div className="d-flex flex-column align-self-center">
            <Spinner animation="border" variant="primary" className="my-auto" />
          </div>
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
                    <Link to="/">
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
                  <div className="d-flex flex-md-wrap">
                    {localMarket.item.categorias.map((categoria) => (
                      <Categories
                        className="d-flex text-start me-3 mb-3"
                        key={categoria.id}
                      >
                        {categoria.label}
                      </Categories>
                    ))}
                  </div>
                  <p className="mb-5">{localMarket.item.descricao_t}</p>
                  <h3>Sobre</h3>
                  <div className="border-top mb-5">
                    {localMarket.item.addresses.map((address) => (
                      <div className="d-flex mt-3">
                        <IconDiv>
                          <BiMap size={22} className="me-2" />
                        </IconDiv>
                        <p className="d-flex text-start me-3" key={address.id}>
                          {address.label}
                        </p>
                      </div>
                    ))}
                    {localMarket?.item.phones.map((phone) => (
                      <div className="d-flex align-items-center">
                        <IconDiv>
                          {phone.whatsapp === true ? (
                            <BsWhatsapp size={22} className="me-2" />
                          ) : (
                            <BsTelephone size={22} className="me-2" />
                          )}
                        </IconDiv>
                        <div className="d-flex flex-column" key={phone.id}>
                          <p className="d-flex text-start me-3 mb-1">
                            {phone.nome}
                          </p>
                          <p className="d-flex text-start me-3">
                            {phone.number}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="d-flex ">
                      <IconDiv>
                        <AiOutlineMail size={22} className="me-2" />
                      </IconDiv>
                      <span>{localMarket?.item.email}</span>
                    </div>
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
                    )}
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
                              <AiOutlineInstagram size={22} className="me-2" />
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
                    <div className="d-flex mt-3 w-50">
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
                  </div>
                  {localMarket.item.estruturas.length > 0 && (
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
                  {localMarket.item.restricoes.length > 0 && (
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
                    <img
                      src={googlePlay}
                      alt="logo"
                      className="img-fluid w-50"
                    />
                    <img src={appStore} alt="logo" className="img-fluid w-50" />
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
