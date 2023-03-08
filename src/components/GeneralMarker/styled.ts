import styled from 'styled-components'

export const IconContainer = styled.div`
  height: 30px;
  width: 30px;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
`
export const Menu = styled.div`
  position: absolute;
  top: -30px;
  left: 0px;
  transform: translate(-50%, -100%);
  width: 300px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TriangleDiv = styled.div`
  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 0px;
    height: 0px;
    border-width: 10px 10px 0px;
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid;
    border-right-color: transparent;
    border-left-color: transparent;
    border-image: initial;
    border-top-color: rgb(255, 255, 255);
    border-bottom-style: initial;
    border-bottom-color: initial;
    margin-left: -10px;
    margin-bottom: -10px;
  }
`
