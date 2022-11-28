import { memo } from 'react'

import { Link } from 'react-router-dom'

import { strToSlug } from 'helpers'

import { HotelType } from 'types/HotelType'
import { RestaurantType } from 'types/RestaurantType'
import { TouristicPointType } from 'types/TouristicPointType'

import {
  BodyDiv,
  CardBg,
  CategoriesDiv,
  CoverImg,
  InfoText,
  InfoTitle,
} from './styled'

interface IGeneralCardProps {
  ponto: TouristicPointType | HotelType | RestaurantType
  pagina: string
}

const GeneralCardSlug: React.FC<IGeneralCardProps> = ({ ponto, pagina }) => {
  return (
    <CardBg className="d-flex flex-column w-100">
      <Link
        to={`/${pagina}/${ponto.id}/${strToSlug(ponto.nome)}`}
        className="text-decoration-none "
      >
        <CoverImg capa={ponto.capa} className="mb-2 img-fluid" />
      </Link>
      <BodyDiv className="d-flex flex-column">
        <Link
          to={`/${pagina}/${ponto.id}/${strToSlug(ponto.nome)}`}
          className="text-decoration-none "
        >
          <InfoTitle className="text-start">{ponto.nome}</InfoTitle>
        </Link>
        <div className="d-flex flex-wrap ">
          {ponto.categorias.map((categoria) => (
            <CategoriesDiv
              className="d-flex text-start my-1 mx-1"
              key={categoria.id}
            >
              {categoria.label}
            </CategoriesDiv>
          ))}
        </div>
        {ponto.enderecos.map((endereco) => (
          <InfoText className="text-start my-3" key={endereco.id}>
            {endereco.label}
          </InfoText>
        ))}
      </BodyDiv>
    </CardBg>
  )
}
export default memo(GeneralCardSlug)
