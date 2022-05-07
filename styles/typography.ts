import styled, {css} from "styled-components";
import { BaseTitle, BaseLabel, BaseParagraph } from "./components/typography";
import { fontColor } from "./functions/fontcolor";

export const ThemeTitle = styled(BaseTitle)`
    font-family: 'Roboto Mono', monospace;
    line-height: 1.3;

    margin-top: ${(props) => props.titleMargin?.top};
    margin-bottom: ${(props) => props.titleMargin?.bottom};

    color: var(--colorWhite);
    //Tamanhos de título
    ${(props) => {
        switch(props.titleSize){
            case 'headline':
                return css`
                    font-size: 60px;
                    font-weight: 700;
                    @media (max-width: 1368px){
                        font-size: 48px;
                    }
                    @media (max-width: 768px){
                        font-size: 36px;
                    }
                `
            case 'title1':
                return css`
                    font-size: 44px;
                    font-weight: 600;
                    @media (max-width: 1368px){
                        font-size: 38px;
                    }
                    @media (max-width: 768px){
                        font-size: 28px;
                    }
                ` 
            case 'title2':
                return css`
                    font-size: 38px;
                    font-weight: 600;
                    @media (max-width: 1368px){
                        font-size: 32px;
                    }
                    @media (max-width: 768px){
                        font-size: 24px;
                    }
                ` 
            case 'title3':
                return css`
                    font-size: 32px;
                    font-weight: 600;
                    @media (max-width: 1368px){
                        font-size: 26px;
                    }
                    @media (max-width: 768px){
                        font-size: 18px;
                    }
                `               
        }
    }}
    //Cores de título
    ${(props) => fontColor(props.titleColor)}
`

export const ThemeLabel = styled(BaseLabel)`
    //Cores de rótulo
    display: block;
    font-family: 'Roboto Mono', monospace;   
    font-weight: 600; 
    font-size: 16px;
    letter-spacing: .2em;

    margin-top: ${(props) => props.labelMargin?.top};
    margin-bottom: ${(props) => props.labelMargin?.bottom};
    
    ${(props) => fontColor(props.labelColor)}   
`