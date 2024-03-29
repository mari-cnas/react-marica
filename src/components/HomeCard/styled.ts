import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export const LinkBtn = styled.button`
  color: rgb(110, 189, 0);
  border: 1px solid rgb(110, 189, 0);
  background-color: transparent;
  padding: 0px 20px;
  border-radius: 20px;

  &:hover {
    color: rgb(110, 500, 0);
    border: 1px solid rgb(110, 500, 0);
  }
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
    color: rgb(110, 500, 0);
  }

  /* selected link */
  a:active {
    color: rgb(110, 500, 0);
  }
`
export const CardBg = styled(Card)`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  > div > a {
    /* unvisited link */
    &:link {
      color: black;
      text-decoration: none;
    }

    /* visited link */
    &:visited {
      color: black;
    }

    /* mouse over link */
    &:hover {
      color: black;
      text-decoration: underline;
    }

    /* selected link */
    &:active {
      color: black;
    }
  }
`
export const InfoTitle = styled(Card.Title)`
  font-family: Roboto, sans-serif;
  font-size: 16px;
`
export const InfoText = styled(Card.Text)`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  color: #6c757d !important;
`
