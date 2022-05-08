import { css, CSSProp } from "styled-components";

type tFontColor = (
    color?: 'white' | 'primary' | 'secondary',
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
                color: var(--colorPrimary);
            ` 
        case 'secondary':
            return css`
                color: var(--colorSecondary);
            `   
        default:
            return css`
                color: var(--colorBlack);
            `           
    }
}
