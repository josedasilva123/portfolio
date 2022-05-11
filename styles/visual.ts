import styled from "styled-components";
import { BasePercentBar } from "./components/visual";
import { backgroundColor } from "./functions/visual";

export const PercentBar = styled(BasePercentBar)`
    width: 100%;
    height: 6px;

    background: var(--colorDarkPrimary);

    border-radius: 255px;
    transition: .3s;
    span{
        display: block;
        
        width: ${(props) => props.percentValue}%;        
        height: 6px;

        border-radius: 255px;
        //Cor da barra
        ${(props) => backgroundColor(props.backgroundColor)}
    }
`