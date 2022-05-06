import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;1,100;1,200;1,300;1,400;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;1,400&display=swap');
  :root{
    --colorBlack: #090909;
    --colorDarkBlue: #203130;
    --colorWhite: #FFF;
    --colorRed: #E6BDBD;    
  }  
  *{
      font-family: 'Roboto Flex', sans-serif;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  body {
    background: linear-gradient(#090909, #202130) no-repeat;
    background-size: cover;
  }
`;


