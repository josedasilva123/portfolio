import React from 'react'
import { iMargin } from './general';

interface iTitle{
    className?: string;
    children: React.ReactNode; 
    titleMargin?: iMargin;
    titleTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    titleSize: 'headline' | 'title1' | 'title2' | 'title3' | 'subtitle';
    titleColor?: 'white' | 'primary' | 'secondary'; 
}

interface iLabel{
    className?: string;
    children: React.ReactNode; 
    labelMargin?: iMargin;
    labelColor?: 'white' | 'primary' | 'secondary'; 
}

interface iParagraph{
    className?: string;
    children: React.ReactNode;
    paragraphMargin?: iMargin;
    paragraphColor?: 'white' | 'primary' | 'secondary'; 
}

interface iTextBox{
    className?: string;
    children: React.ReactNode;
    gap?: string;
    textBoxMargin?: iMargin;
}

//Componente base de título com variação de tag via props
export const BaseTitle: React.FC<iTitle> = ({ children, className, titleTag }) => {
  return (
    <>
      {titleTag === "h1" && <h1 className={className}>{children}</h1>} 
      {titleTag === "h2" && <h2 className={className}>{children}</h2>} 
      {titleTag === "h3" && <h3 className={className}>{children}</h3>} 
      {titleTag === "h4" && <h4 className={className}>{children}</h4>} 
      {titleTag === "h5" && <h5 className={className}>{children}</h5>} 
      {titleTag === "h6" && <h6 className={className}>{children}</h6>} 
    </>
  )
}

//Componente base de rótulo
export const BaseLabel: React.FC<iLabel> = ({ children, className }) => {
    return(
        <label className={className}>
            {children}
        </label>
    )
}

//Componente base de parágrafo
export const BaseParagraph: React.FC<iParagraph> = ({ children, className }) => {
    return(
        <p className={className}>
            {children}
        </p>
    )
}

//Componente caixa de texto
export const BaseTextBox: React.FC<iTextBox> = ({ children, className }) => {
    return(
        <div className={className}>
            {children}
        </div>
    )
}
