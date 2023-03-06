import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { useAbout } from 'context/AboutContext'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import { AboutBg, BodyBg } from './styled'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const About: React.FC<IBaseComponentProps> = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { loading, about, error, fetchAbout } = useAbout()

  useEffect(() => {
    setTitle(t('Sobre'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    fetchAbout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Header />
      {loading && (
        <div className="d-flex flex-column my-5">
          <div className="d-flex flex-column align-self-center">
            <p>Carregando informações...</p>
          </div>
        </div>
      )}
      {!loading && !error && (
        <>
          <AboutBg />
          <Container className="py-5">
            <BodyBg className="d-flex flex-column py-5">
              <div className="d-flex flex-column py-2 px-5">
                <div className="d-flex align-items-center">
                  <Link to="/" title="voltar">
                    <AiOutlineArrowLeft
                      style={{ color: 'black' }}
                      className="me-2"
                      size={20}
                    />
                  </Link>{' '}
                  <h2 className="mb-0"> Conheça Maricá</h2>
                </div>
                <div
                  // eslint-disable-next-line react/no-danger, @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
                  dangerouslySetInnerHTML={{ __html: about?.sobre?.content! }}
                  className="justify-content-center py-3"
                />
              </div>
            </BodyBg>
          </Container>
        </>
      )}

      <Footer />
    </Wrapper>
  )
}

export default memo(About)
