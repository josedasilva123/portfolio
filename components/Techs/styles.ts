import styled from "styled-components";

export const TechMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  overflow-x: scroll;

  margin-top: 2rem;
  padding: .6rem .6rem 2rem .6rem;

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
