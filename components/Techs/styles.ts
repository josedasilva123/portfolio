import styled from "styled-components";

export const TechMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  overflow-x: scroll;

  margin-top: 2rem;
  padding-bottom: 2rem; 

  li{
      white-space: nowrap;
  }
  
  ::-webkit-scrollbar {
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--colorWhite);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--colorPrimary)
  }
  ::-webkit-scrollbar-thumb:hover {
    filter: brightness(1.1);
  }

  @media(max-width: 768px){
    margin-right: -.5rem;
  }
`;
