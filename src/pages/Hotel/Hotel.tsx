/* eslint-disable react/jsx-props-no-spreading */
import { memo, useEffect, useState } from 'react'

import { Spinner, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import {
  AiOutlineArrowLeft,
  AiOutlineMail,
  AiOutlineCheckCircle,
} from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { BsTelephone, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import { GiKnifeFork } from 'react-icons/gi'
import { IoMdKey } from 'react-icons/io'
import { MdDinnerDining } from 'react-icons/md'
import { RiCupFill } from 'react-icons/ri'
import { TbWorld } from 'react-icons/tb'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'

import { useHotels } from 'context/HotelsContext'

import Category from 'components/Category'
import Footer from 'components/Footer'
import GoogleMap from 'components/GoogleMap'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import appStore from '../../assets/app-store.png'
import googlePlay from '../../assets/google-play.png'
import { HomeBg, IconDiv, ImageDiv } from './styled'

const Hotel: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { loading, error, hotel, fetchCategory, fetchHotel } = useHotels()

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
    if (hotel?.item?.nome)
      setTitle(t(`${hotel?.item?.nome} | Hotéis e Pousadas`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage, hotel?.item?.nome])

  useEffect(() => {
    if (id) fetchHotel(Number(id))
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
      {!loading && !error && hotel && (
        <>
          {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
          {hotel?.item.images.length < 4 && (
            <div className="d-flex justify-content-between">
              {hotel?.item.images.map((banner) => (
                <ImageDiv
                  key={banner.id}
                  capa={banner.src}
                  className="d-block w-100"
                />
              ))}
            </div>
          )}
          {hotel?.item.images.length >= 4 && (
            <Slider {...settings}>
              {hotel?.item.images.map((banner) => (
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
                    <Link to="/hoteis-e-pousadas">
                      <AiOutlineArrowLeft
                        size={20}
                        style={{ color: 'black' }}
                      />
                    </Link>
                    <div className="d-flex flex-column mx-2">
                      <p className="mb-1"> Hotéis e Pousadas</p>
                      <h2 className="mb-4">{hotel?.item.nome}</h2>
                    </div>
                  </div>
                  <Category
                    categories={hotel.item.categorias}
                    fetchCategory={fetchCategory}
                    setCategoryValue={setCategoryValue}
                  />
                  <p className="mb-5">{hotel?.item.descricao_t}</p>
                  <h3>Sobre</h3>
                  <div className="border-top mb-5">
                    {hotel.item.addresses != null && (
                      <>
                        {hotel?.item.addresses.map((address) => (
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
                        ))}{' '}
                      </>
                    )}
                    {hotel.item.phones != null && (
                      <>
                        {hotel?.item.phones.map((phone) => (
                          <div className="d-flex">
                            <IconDiv>
                              {phone.whatsapp === true ? (
                                <BsWhatsapp size={22} className="me-2" />
                              ) : (
                                <BsTelephone size={22} className="me-2" />
                              )}
                            </IconDiv>
                            <div className="d-flex flex-column" key={phone.id}>
                              <p className="d-flex text-start me-3 ">
                                {phone.nome} &nbsp;{phone.number}
                              </p>
                            </div>
                          </div>
                        ))}{' '}
                      </>
                    )}
                    {hotel.item.email != null && (
                      <div className="d-flex ">
                        <IconDiv>
                          <AiOutlineMail size={22} className="me-2" />
                        </IconDiv>
                        <span>{hotel?.item.email}</span>
                      </div>
                    )}
                    {hotel.item.site != null && (
                      <div className="d-flex mt-3">
                        <IconDiv>
                          <TbWorld size={22} className="me-2" />
                        </IconDiv>
                        <a
                          href={`https://${hotel?.item.site}`}
                          target="_blank"
                          className=" text-decoration-none"
                          rel="noreferrer"
                        >
                          {hotel?.item.site}
                        </a>
                      </div>
                    )}
                    {hotel.item.redes != null && (
                      <>
                        {hotel.item.redes.map((rede) => (
                          <div className="d-flex mt-3">
                            <IconDiv>
                              <BsFacebook size={22} className="me-2" />
                            </IconDiv>
                            <a
                              href="https://www.facebook.com/pnsdoamparomarica/"
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
                  </div>
                  {hotel.item?.quartos > 0 && (
                    <>
                      <h3>Comodidades</h3>
                      <div className="d-flex flex-column border-top pt-3 mb-5">
                        <div>
                          <IconDiv>
                            <IoMdKey size={22} className="me-2" />
                          </IconDiv>
                          <span>{hotel?.item.quartos} quartos </span>
                        </div>
                        <Row>
                          <Col className="d-flex mt-3 align-items-center">
                            <IconDiv>
                              <RiCupFill size={22} className="me-2" />
                            </IconDiv>
                            <div className="d-flex flex-column">
                              <p className="mb-1">Café da manhã</p>
                              {hotel?.item.cafe_manha === true ? (
                                <p>Aceita não-hóspedes</p>
                              ) : (
                                ' '
                              )}
                            </div>
                          </Col>
                          <Col className="d-flex mt-3 align-items-center">
                            <IconDiv>
                              <GiKnifeFork size={22} className="me-2" />
                            </IconDiv>
                            <div className="d-flex flex-column">
                              <p className="mb-1">Almoço</p>
                              {hotel?.item.almoco === true ? (
                                <p>Aceita não-hóspedes</p>
                              ) : (
                                ' '
                              )}
                            </div>
                          </Col>
                          <Col className="d-flex mt-3 align-items-center">
                            <IconDiv>
                              <MdDinnerDining size={22} className="me-2" />
                            </IconDiv>
                            <div className="d-flex flex-column">
                              <p className="mb-1">Jantar</p>
                              {hotel?.item.jantar === true ? (
                                <p>Aceita não-hóspedes</p>
                              ) : (
                                ' '
                              )}
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </>
                  )}
                  {hotel.item?.estruturas.length > 0 && (
                    <>
                      <h3>Estruturas</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {hotel.item.estruturas.map((estrutura) => (
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
                  {hotel.item?.formas_pagamento.length > 0 && (
                    <>
                      <h3>Formas de pagamento</h3>
                      <Row className="border-top pt-3 mb-5 justify-content-between">
                        {hotel?.item.formas_pagamento.map((pagamento) => (
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
                      lat={Number(hotel.item.addresses[0].lat)}
                      lng={Number(hotel.item.addresses[0].lng)}
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

export default memo(Hotel)
