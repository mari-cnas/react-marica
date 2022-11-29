import styled from 'styled-components'

interface IMenuContainerProps {
  isVisible: boolean
}

export const MenuContainer = styled.section<IMenuContainerProps>`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 10px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(17, 18, 17, 0.95);

  opacity: 0;

  > svg {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  /* ${({ isVisible }) =>
    isVisible &&
    `
      opacity: 1;
    `} */
`
