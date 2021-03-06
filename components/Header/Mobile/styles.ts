import styled from "styled-components";

export const StyledMobileHeader = styled.header`
  z-index: 1001;  
  padding: 0.4rem 0;
  position: relative;

  h1 {
    font-weight: 300;
    font-size: 1.4rem;
    color: var(--colorWhite);
  }

  div{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  div > button:first-child {
    border: 0;
    background: transparent;
    color: var(--colorWhite);
    transition: .3s;
    &:hover{
        color: var(--colorSecondary);
    }
  }
`;

export const MobileMenu = styled.nav`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  padding: 2rem;
  

  background: var(--colorBlack);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  animation: fadeIn 0.3s forwards;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    li {
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--colorWhite);

      transition: 0.3s;
      &:hover {
        color: var(--colorSecondary);
      }
    }
  }

  button{
      max-width: 375px;
      width: 100%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
