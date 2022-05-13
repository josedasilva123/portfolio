import styled from "styled-components";

export const MainBannerGrid = styled.section`
    h2{
        background: url('/Code.jpg');
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: var(--colorWhiteOpacity60);
        background-size: cover;
    }
    img{
        max-width: 100%;
    }
    button{
        max-width: 400px;
        @media (max-width: 768px){
            width: 100%;
        }
    }
`