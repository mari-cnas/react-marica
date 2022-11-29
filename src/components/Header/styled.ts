import styled from 'styled-components'

export const Bg = styled.div`
  height: 95px;
  background-color: rgb(45, 103, 127);
  color: white;

  /* unvisited link */
  a:link {
    color: white;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: white;
  }

  /* mouse over link */
  a:hover {
    color: white;
    text-decoration: underline;
  }

  /* selected link */
  a:active {
    color: white;
  }
`
