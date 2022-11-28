import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import { useRestaurants } from 'context/RestaurantsContext'

import GeneralMap from 'components/GeneralMap'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { ButtonContainer, LinkBackToHome, PageTitle } from './styled'

const RestaurantsMap: React.FC = () => {
  const { restaurants } = useRestaurants()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Mapa | Bares e Restaurantes'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <>
      <Header />
      <main>
        <ButtonContainer>
          <LinkBackToHome to="/bares-e-restaurantes">
            <IoMdArrowBack className="me-2" />
          </LinkBackToHome>
          <PageTitle>Bares e Restaurantes</PageTitle>
        </ButtonContainer>
        <GeneralMap endPoint={restaurants} />
      </main>
    </>
  )
}

export default memo(RestaurantsMap)
