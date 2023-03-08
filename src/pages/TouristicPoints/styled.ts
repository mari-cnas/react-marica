import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomeBg = styled.div`
  background-color: rgb(245, 245, 245);
`

export const MapButton = styled(Button)`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  color: rgb(255, 255, 255);
  background-color: rgb(45, 103, 127);
  border-radius: 20px;
  border: none;
  white-space: nowrap;

  &:hover,
  a:hover {
    background-color: rgb(45, 103, 127, opacity 0.5);
  }
`

export const MapLink = styled(Link)`
  &:hover,
  button:hover {
    background-color: rgb(45, 103, 127, opacity 0.5);
  }
`

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid rgb(51, 51, 51);
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  font-size: 18px;
  color: rgb(51, 51, 51);

  textarea:focus,
  input:focus {
    outline: none;
  }
`
