import { createGlobalStyle } from "styled-components";

//Paleta de cores padrão
export const DefaultColors = createGlobalStyle`
  :root{
    //Main
    --colorBlack: #090909;
    --colorWhite: #FFFFFF; 
    --colorPrimary: #8FC9ED;
    --colorSecondary: #9DCCC5;

    //Button
    --colorBlackSolidButton: #FFFFFF;
    --colorWhiteSolidButton: #090909; 
    --colorBlackOutlineButton: #090909;
    --colorWhiteOutlineButton: #FFF; 
    --colorSecondaryButton: #9DCCC5;
    --colorPrimaryButton: #8FC9ED;  

    //Card
    --colorCardBackgroundPrimary: #1F3136;
    --colorCardBackgroundSecondary: #133835;

     //Form Colors
     --colorInputText: #FFFFFF; 
     --colorInputBackground: #1F3136;
     --colorInputBorder: #8FC9ED;

     //Alert Colors:
     --colorErrorBackground: #F3AFA8;
     --colorErrorSolid: #F46E5F;
     --colorAlertBackground: #F3F1A5;
     --colorAlertSolid: #73702C;
     --colorSucessBackground: #90FCC6;
     --colorSucessSolid: #477D62;

    //Custom
    --colorWhiteOpacity60: rgba(255,255,255, .6);
    --colorPrimaryOpacity20: #8FC9ED3F;  
    --colorDarkPrimary: #131E1D; 
  }  
`;

export const LightThemeColors = createGlobalStyle`
  :root{
    //Main
    --colorBlack: #FFFFFF;
    --colorWhite: #090909;    
    --colorPrimary: #285C7D;
    --colorSecondary: #3B4D4A;

    //Button
    --colorBlackSolidButton: #090909;
    --colorWhiteSolidButton: #FFFFFF; 
    --colorBlackOutlineButton: #FFFFFF;
    --colorWhiteOutlineButton: #090909; 
    --colorPrimaryButton: #285C7D;
    --colorSecondaryButton: #3B4D4A;  

    //Card
    --colorCardBackgroundPrimary: #D7F0F7;
    --colorCardBackgroundSecondary: #9BFBF6;

    //Form Colors
    --colorInputText: #090909;
    --colorInputBackground: #D7F0F7;
    --colorInputBorder: #285C7D;

    //Alert Colors:
    --colorErrorBackground: #F46E5F;
     --colorErrorSolid: #F3AFA8;
     --colorAlertBackground: #73702C;
     --colorAlertSolid: #F3F1A5;
     --colorSucessBackground: #477D62;
     --colorSucessSolid: #90FCC6;

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
  a{
    color: unset;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: var(--PrimaryFont);
  }
  *{
    font-family: var(--SecondaryFont);
  }
`;

//Configuração de reset + configurações globais do projeto
export const GlobalStyle = createGlobalStyle` 
  :root{
    //Arredontamento de elementos
    --ButtonRadius: 255px;
    --CardRadius: 16px;
    --PercentBarRadius: 255px;
    --InputRadius: 4px;
    
    //Configuração de formulário
    --InputBorder: none;
  }
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
  button {
    cursor: pointer;
    padding: 0;
    margin: 0;
    background: transparent;
    border: none;  
  }
  //Seus estilos
  body {
    background: linear-gradient(var(--colorBlack), var(--colorDarkPrimary)) no-repeat;
    background-size: cover;
  }
`;


