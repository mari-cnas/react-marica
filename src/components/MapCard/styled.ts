import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface ImageBackgroundProps {
  background: string
}

export const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: #0000001a 0px 1px 5px;
  border-radius: 5px;
  width: 100%;
`

export const ImageBackground = styled.div<ImageBackgroundProps>`
  background-image: url(${(props) => props.background});
  height: 100%;
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  z-index: 1;
`

export const ImageLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 0px;
  padding-bottom: 56.25%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
`
export const PageTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0.5rem;
`

export const LinkTitle = styled(Link)`
  color: #2d677f;
  text-decoration: none;
  &:hover {
    color: #2d677f;
    text-decoration: underline;
  }
`

export const ButtonCategory = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666666;
  background-color: #eeeeee;
  border: 1px solid #eeeeee;
  text-decoration: none;
  font-weight: 200;
  height: 20px;
  font-size: 12px;
  border-radius: 20px;
  padding: 12px;
  white-space: nowrap;
  &:hover {
    color: #666666;
    background-color: #fbfbfb;
  }
`
