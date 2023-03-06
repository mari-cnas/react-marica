import styled from 'styled-components'

export const BodyBg = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 30%) 0px 1px 5px;
  transform: translateY(-200px);
`
export const AboutBg = styled.div`
  background-image: url('https://app-marica-fotos.s3-sa-east-1.amazonaws.com/marica-about.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vh;
  position: relative;
  background-attachment: fixed;
  background-position: center top;
  color: black;

  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: linear-gradient(
      rgba(245, 245, 245, 0) 0%,
      rgb(245, 245, 245) 100%
    );
  }

  a {
    color: black;
  }
`
