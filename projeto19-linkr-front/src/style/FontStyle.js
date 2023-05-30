import {createGlobalStyle} from "styled-components"

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Passion One';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/PassionOne-Regular.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/Oswald-Regular.ttf') format('truetype');
  }
`

export default GlobalFonts