import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --colorBlack: #090909;
    --colorDarkGreen: #203130;
    --colorWhite: #FFF;
    --colorRed: #E6BDBD;  
    --colorGreen: #9DCCC5;  
  }  
  *{
      font-family: Roboto, sans-serif;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  a{
    text-decoration: none;
  }
  ul, ol{
    list-style: none;
  }
  body {
    background: linear-gradient(#090909, #202130) no-repeat;
    background-size: cover;
  }
  button {
    cursor: pointer;
    border: none;    
  }
`;


