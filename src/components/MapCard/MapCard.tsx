import { memo } from 'react'

import { PageType } from 'types/PageType'

import {
  ButtonCategory,
  CardContainer,
  ImageBackground,
  ImageLink,
  LinkTitle,
  PageTitle,
} from './styled'

interface IPagesCardProps {
  apiContent: PageType
  fetchCategory?: (id: number) => void
  title: string
}

const MapCard: React.FC<IPagesCardProps> = ({
  apiContent,
  fetchCategory,
  title,
}) => {
  return (
    <CardContainer>
      <ImageLink to={`/${title}/${apiContent.id}`}>
        <ImageBackground background={apiContent.capa} />
      </ImageLink>
      <div className="p-3">
        <div>
          <PageTitle>
            <LinkTitle to={`/${title}/${apiContent.id}`}>
              {apiContent.nome}
            </LinkTitle>
          </PageTitle>
          <div className="d-flex gap-2 flex-wrap">
            {fetchCategory &&
              apiContent.categorias.map((category) => (
                <ButtonCategory
                  key={category.id}
                  type="button"
                  onClick={() => fetchCategory(category.id)}
                >
                  {category.label}
                </ButtonCategory>
              ))}
          </div>
        </div>
        {apiContent?.enderecos.map((address) => (
          <p key={address.id} className="mt-3 mb-5 text-muted fs-sm">
            {address.label}
          </p>
        ))}
      </div>
    </CardContainer>
  )
}
export default memo(MapCard)
