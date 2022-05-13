import styled, { css } from "styled-components";
import { BaseButton } from "./components/buttons";

export const ThemeButton = styled(BaseButton)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  font-weight: 700;

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
        font-size: 0.875rem;
          padding: 0 1.5rem;
          height: 46px;
        `;
      case "xs":
        return css`
          font-size: 0.825rem;
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
          background: var(--colorPrimaryButton);
          color: var(--colorWhiteButton);
        `;
      case "solid2":
        return css`
          background: var(--colorSecondaryButton);
          color: var(--colorWhiteButton);
        `;
      case "solid3":
        return css`
          background: var(--colorDarkPrimaryButton);
          color: var(--colorWhiteButton);
        `;
      //Outlines
      case "outline1":
        return css`
          background: transparent;
          color: var(--colorWhite);
          border: 2px solid var(--colorWhite);
          &:hover {
            background: var(--colorWhite);
            color: var(--colorBlack);
          }
        `;
      case "outline2":
        return css`
          background: transparent;
          color: var(--colorPrimaryButton);
          border: 2px solid var(--colorPrimaryButton);

          &:hover {
            background: var(--colorPrimaryButton);
            color: var(--colorBlack);
          }
        `;
      case "outline3":
        return css`
          background: transparent;
          color: var(--colorSecondaryButton);
          border: 2px solid var(--colorSecondaryButton);

          &:hover {
            background: var(--colorSecondaryButton);
            color: var(--colorBlack);
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
    }
  }}
   //Active (Solid)
   ${(props) => {
    if (props.buttonActive) {
      return css`
        &:hover {
          filter: brightness(1.05);
        }
      `;
    }
  }}
  //Active (Outline)
  ${(props) => {
    if (props.buttonActive) {
      switch (props.buttonStyle) {
        case "outline1":
          return css`
            background: var(--colorWhite);
            color: var(--colorBlack);
          `;
        case "outline2":
          return css`
            background: var(--colorPrimaryButton);
            color: var(--colorBlack);
          `;
        case "outline3":
          return css`
            background: var(--colorSecondaryButton);
            color: var(--colorBlack);
          `;
      }
    }
  }}
`;
