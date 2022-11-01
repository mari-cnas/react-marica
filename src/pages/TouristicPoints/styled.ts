import styled from 'styled-components'

export const HomeBg = styled.div`
  background-color: rgb(245, 245, 245);
`
export const Categories = styled.button`
  color: white;
  border: none;
  background-color: rgb(110, 189, 0);
  padding: 5px 20px;
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
