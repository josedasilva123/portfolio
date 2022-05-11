import styled from "styled-components";

export const TechCardLi = styled.li`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 2rem;
    border-radius: 1rem;
    border: 2px solid var(--colorPrimaryOpacity20);
    animation: fadeIn .4s forwards;
    @keyframes fadeIn{
        from{
            opacity: 0;
        } to {
            opacity: 1;
        }
    }
`