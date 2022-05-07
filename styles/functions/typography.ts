import { css, CSSProp } from "styled-components";

type tFontColor = (
    color?: 'white' | 'primary' | 'secondary',
) => CSSProp;

type tFont = {
    family: string;
    type?: 'sans-serif' | 'serif' | 'mono' | string;
}

type tFontFamily = (
   font: tFont, 
) => CSSProp;

//Função que retorna a cor com base na palheta
export const fontColor: tFontColor = (color) => {
    switch(color){
        case 'white':
            return css`
                color: var(--colorWhite);
            `
        case 'primary':
            return css`
                color: var(--colorRed);
            ` 
        case 'secondary':
            return css`
                color: var(--colorGreen);
            `   
        default:
            return css`
                color: var(--colorBlack);
            `           
    }
}

//Função que retorna fonte com base na configuração
export const fontFamily: tFontFamily = (font) => {
    switch(font.type){
        case 'sans-serif':
            return css`
                font-family: "${font.family}", sans-serif;
            `
        case 'serif':
            return css`
                font-family: "${font.family}", serif;
            `
        case 'mono':
            return css`
                font-family: "${font.family}", monospace;
            `    
        default:
            return css`
                font-family: "${font.family}";
            `        
    }
}