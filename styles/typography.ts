import styled, {css} from "styled-components";
import { BaseTitle, BaseLabel, BaseParagraph, BaseTextBox, BaseList } from "./components/typography";
import { fontColor } from "./functions/typography";

export const ThemeTitle = styled(BaseTitle)`
    font-family: var(--PrimaryFont);
    line-height: 1.3;

    text-align: ${(props) => props.titleAlign};

    margin-top: ${(props) => props.titleMargin?.top};
    margin-bottom: ${(props) => props.titleMargin?.bottom};

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
            case 'subtitle':
                return css`
                    font-size: 20px;
                    font-weight: 600;
                    @media (max-width: 1368px){
                        font-size: 18px;
                    }
                    @media (max-width: 768px){
                        font-size: 17px;
                    }
                `                    
        }
    }}
    
    //Cores de título
    ${(props) => fontColor(props.titleColor)}
    a{
        ${(props) => fontColor(props.titleColor)}
        transition: .3s;
        &:hover{
            text-decoration: underline;
        }   
    }
`

export const ThemeLabel = styled(BaseLabel)`
    display: block;
    
    font-size: ${(props) => props.labelSize ? props.labelSize : 16}px;
    font-weight: 500; 
    letter-spacing: .2em;

    text-align: ${(props) => props.labelAlign};

    margin-top: ${(props) => props.labelMargin?.top};
    margin-bottom: ${(props) => props.labelMargin?.bottom};
    //Cores do rótulo
    ${(props) => fontColor(props.labelColor)}   
`

export const ThemeParagraph = styled(BaseParagraph)`
    font-size: 16px;

    line-height: 1.7;

    text-align: ${(props) => props.paragraphAlign};

    margin-top: ${(props) => props.paragraphMargin?.top};
    margin-bottom: ${(props) => props.paragraphMargin?.bottom};
    //Cores do parágrafo
    ${(props) => fontColor(props.paragraphColor)}   
`

export const ThemeTextBox = styled(BaseTextBox)`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap};

    margin-top: ${(props) => props.textBoxMargin?.top};
    margin-bottom: ${(props) => props.textBoxMargin?.bottom};

    
`

export const ThemeList = styled(BaseList)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: ${(props) => props.gap};

    line-height: 1.4;

    font-weight: 500;

    padding-left: ${(props) => props.paddingLeft};    

    margin-top: ${(props) => props.listMargin?.top};
    margin-bottom: ${(props) => props.listMargin?.bottom};

    //Cores do item na lista
    ${(props) => fontColor(props.listItemColor)}   

    li{
        list-style: ${(props) => props.listStyle};
    }
`