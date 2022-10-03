import { Card } from 'react-bootstrap'
import styled from 'styled-components'

interface ICoverImgProps {
  capa: string
}

export const CoverImg = styled.div<ICoverImgProps>`
  background-image: ${({ capa }) => `url(${capa})`};
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`
export const BodyDiv = styled.div`
  border: none;
  display: flex;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`
export const CardBg = styled(Card)`
  border: none;
  width: 100%;
`
export const InfoTitle = styled(Card.Title)`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: rgb(45, 103, 127);
`
export const InfoText = styled(Card.Text)`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: #6c757d !important;
`
export const CategoriesDiv = styled.button`
  color: rgb(102, 102, 102);
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(238, 238, 238);
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: 300;
  font-size: 12px;
  align-items: center;
  width: fit-content;
  height: 20px;
  flex-wrap: wrap;

  /* unvisited link */
  a:link {
    color: rgb(102, 102, 102);
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: rgb(102, 102, 102);
  }

  /* mouse over link */
  a:hover {
    color: white;
  }

  /* selected link */
  a:active {
    color: blue;
  }
`
