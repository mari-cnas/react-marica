import styled from 'styled-components'

export const CategoryBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  background-color: rgb(110, 189, 0);
  padding: 0px 20px;
  margin: 0 10px 10px 0;
  border-radius: 20px;
  font-size: 18px;
  align-items: center;
  width: fit-content;
  height: 30px;
  white-space: nowrap;
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

export const CategoriesList = styled.div`
  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    overflow-x: scroll;
  }
  display: flex;
  flex-wrap: nowrap;
`
