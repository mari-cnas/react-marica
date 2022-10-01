import { memo, useEffect } from 'react'

// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft, AiOutlineCheckCircle } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { BsTelephone, BsFacebook } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import { useTouristicPoints } from 'TouristicPointsContext/TouristicPointsContext'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import appStore from '../../assets/app-store.png'
import googlePlay from '../../assets/google-play.png'
import { Categories, HomeBg, IconDiv } from './styled'

const TouristicPoint: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { loading, error, touristicPoint, fetchTouristicPoint } =
    useTouristicPoints()
  const { id } = useParams()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

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
            <p>Carregando informações...</p>
          </div>
        </div>
      )}
      {!loading && !error && touristicPoint && (
        <>
          <Row>
            <Carousel>
              {touristicPoint?.item.images.map((banner) => (
                <Carousel.Item key={banner.id}>
                  <img
                    className="d-block w-100"
                    style={{ height: 250 }}
                    src={banner.src}
                    alt="First"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Row>
          <HomeBg className="d-flex flex-column py-5">
            <Container className="py-1">
              <Row className=" justify-content-between">
                <Col className=" col-md-8 ">
                  <Link to="/">
                    <AiOutlineArrowLeft />
                  </Link>{' '}
                  <div className="d-flex flex-column">
                    <p> Pontos Turísticos</p>
                    <h2>{touristicPoint.item.nome}</h2>
                  </div>
                  <div className="d-flex ">
                    {touristicPoint.item.categorias.map((categoria) => (
                      <Categories
                        className="d-flex text-start me-3"
                        key={categoria.id}
                      >
                        {categoria.label}
                      </Categories>
                    ))}
                  </div>
                  <p>{touristicPoint.item.descricao_t}</p>
                  <h3>Sobre</h3>
                  <div className="border-top mb-5">
                    {touristicPoint.item.addresses.map((address) => (
                      <div className="d-flex">
                        <IconDiv>
                          <BiMap />
                        </IconDiv>
                        <p className="d-flex text-start me-3" key={address.id}>
                          {address.label}
                        </p>
                      </div>
                    ))}
                    {touristicPoint.item.phones.map((phone) => (
                      <div className="d-flex">
                        <IconDiv>
                          <BsTelephone />
                        </IconDiv>
                        <p className="d-flex text-start me-3" key={phone.id}>
                          {phone.nome}
                          {phone.number}
                        </p>
                      </div>
                    ))}
                    {touristicPoint.item.redes.map((rede) => (
                      <div className="d-flex">
                        <IconDiv>
                          <BsFacebook />
                        </IconDiv>
                        <p className="d-flex text-start me-3" key={rede.nome}>
                          {rede.user}
                        </p>
                      </div>
                    ))}
                  </div>
                  <h3>Dicas</h3>
                  <div className="border-top mb-5">
                    {touristicPoint.item.dicas_t}
                  </div>
                  <h3>Valor de Entrada</h3>
                  <div className="border-top mb-5 d-flex">
                    <IconDiv>
                      <FaRegMoneyBillAlt />
                    </IconDiv>
                    <p>
                      {touristicPoint.item.gratuito == '1' ? 'Gratuita' : ''}
                    </p>
                  </div>
                  <h3>Tipos de Viajantes</h3>
                  <div className="border-top mb-5 d-flex flex-column">
                    {touristicPoint.item.viajantes.map((viajante) => (
                      <div className="d-flex me-3">
                        <IconDiv>
                          <AiOutlineCheckCircle />
                        </IconDiv>
                        <p>{viajante.label}</p>
                      </div>
                    ))}
                  </div>
                  <h3>Estruturas</h3>
                  <div className="border-top mb-5 d-flex flex-column">
                    {touristicPoint.item.estruturas.map((estrutura) => (
                      <div className="d-flex me-3">
                        <IconDiv>
                          <ReactSVG src={estrutura.icone} />
                        </IconDiv>
                        <p>{estrutura.label}</p>
                      </div>
                    ))}
                  </div>
                  <h3>Restrições</h3>
                  <div className="border-top mb-5 d-flex flex-column">
                    {touristicPoint.item.restricoes.map((restricao) => (
                      <div className="d-flex me-3">
                        <IconDiv>
                          <ReactSVG src={restricao.icone} />
                        </IconDiv>
                        <p>{restricao.label}</p>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col className=" col-md-4 ">
                  <p>Localização</p>
                  <p>Conheça nosso app</p>
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
