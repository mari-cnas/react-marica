import { Button, Row } from 'react-bootstrap'
import styled from 'styled-components'

export const HomeBg = styled.div`
  background-color: rgb(245, 245, 245);
`

export const Categories = styled(Row)`
  overflow-x: scroll;
`

export const MapButton = styled(Button)`
  height: 80px;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 30px;
  font-size: 18px;
  color: rgb(255, 255, 255);
  background-color: rgb(45, 103, 127);
  padding: 0px 20px;
  border-radius: 20px;
  border: none;
  white-space: nowrap;

  &:hover,
  a:hover {
    background-color: rgb(45, 103, 127, opacity 0.5);
  }
`

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  border: 1px solid rgb(51, 51, 51);
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  box-sizing: border - box;
  font-size: 18px;
  color: rgb(51, 51, 51);
  padding: 10px;

  textarea:focus,
  input:focus {
    outline: none;
  }
`

export const Category = styled.button`
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
