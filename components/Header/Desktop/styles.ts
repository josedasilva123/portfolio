import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: .6rem 0;

    h1{
        font-family: 'Roboto Mono', monospace;
        font-weight: 300;
        font-size: 1.6rem;
        color: var(--colorWhite);
        b{
            font-family: 'Roboto Mono', monospace;   
        }
    }

    nav{
        display: flex;
        align-items:  center;
        gap: 2rem;
        ul{
            display: flex;
            align-items: center;
            gap: 2rem;
            li{
                cursor: pointer;
                font-size: .875rem;
                font-weight: 600;
                text-transform: uppercase;
                color: var(--colorWhite);

                transition: .3s;
                &:hover{
                    color: var(--colorGreen);
                }
            }
        }
    }
`