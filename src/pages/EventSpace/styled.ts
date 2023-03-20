import styled from 'styled-components'

interface ICoverImgProps {
  capa: string
}
export const HomeBg = styled.div`
  background-color: rgb(245, 245, 245);
`

export const IconDiv = styled.div`
  color: rgb(110, 189, 0);
  margin-right: 5px;
`

export const ImageDiv = styled.div<ICoverImgProps>`
  background-image: ${({ capa }) => `url(${capa})`};
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center center;
`
