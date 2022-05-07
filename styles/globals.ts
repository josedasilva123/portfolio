import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;1,100;1,200;1,300;1,400;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;1,400&display=swap');
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


