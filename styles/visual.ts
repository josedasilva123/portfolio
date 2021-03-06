import styled, { css } from "styled-components";
import { BaseCard, BasePercentBar, BaseTag } from "./components/visual";
import { backgroundColor } from "./functions/visual";

export const ThemeCard = styled(BaseCard)`
  width: 100%;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;

  padding: ${(props) => props.padding?.all};

  padding-top: ${(props) => props.padding?.top};
  padding-bottom: ${(props) => props.padding?.bottom};
  padding-left: ${(props) => props.padding?.left};
  padding-right: ${(props) => props.padding?.right};

  ${(props) => {
    switch(props.cardStyle){
       case 'solid1':
        return css`
          background: var(--colorCardBackgroundPrimary);
        `
      case 'solid1b':
        return css`
          background: var(--colorCardBackgroundPrimary);
          border: 2px solid var(--colorPrimaryOpacity20);
        `  
      case 'solid2':
        return css`
          background: var(--colorCardBackgroundSecondary);
        `
      case 'solid2b':
        return css`
          background: var(--colorCardBackgroundSecondary);
          border: 2px solid var(--colorPrimaryOpacity20);
        `    
      default:
        return css`
          border: 2px solid var(--colorPrimaryOpacity20);
        `  
    }
  }}

  border-radius: var(--CardRadius);
  

  animation: fadeIn 0.4s forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const PercentBar = styled(BasePercentBar)`
  width: 100%;
  height: 6px;

  border-radius: var(--PercentBarRadius);
  
  transition: 0.3s;
  span {
    display: block;
    width: ${(props) => props.percentValue}%;
    height: 6px;

    border-radius: var(--PercentBarRadius);
    //Cor da barra
    ${(props) => backgroundColor(props.backgroundColor)}
  }
`;

export const ThemeTag = styled(BaseTag)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: var(--PrimaryFont);
  font-weight: 600;
  font-size: 13px;

  padding: 0 1rem;
  height: 24px;

  border-radius: 255px;

  ${(props) => {
    let color;

    switch (props.tagColor) {
      case "white":
        color = "--colorWhite";
        break;
      case "primary":
        color = "--colorPrimaryButton";
        break;
      case "secondary":
        color = "--colorSecondaryButton";
        break;
    }

    switch (props.tagType) {
      case "solid":
        return css`
            background: var(${color});
            color: var(--colorBlack);
        `;
      case "outline":
        return css`
            background: transparent;
            color: var(${color});
            border: 2px solid var(${color});
        `; 
    }
  }}
`;
