import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html,body,#root{
    min-height: 100vh;
}

/* mouse over link */
a:hover {
  color: transparent;
}


`
