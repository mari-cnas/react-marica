import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import { useEventSpaces } from 'context/EventSpacesContext'

import GeneralMap from 'components/GeneralMap'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import { ButtonContainer, LinkBackToHome, PageTitle } from './styled'

const EventSpacesMap: React.FC = () => {
  const { eventSpaces } = useEventSpaces()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Mapa | Espaços para Eventos'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <Wrapper>
      <Header />
      <main>
        <ButtonContainer>
          <LinkBackToHome to="/espacos-para-eventos">
            <IoMdArrowBack className="me-2" />
          </LinkBackToHome>
          <PageTitle>Espaços para Eventos</PageTitle>
        </ButtonContainer>
        <GeneralMap endPoint={eventSpaces} />
      </main>
    </Wrapper>
  )
}

export default memo(EventSpacesMap)
