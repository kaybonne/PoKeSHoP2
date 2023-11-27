import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 body {
     position: relative;
     max-width: 100vw;
     overflow: hidden;
     height: 100vh;
     font-family: "Raleway", sans-serif;
     background: linear-gradient(30deg, #040b16, #00a0df 50%, #02385f);

    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  :root {
    --accent-color: #f51313;
    --accent-color-dark: #930b0b; 
  }



    #root {
  $accent-color: #f51313;
  --accent-color-dark: color.scale($accent-color, $lightness: -30%);
}
  
`;

export default GlobalStyles;
