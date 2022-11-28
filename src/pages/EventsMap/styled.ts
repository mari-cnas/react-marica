import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkBackToHome = styled(Link)`
  font-size: 22px;
  color: #343a40;
  &:hover {
    color: #121416;
  }
`

export const PageTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: #0000001a 0px 1px 5px;
  position: absolute;
  top: 110px;
  left: 15px;
  padding: 15px;
  border-radius: 5px;
  z-index: 2;
`
