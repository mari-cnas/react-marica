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
export const Categories = styled.button`
  color: white;
  border: none;
  background-color: rgb(110, 189, 0);
  padding: 0px 20px;
  border-radius: 20px;
  font-size: 18px;
  align-items: center;
  width: fit-content;
  height: 30px;
  flex-wrap: wrap;

  /* unvisited link */
  a:link {
    color: rgb(110, 189, 0);
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: rgb(110, 189, 0);
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
export const ImageDiv = styled.div<ICoverImgProps>`
  background-image: ${({ capa }) => `url(${capa})`};
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center center;
`
