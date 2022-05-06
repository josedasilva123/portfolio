import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --colorBlack: #090909;
    --colorDarkBlue: #203130;
    --colorWhite: #FFF;
    --colorRed: #E6BDBD;    
  }  
  *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  body {
    background: linear-gradient(#090909, #202130) no-repeat;
    background-size: cover;
  }
`;


