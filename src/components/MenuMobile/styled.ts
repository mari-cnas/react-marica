import styled, { keyframes } from 'styled-components'

interface IMenuContainerProps {
  isVisible: boolean
}

interface IMenuProps {
  menuIsVisible: boolean
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
const enter = keyframes`
    from{
        right: -160px;
    }
    to{
        right: 0;
    }
`
const leave = keyframes`
    from{
        right: 0;
    }
    to{
        right: -160px;
    }
`

export const MenuContainer = styled.section<IMenuContainerProps>`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 300px;
  height: 100vh;
  top: 0;
  right: 0;
  left: ${(props) => (props.isVisible ? 0 : -300)}px;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(17, 18, 17, 0.95);
  animation: ${(props) => (props.isVisible ? enter : leave)} 0.2s ease-out;

  > svg {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  nav {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }
`
export const MenuOverlay = styled.div<IMenuProps>`
  opacity: ${(props) => (props.menuIsVisible ? 1 : 0)};
  visibility: ${(props) => (props.menuIsVisible ? 'visible' : 'hidden')};
  animation: ${(props) => (props.menuIsVisible ? fadeIn : fadeOut)} 0.2s
    ease-out;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-out;
  left: 0;
  z-index: 2;
  position: absolute;
  height: 100vh;
  width: 100%;
`
