import { css, CSSProp } from "styled-components";

type tFontColor = (
    color?: 'white' | 'primary' | 'secondary',
) => CSSProp;

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