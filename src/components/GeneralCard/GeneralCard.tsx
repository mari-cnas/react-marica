import { memo } from 'react'

import { Link } from 'react-router-dom'

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
  ponto: TouristicPointType
}

const GeneralCard: React.FC<IGeneralCardProps> = ({ ponto }) => {
  return (
    <CardBg className="d-flex flex-column w-100">
      <CoverImg capa={ponto.capa} className="mb-2" />
      <BodyDiv className="d-flex flex-column">
        <Link to={`/pontos/${ponto.id}`} className="text-decoration-none ">
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
export default memo(GeneralCard)
