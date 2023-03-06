/* eslint-disable react/jsx-props-no-spreading */
import { memo, useEffect } from 'react'

import { Spinner, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft, AiOutlineCheckCircle } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { BsTelephone, BsFacebook } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'

import { useTouristicPoints } from 'context/TouristicPointsContext'

import Footer from 'components/Footer'
import GoogleMap from 'components/GoogleMap'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import appStore from '../../assets/app-store.png'
import googlePlay from '../../assets/google-play.png'
import { Categories, HomeBg, IconDiv, ImageDiv } from './styled'

const TouristicPoint: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { loading, error, touristicPoint, fetchTouristicPoint } =
    useTouristicPoints()
  const { id } = useParams()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  useEffect(() => {
    if (touristicPoint?.item?.nome)
      setTitle(t(`${touristicPoint?.item?.nome} | Pontos Turísticos`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage, touristicPoint?.item?.nome])

  useEffect(() => {
    if (id) fetchTouristicPoint(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Header />
      {loading && (
        <div className="d-flex flex-column my-5">
          <div className="d-flex flex-column align-self-center">
            <Spinner animation="border" variant="primary" className="my-auto" />
          </div>
        </div>
      )}
      {!loading && !error && touristicPoint && (
        <>
          {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
          {touristicPoint?.item.images.length < 4 && (
            <div className="d-flex justify-content-between">
              {touristicPoint?.item.images.map((banner) => (
                <ImageDiv
                  key={banner.id}
                  capa={banner.src}
                  className="d-block w-100"
                />
              ))}
            </div>
          )}
          {touristicPoint?.item.images.length >= 4 && (
            <Slider {...settings}>
              {touristicPoint?.item.images.map((banner) => (
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
                      <p className="mb-1"> Pontos Turísticos</p>
                      <h2 className="mb-4">{touristicPoint.item.nome}</h2>
                    </div>
                  </div>
                  <div className="d-flex ">
                    {touristicPoint.item.categorias.map((categoria) => (
                      <Categories
                        className="d-flex text-start me-3 mb-3"
                        key={categoria.id}
                      >
                        {categoria.label}
                      </Categories>
                    ))}
                  </div>
                  <p className="mb-5">{touristicPoint.item.descricao_t}</p>
                  <h3>Sobre</h3>
                  <div className="border-top mb-5">
                    {touristicPoint.item.addresses.map((address) => (
                      <div className="d-flex mt-3">
                        <IconDiv>
                          <BiMap size={22} className="me-2" />
                        </IconDiv>
                        <p className="d-flex text-start me-3" key={address.id}>
                          {address.label}
                        </p>
                      </div>
                    ))}
                    {touristicPoint.item.phones.map((phone) => (
                      <div className="d-flex mt-3">
                        <IconDiv>
                          <BsTelephone size={22} className="me-2" />
                        </IconDiv>
                        <p className="d-flex text-start me-3" key={phone.id}>
                          {phone.nome}
                          {phone.number}
                        </p>
                      </div>
                    ))}
                    {touristicPoint.item.redes.map((rede) => (
                      <div className="d-flex mt-3">
                        <IconDiv>
                          <BsFacebook size={22} className="me-2" />
                        </IconDiv>
                        <a
                          href={rede.url}
                          className="d-flex text-start me-3 text-decoration-none"
                          key={rede.nome}
                        >
                          {rede.user}
                        </a>
                      </div>
                    ))}
                  </div>
                  <h3>Dicas</h3>
                  <div className="border-top pt-3 mb-5">
                    {touristicPoint.item.dicas_t}
                  </div>
                  <h3>Valor de Entrada</h3>
                  <div className="border-top pt-3 mb-5 d-flex">
                    <IconDiv>
                      <FaRegMoneyBillAlt className="me-2" />
                    </IconDiv>
                    <p>
                      {touristicPoint.item.gratuito === 1 ? 'Gratuita' : ''}
                    </p>
                  </div>
                  <h3>Tipos de Viajantes</h3>
                  <Row className="border-top pt-3 mb-5 justify-content-between">
                    {touristicPoint.item.viajantes.map((viajante) => (
                      <Col className=" d-flex me-3 col-12 col-md-3">
                        <IconDiv>
                          <AiOutlineCheckCircle className="me-2" />
                        </IconDiv>
                        <p>{viajante.label}</p>
                      </Col>
                    ))}
                  </Row>
                  <h3>Estruturas</h3>
                  <Row className="border-top pt-3 mb-5 justify-content-between">
                    {touristicPoint.item.estruturas.map((estrutura) => (
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
                  <h3>Restrições</h3>
                  <Row className="border-top pt-3 mb-5 justify-content-between">
                    {touristicPoint.item.restricoes.map((restricao) => (
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
                </Col>
                <Col className="col-12 col-md-4 ">
                  <p className="fw-bold">Localização</p>

                  <div style={{ height: 300 }}>
                    <GoogleMap
                      lat={Number(touristicPoint.item.addresses[0].lat)}
                      lng={Number(touristicPoint.item.addresses[0].lng)}
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
    </>
  )
}

export default memo(TouristicPoint)
