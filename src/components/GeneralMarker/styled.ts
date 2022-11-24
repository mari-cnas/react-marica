import styled, { keyframes } from 'styled-components'

interface IMenuProps {
  show: boolean
}

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`

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
export const MenuOverlay = styled.div<IMenuProps>`
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.2s ease-out;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-out;
  z-index: 2;
`
export const Menu = styled.div<IMenuProps>`
  width: 300px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} 0.2s ease-out;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`
