import styled from 'styled-components'

export const FooterBg = styled.footer`
  background-color: rgb(51, 51, 51);
  color: white;
  margin-top: auto;

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
