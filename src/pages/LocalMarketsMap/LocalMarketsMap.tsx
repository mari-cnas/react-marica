import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

import { useLocalMarkets } from 'context/LocalMarketsContext'

import GeneralMap from 'components/GeneralMap'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { Wrapper } from 'styles/GlobalStyles'

import { ButtonContainer, LinkBackToHome, PageTitle } from './styled'

const LocalMarketsMap: React.FC = () => {
  const { localMarkets } = useLocalMarkets()
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('Mapa | Comércios Locais'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <Wrapper>
      <Header />
      <main>
        <ButtonContainer>
          <LinkBackToHome to="/comercio-local">
            <IoMdArrowBack className="me-2" />
          </LinkBackToHome>
          <PageTitle>Comércio Local</PageTitle>
        </ButtonContainer>
        <GeneralMap endPoint={localMarkets} />
      </main>
    </Wrapper>
  )
}

export default memo(LocalMarketsMap)
