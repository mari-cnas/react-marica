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
import { BsTelephone, BsWhatsapp, BsHouseDoorFill } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'

import { useEventSpaces } from 'context/EventSpacesContext'

import Footer from 'components/Footer'
import GoogleMap from 'components/GoogleMap'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import appStore from '../../assets/app-store.png'
import googlePlay from '../../assets/google-play.png'
import { Categories, HomeBg, IconDiv, ImageDiv } from './styled'

const EventSpace: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { loading, error, eventSpace, fetchEventSpace } = useEventSpaces()
  const { id } = useParams()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  useEffect(() => {
    if (eventSpace?.item?.nome)
      setTitle(t(`${eventSpace.item?.nome} | Espaços para Eventos`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage, eventSpace?.item?.nome])

  useEffect(() => {
    if (id) fetchEventSpace(Number(id))
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
      {!loading && !error && eventSpace && (
        <>
          {eventSpace?.item.images.length < 4 && (
            <div className="d-flex justify-content-between">
              {eventSpace?.item.images.map((banner) => (
                <ImageDiv
                  key={banner.id}
                  capa={banner.src}
                  className="d-block w-100"
                />
              ))}
            </div>
          )}
          {eventSpace?.item.images.length >= 4 && (
            <Slider {...settings}>
              {eventSpace?.item.images.map((banner) => (
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
                    <Link to="/espacos-para-eventos">
                      <AiOutlineArrowLeft
                        size={20}
                        style={{ color: 'black' }}
                      />
                    </Link>
                    <div className="d-flex flex-column mx-2">
                      <p className="mb-1">Espaços para Eventos</p>
                      <h2 className="mb-4">{eventSpace.item.nome}</h2>
                    </div>
                  </div>
                  <div className="d-flex flex-md-wrap">
                    {eventSpace.item.categorias.map((categoria) => (
                      <Categories
                        className="d-flex text-start me-3 mb-3"
                        key={categoria.id}
                      >
                        {categoria.label}
                      </Categories>
                    ))}
                  </div>
                  <p className="mb-5">{eventSpace.item.descricao_t}</p>
                  <h3>Sobre</h3>
                  <div className="border-top mb-5">
                    {eventSpace.item.addresses != null && (
                      <>
                        {eventSpace.item.addresses.map((address) => (
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
                    {eventSpace.item.phones != null && (
                      <>
                        {eventSpace?.item.phones.map((phone) => (
                          <div className="d-flex ">
                            <IconDiv>
                              {phone.whatsapp === true ? (
                                <BsWhatsapp size={22} className="me-2" />
                              ) : (
                                <BsTelephone size={22} className="me-2" />
                              )}
                            </IconDiv>
                            <div className="d-flex flex-column" key={phone.id}>
                              <p className="d-flex text-start me-3 ">
                                {phone.nome} &nbsp; {phone.number}
                              </p>
                            </div>
                          </div>
                        ))}{' '}
                      </>
                    )}
                    {eventSpace.item.email != null && (
                      <>
                        <div className="d-flex ">
                          <IconDiv>
                            <AiOutlineMail size={22} className="me-2" />
                          </IconDiv>
                          <span>{eventSpace?.item.email}</span>
                        </div>
                        {eventSpace.item.site != null && (
                          <>
                            {eventSpace.item.site && (
                              <div className="d-flex mt-3">
                                <IconDiv>
                                  <TbWorld size={22} className="me-2" />
                                </IconDiv>
                                <a
                                  href={eventSpace?.item.site}
                                  target="_blank"
                                  className=" text-decoration-none"
                                  rel="noreferrer"
                                >
                                  {eventSpace?.item.site}
                                </a>
                              </div>
                            )}{' '}
                          </>
                        )}
                      </>
                    )}
                    {eventSpace.item.redes.length > 0 && (
                      <>
                        {eventSpace.item.redes.map((rede) => (
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
                    {eventSpace.item.horario_funcionamento.length > 0 && (
                      <div className="d-flex mt-3 w-50">
                        <IconDiv>
                          <AiOutlineClockCircle size={22} className="me-2" />
                        </IconDiv>
                        <Row>
                          <Col className="col-4">
                            {eventSpace.item.horario_funcionamento.map(
                              (horario) => (
                                <p className="fw-bold">{horario.label}</p>
                              ),
                            )}
                          </Col>
                          <Col className="col-8">
                            {eventSpace.item.horario_funcionamento.map(
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
                  {eventSpace.item.espacos.length > 0 && (
                    <>
                      <h3>Espaços</h3>
                      <div className="border-top pt-3 mb-5">
                        {eventSpace.item.espacos.map((espaco) => (
                          <div className="d-flex me-3 ">
                            <IconDiv>
                              <BsHouseDoorFill size={22} className="me-2" />
                            </IconDiv>
                            <div>
                              <h5 className="fw-bold mb-1">{espaco.nome}</h5>
                              {espaco.descricao && (
                                <p className="fst-italic mb-1 text-muted">
                                  {espaco.descricao}
                                </p>
                              )}
                              {espaco.area && (
                                <p className="mb-1 text-muted">
                                  Área: {espaco.area} m²
                                </p>
                              )}
                              {espaco.pe_direito && (
                                <p className="mb-1 text-muted">
                                  Pé direito: {espaco.pe_direito}
                                </p>
                              )}
                              {espaco.medidas && (
                                <p className="mb-1 text-muted">
                                  Medidas: {espaco.medidas}
                                </p>
                              )}
                              {espaco.capacidade && (
                                <p className="mb-3 text-muted">
                                  Capacidade: {espaco.capacidade} pessoas
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {eventSpace.item.estruturas.length > 0 && (
                    <>
                      <h3>Estruturas</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {eventSpace.item.estruturas.map((estrutura) => (
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
                  {eventSpace.item.equipamentos.length > 0 && (
                    <>
                      <h3>Equipamentos</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {eventSpace.item.equipamentos.map((equipamento) => (
                          <Col className="d-flex me-3 col-12 col-md-3">
                            <IconDiv>
                              <AiOutlineCheckCircle size={22} />
                            </IconDiv>
                            <p>
                              {equipamento.total}&nbsp;{equipamento.label}
                            </p>
                          </Col>
                        ))}
                      </Row>
                    </>
                  )}
                  {eventSpace.item.restricoes.length > 0 && (
                    <>
                      <h3>Restrições</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {eventSpace.item.restricoes.map((restricao) => (
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
                  {eventSpace.item.formas_pagamento.length > 0 && (
                    <>
                      <h3>Formas de pagamento</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {eventSpace?.item.formas_pagamento.map((pagamento) => (
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
                      lat={Number(eventSpace.item.addresses[0].lat)}
                      lng={Number(eventSpace.item.addresses[0].lng)}
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

export default memo(EventSpace)
