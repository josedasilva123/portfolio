import styled, {css} from "styled-components";
import { BaseTitle, BaseLabel, BaseParagraph } from "./components/typography";

export const ThemeTitle = styled(BaseTitle)`
    font-family: 'Roboto Mono', monospace;
    color: var(--colorWhite);
    ${(props) => {
        switch(props.titleSize){
            case 'headline':
                return css`
                    font-size: 60px;
                    font-weight: 700;
                    @media (max-width: 1368px){
                        font-size: 48px;
                    }
                `
        }
    }}

`