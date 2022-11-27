import styled from 'styled-components'

export const Bg = styled.div`
  height: 95px;
  background-color: rgb(45, 103, 127);
  color: white;
  padding: 15px;

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
export const DrawerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 30px;
  display: none;
`
