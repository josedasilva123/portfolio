import { createGlobalStyle } from "styled-components";

//Paleta de cores padrão
export const DefaultColors = createGlobalStyle`
    :root{
    --colorBlack: #090909;
    --colorWhite: #FFF;       
    --colorPrimary: #A5CDE6;  
    --colorPrimaryOpacity20: #A5CDE63F;  
    --colorSecondary: #9DCCC5;  
    --colorDarkPrimary: #203130; 
  }  
`;

//Configuração de fontes globais
export const DefaultFonts = createGlobalStyle`
  :root{
    --PrimaryFont: 'Roboto Mono', monospace;
    --SecondaryFont: 'Roboto', sans-serif;
  } 
  h1, h2, h3, h4, h5, h6{
    font-family: var(--PrimaryFont);
  }
  *{
    font-family: var(--SecondaryFont);
  }
`;

export const GlobalStyle = createGlobalStyle`
  *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  a{
    text-decoration: none;
  }
  ul, ol, li{
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
