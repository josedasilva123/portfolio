import styled, { css } from "styled-components";
import { BaseButton } from "./components/buttons";

export const ThemeButton = styled(BaseButton)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  gap: 0.6rem;

  border-radius: 255px;
  
  transition: 0.3s;

  //Button sizes
  ${(props) => {
    switch (props.buttonSize) {
      case "xl":
        return css`
          font-size: 1rem;
          padding: 0 2.4rem;
          height: 62px;
        `;
      case "lg":
        return css`
          font-size: 0.9rem;
          padding: 0 2.2rem;
          height: 56px;
        `;
      case "md":
        return css`
          font-size: 0.875rem;
          padding: 0 1.9rem;
          height: 52px;
        `;
      case "sm":
        return css`
          padding: 0 1.5rem;
          height: 46px;
        `;
      case "xl":
        return css`
          padding: 0 1.2rem;
          height: 40px;
        `;
    }
  }}

  //Button styles
    ${(props) => {
    switch (props.buttonStyle) {
      //Solids
      case "solid1":
        return css`
          background: var(--colorRed);
          color: var(--colorWhite);
        `;
      case "solid2":
        return css`
          background: var(--colorGreen);
          color: var(--colorWhite);
        `;
      case "solid3":
        return css`
          background: var(--colorDarkGreen);
          color: var(--colorWhite);
        `;
      //Outlines
      case "outline1":
        return css`
            background: transparent;
            color: var(--colorWhite);
            border: 2px solid var(--colorWhite);            
            &:hover{
                background: var(--colorWhite);
                color: var(--colorDarkGreen);
            }
        `;
      case "outline2":
        return css`
          background: transparent;
          color: var(--colorRed);
          border: 2px solid var(--colorGreen);

          &:hover {
              background: var(--colorRed);
              color: var(--colorDarkGreen);
            }
        `;
      case "outline3":
        return css`
          background: transparent;
          color: var(--colorGreen);
          border: 2px solid var(--colorRed);

          &:hover {
              background: var(--colorGreen);
              color: var(--colorDarkGreen);
            }
        `;
    }
  }}
  //Hover (Solid)
    ${(props) => {
    if (props.buttonStyle.includes("solid")) {
      return css`
        &:hover {
          filter: brightness(1.05);
        }
      `;
    }}}
`;
