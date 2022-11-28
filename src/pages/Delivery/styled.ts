import styled from 'styled-components'

export const HomeBg = styled.div`
  background-color: rgb(245, 245, 245);
`

export const IconDiv = styled.div`
  color: rgb(110, 189, 0);
  margin-right: 5px;
`
export const DeliveryBox = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 15px 10px;

  /* unvisited link */
  a:link {
    color: black;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: black;
  }

  /* mouse over link */
  a:hover {
    text-decoration: underline;
  }

  /* selected link */
  a:active {
    color: blue;
  }
`
