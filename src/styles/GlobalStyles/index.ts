import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html,body,#root{
    min-height: 100vh;
   // height:100%;
}


body {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0;
    flex: 1 0 auto;

    .slick-prev {
  left: 3% !important;
  z-index: 1;
}
.slick-next {
  right: 3% !important;
  z-index: 1;
}
}

footer {
    margin-top: auto;
    /* position: absolute;
    right: 0;
    bottom: 0;
    left: 0; */
}

.slick-prev, .slick-next {
   position: absolute; right: 50px;
}
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
