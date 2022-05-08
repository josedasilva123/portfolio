import React from 'react'
import { DefaultFonts, GlobalStyle } from '../globals'

interface iGlobalStyles{
    children: React.ReactNode;
}

const GlobalStyles: React.FC<iGlobalStyles> = ({ children }) => {
  return (
    <>
        <DefaultFonts />
        <GlobalStyle />
        {children}
    </> 
  )
}

export default GlobalStyles;