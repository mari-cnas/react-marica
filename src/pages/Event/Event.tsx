/* eslint-disable react/jsx-props-no-spreading */
import { memo, useEffect, useState } from 'react'

import { getDate, getHours, getYear } from 'date-fns'
import { Spinner, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import {
  AiOutlineArrowLeft,
  AiOutlineMail,
  AiOutlineCheckCircle,
  AiFillFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'

import { useEvents } from 'context/EventsContext'

import Category from 'components/Category'
import Footer from 'components/Footer'
import GoogleMap from 'components/GoogleMap'
import Header from 'components/Header'

import {
  formatEndDate,
  formatStartDate,
  getMonthAbbreviation,
  getMonthName,
  normalizeMinutes,
} from 'helpers'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import appStore from '../../assets/app-store.png'
import googlePlay from '../../assets/google-play.png'
import { HomeBg, IconDiv, ImageDiv } from './styled'

const Event: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { loading, error, event, fetchCategory, fetchEvent } = useEvents()
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
    if (event?.item?.nome) setTitle(t(`${event.item?.nome} | Eventos`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage, event?.item?.nome])

  useEffect(() => {
    if (id) fetchEvent(Number(id))
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
      {!loading && !error && event && (
        <>
          {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
          {event?.item.images.length < 4 && (
            <div className="d-flex justify-content-between">
              {event?.item.images.map((banner) => (
                <ImageDiv
                  key={banner.id}
                  capa={banner.src}
                  className="d-block w-100"
                />
              ))}
            </div>
          )}
          {event?.item.images.length >= 4 && (
            <Slider {...settings}>
              {event?.item.images.map((banner) => (
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
                    <Link to="/eventos">
                      <AiOutlineArrowLeft
                        size={20}
                        style={{ color: 'black' }}
                      />
                    </Link>
                    <div className="d-flex flex-column mx-2">
                      <p className="mb-1">Eventos</p>
                      <h2 className="mb-4">{event.item.nome}</h2>
                    </div>
                  </div>

                  <Category
                    categories={event.item.categorias}
                    fetchCategory={fetchCategory}
                    setCategoryValue={setCategoryValue}
                  />

                  {event?.item.datahora_inicio_f && event?.item.datahora_fim_f && (
                    <div className="d-flex">
                      <div className="d-flex flex-column align-items-center me-3">
                        <span style={{ color: '#dc3545' }}>
                          {getMonthAbbreviation(
                            formatStartDate(event.item.datahora_inicio_f),
                          )}
                        </span>
                        <span>
                          {getDate(
                            new Date(
                              formatStartDate(event.item.datahora_inicio_f),
                            ),
                          )}
                        </span>
                      </div>
                      <div>
                        <div>
                          De:{' '}
                          {`${getDate(
                            new Date(
                              formatStartDate(event.item.datahora_inicio_f),
                            ),
                          )} de ${getMonthName(
                            formatStartDate(event.item.datahora_inicio_f),
                          )} de ${getYear(
                            new Date(
                              formatStartDate(event.item.datahora_inicio_f),
                            ),
                          )}, às ${getHours(
                            new Date(
                              formatStartDate(event.item.datahora_inicio_f),
                            ),
                          )}:${`${normalizeMinutes(
                            new Date(
                              formatStartDate(event.item.datahora_inicio_f),
                            ),
                          )}`}h`}
                        </div>
                        <div>
                          Até:{' '}
                          {`${getDate(
                            new Date(formatEndDate(event.item.datahora_fim_f)),
                          )} de ${getMonthName(
                            formatEndDate(event.item.datahora_fim_f),
                          )} de ${getYear(
                            new Date(formatEndDate(event.item.datahora_fim_f)),
                          )}, às ${getHours(
                            new Date(formatEndDate(event.item.datahora_fim_f)),
                          )}:${`${normalizeMinutes(
                            new Date(
                              formatStartDate(event.item.datahora_inicio_f),
                            ),
                          )}`}h`}
                        </div>
                      </div>
                    </div>
                  )}
                  <p className="mb-5 my-3">{event.item.descricao_t}</p>
                  <h3>Sobre</h3>
                  <div className="border-top mb-5">
                    {event.item.addresses != null && (
                      <>
                        {event.item.addresses.map((address) => (
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
                    {event.item.phones != null && (
                      <>
                        {event?.item.phones.map((phone) => (
                          <div className="d-flex align-items-center">
                            <IconDiv>
                              {phone.whatsapp === true ? (
                                <BsWhatsapp size={22} className="me-2" />
                              ) : (
                                <BsTelephone size={22} className="me-2" />
                              )}
                            </IconDiv>
                            <div className="d-flex flex-column" key={phone.id}>
                              <p className="d-flex text-start me-3">
                                {phone.nome} &nbsp; {phone.number}
                              </p>
                            </div>
                          </div>
                        ))}{' '}
                      </>
                    )}
                    {event.item.email != null && (
                      <>
                        {event.item.email && (
                          <div className="d-flex ">
                            <IconDiv>
                              <AiOutlineMail size={22} className="me-2" />
                            </IconDiv>
                            <span>{event?.item.email}</span>
                          </div>
                        )}{' '}
                      </>
                    )}
                    {event.item.site != null && (
                      <>
                        {event.item.site && (
                          <div className="d-flex mt-3">
                            <IconDiv>
                              <TbWorld size={22} className="me-2" />
                            </IconDiv>
                            <a
                              href={event?.item.site}
                              target="_blank"
                              className=" text-decoration-none"
                              rel="noreferrer"
                            >
                              {event?.item.site}
                            </a>
                          </div>
                        )}{' '}
                      </>
                    )}

                    {event.item.redes.length > 0 && (
                      <>
                        {event.item.redes.map((rede) => (
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
                  </div>
                  {event.item?.gratuito === 1 && (
                    <>
                      <h3>Valor de Entrada</h3>
                      <div className="border-top pt-3 mb-5 d-flex">
                        <IconDiv>
                          <FaRegMoneyBillAlt className="me-2" />
                        </IconDiv>
                        <p>{event.item.gratuito === 1 ? 'Gratuita' : ''}</p>
                      </div>
                    </>
                  )}
                  {event.item.estruturas.length > 0 && (
                    <>
                      <h3>Estruturas</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {event.item.estruturas.map((estrutura) => (
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
                  {event.item.restricoes.length > 0 && (
                    <>
                      <h3>Restrições</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {event.item.restricoes.map((restricao) => (
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
                  {event.item.formas_pagamento.length > 0 && (
                    <>
                      <h3>Formas de pagamento</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {event?.item.formas_pagamento.map((pagamento) => (
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
                  {event?.item?.addresses.length > 0 ? (
                    <div style={{ height: 300 }}>
                      <GoogleMap
                        lat={Number(event?.item.addresses[0].lat)}
                        lng={Number(event?.item.addresses[0].lng)}
                        zoom={15}
                      />
                    </div>
                  ) : (
                    'Localização Indisponível'
                  )}
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

export default memo(Event)
