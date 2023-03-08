import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import { useTouristicPoints } from 'context/TouristicPointsContext'

import GeneralMap from 'components/GeneralMap'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import { ButtonContainer, LinkBackToHome, PageTitle } from './styled'

const TouristicPointsMap: React.FC = () => {
  const { touristicPoints, fetchTouristicPoints } = useTouristicPoints()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Mapa | Pontos Turísticos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    fetchTouristicPoints()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchTouristicPoints])

  return (
    <Wrapper>
      <Header />
      <main>
        <ButtonContainer>
          <LinkBackToHome to="/pontos-turisticos">
            <IoMdArrowBack className="me-2" />
          </LinkBackToHome>
          <PageTitle>Pontos Turísticos</PageTitle>
        </ButtonContainer>
        <GeneralMap endPoint={touristicPoints} />
      </main>
    </Wrapper>
  )
}

export default memo(TouristicPointsMap)
