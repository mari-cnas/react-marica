import styled from 'styled-components'

interface ICoverImgProps {
  capa: string
}

export const CoverImg = styled.div<ICoverImgProps>`
  background-image: url(${({ capa }) => capa});
`
