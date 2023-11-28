import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 body {
     position: relative;
     max-width: 100vw;
     overflow: hidden;
     height: 100vh;
     font-family: "Raleway", sans-serif;
     background: linear-gradient(30deg, #050d30, #00a0df 50%, #02385f);

    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  :root {
    &, &.light-mode{
      --background-color: transparent;
      --box-line-color: rgba(255, 255, 255, 0.203);
      --font-color: white;
      --searchbar-background-color: rgba(255, 255, 255, 0.125);
      //--button-font-color: rgb(228, 228, 228);
      --border-radius-s: 1rem;
      --border-m: none
      --border-s: none
      --component-background-color: none;


      --accent-color: #f51313;
      --accent-color-dark: #930b0b; 
      --underline-height: 4px;
      --transition-duration: 0.5s;
    }
    &.gb-mode{
      --background-color: #EDF2F7;
      --box-line-color: black;
      --font-color: #2D3748;
      --searchbar-background-color: #CBD5E0;
      //--button-font-color: #2D3748;
      --border-radius-s: none;
      --border-m: 4px solid #2D3748;
      --border-s: 2px solid #2D3748;
      --component-background-color: #E2E8F0;
      


      --accent-color: pink;
      --accent-color-dark: purple; 
      --underline-height: 4px;
      --transition-duration: 0.5s;
    }
  }



    #root {
  $accent-color: #f51313;
  --accent-color-dark: color.scale($accent-color, $lightness: -30%);
}
  

  .underline {
    z-index: 10;
    height: calc(var(--underline-height) / 2);
    mix-blend-mode: initial;
  }

  .underline {
    display: block;
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    height: var(--underline-height);
    width: 20%;
    background-color: var(--accent-color);
    pointer-events: none;
    transition: transform var(--transition-duration) ease-in-out;

    &:nth-child(1) {
      transition: calc(var(--transition-duration) * 0.8);
    }
    &:nth-child(2) {
      transition: calc(var(--transition-duration) * 1.2);
    }
  }

  .content {
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.content {
  background: linear-gradient(
        90deg,
        $bg-color ($dot-space - $dot-size),
        transparent 1%
      )
      center,
    linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%) center,
    $dot-color;
  background-size: $dot-space $dot-space;
}

$bg-color: rgba(255, 93, 93, 0);
$dot-color: rgba(255, 255, 255, 0.051);

// Dimensions
$dot-size: 1.5px;
$dot-space: 22px;
`;

export default GlobalStyles;
