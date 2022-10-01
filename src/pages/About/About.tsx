import { memo, useEffect } from 'react'

import { useAbout } from 'AboutContext/AboutContext'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import Footer from 'components/Footer'
import Header from 'components/Header'
import LanguageSwitcher from 'components/LanguageSwitcher'

import useTitle from 'hooks/useTitle'

import { AboutBg, BodyBg } from './styled'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const About: React.FC<IBaseComponentProps> = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()
  const { loading, about } = useAbout()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

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
      {!loading && (
        <>
          <AboutBg />
          <Container className="py-5">
            <BodyBg className="d-flex flex-column py-5">
              <div className="d-flex flex-column py-2 px-5">
                <div className="d-flex">
                  <Link to="/">
                    <AiOutlineArrowLeft />
                  </Link>{' '}
                  <h2> Conheça Maricá</h2>
                </div>
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: about?.sobre?.content }}
                  className="justify-content-center py-3"
                />
              </div>
            </BodyBg>
          </Container>
        </>
      )}

      <Footer />
    </>
  )
}

// <p></p>
export default memo(About)
