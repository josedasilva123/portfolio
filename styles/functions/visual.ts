import { css, CSSProp } from "styled-components";

type tBackgroundColor = (
    backgroundColor?: 'white' | 'primary' | 'secondary',
) => CSSProp;

//Função que retorna a cor com base na palheta
export const backgroundColor: tBackgroundColor = (backgroundColor) => {
    switch(backgroundColor){
        case 'white':
            return css`
                background-color: var(--colorWhite);
            `
        case 'primary':
            return css`
                background-color: var(--colorPrimary);
            ` 
        case 'secondary':
            return css`
                background-color: var(--colorSecondary);
            `   
        default:
            return css`
                background-color: var(--colorBlack);
            `           
    }
}
