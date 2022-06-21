import styled from 'styled-components';

export const StyledHeader = styled.header`
    z-index: 1001;
    padding: .6rem 0;

    h1{
        font-weight: 300;
        font-size: 1.6rem;
        color: var(--colorWhite);
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
                    color: var(--colorSecondary);
                }
            }
        }
    }
`