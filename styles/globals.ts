import { createGlobalStyle } from "styled-components";

//Paleta de cores padrão
export const DefaultColors = createGlobalStyle`
  :root{
    //Main
    --colorBlack: #090909;
    --colorWhite: #FFF; 
    --colorPrimary: #8FC9ED;
    --colorSecondary: #9DCCC5;

    //Button
    --colorBlackButton: #090909;
    --colorWhiteButton: #FFF; 
    --colorSecondaryButton: #9DCCC5;
    --colorPrimaryButton: #8FC9ED;  

    //Custom
    --colorWhiteOpacity60: rgba(255,255,255, .6);
    --colorPrimaryOpacity20: #8FC9ED3F;  
    --colorDarkPrimary: #131E1D; 
  }  
`;

export const LightThemeColors = createGlobalStyle`
  :root{
    //Main
    --colorBlack: #FFF;
    --colorWhite: #090909;    
    --colorPrimary: #559DCA;
    --colorSecondary: #3B4D4A;

    //Button
    --colorBlackButton: #090909;
    --colorWhiteButton: #FFF;
    --colorPrimaryButton: #559DCA;
    --colorSecondaryButton: #3B4D4A;  

    //Custom
    --colorWhiteOpacity60: rgba(9,9,9, .6);
    --colorPrimaryOpacity20: #559DCA3F; 
    --colorDarkPrimary: #E8FBFA;
  }  
`

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
    background: linear-gradient(var(--colorBlack), var(--colorDarkPrimary)) no-repeat;
    background-size: cover;
  }
  button {
    cursor: pointer;
    padding: 0;
    margin: 0;
    background: transparent;
    border: none;  
  }
`;
