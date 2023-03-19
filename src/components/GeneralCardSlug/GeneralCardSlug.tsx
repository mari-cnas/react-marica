import { memo } from 'react'

import { format, getDate } from 'date-fns'
import { Link } from 'react-router-dom'

import { getMonthAbbreviation, strToSlug } from 'helpers'

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
  startDate?: string
}

const GeneralCardSlug: React.FC<IGeneralCardProps> = ({
  ponto,
  pagina,
  startDate,
}) => {
  const formatStartDate = (): string | number =>
    startDate ? format(new Date(startDate), 'yyyy-MM-dd HH:mm:mm:mm') : ''

  return (
    <CardBg className="d-flex flex-column w-100">
      <Link
        to={`/${pagina}/${ponto.id}/${strToSlug(ponto.nome)}`}
        className="text-decoration-none "
      >
        <CoverImg capa={ponto.capa} className="mb-2 img-fluid" />
      </Link>
      <BodyDiv className="d-flex flex-column">
        <div className="d-flex ">
          {startDate && (
            <div className="d-flex flex-column align-items-center me-3">
              <span style={{ color: '#dc3545' }}>
                {getMonthAbbreviation(formatStartDate())}
              </span>
              <span>{getDate(new Date(formatStartDate()))}</span>
            </div>
          )}
          <Link
            to={`/${pagina}/${ponto.id}/${strToSlug(ponto.nome)}`}
            className="text-decoration-none "
          >
            <InfoTitle className="text-start">{ponto.nome}</InfoTitle>
          </Link>
        </div>
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
