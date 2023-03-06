import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import { useHotels } from 'context/HotelsContext'

import GeneralMap from 'components/GeneralMap'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { ButtonContainer, LinkBackToHome, PageTitle } from './styled'

const HotelsMap: React.FC = () => {
  const { hotels } = useHotels()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Mapa | Hotéis e Pousadas'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <>
      <Header />
      <main>
        <ButtonContainer>
          <LinkBackToHome to="/hoteis-e-pousadas">
            <IoMdArrowBack className="me-2" />
          </LinkBackToHome>
          <PageTitle>Hotéis e Pousadas</PageTitle>
        </ButtonContainer>
        <GeneralMap endPoint={hotels} />
      </main>
    </>
  )
}

export default memo(HotelsMap)
