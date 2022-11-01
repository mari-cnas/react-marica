import styled from 'styled-components'

export const Bg = styled.div`
  color: white;
  position: relative;
  background-color: rgb(45, 103, 127);
  overflow: hidden;
`
export const Bg2 = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  border-top: 600px solid rgb(255, 255, 255);
  border-left: 300px solid transparent;
  height: 0px;
  width: 500px;
  z-index: 0;
`
export const CellDiv = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
`
export const Title = styled.p`
  font-weight: 700;
  font-size: 60px;
  font-family: Roboto, sans-serif;
  color: white;
`
export const Text = styled.p`
  font-size: 22px;
  font-family: Roboto, sans-serif;
  color: white;
`
