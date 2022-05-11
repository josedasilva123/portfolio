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
          padding: 0 1.5rem;
          height: 46px;
        `;
      case "xs":
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
          background: var(--colorPrimary);
          color: var(--colorWhite);
        `;
      case "solid2":
        return css`
          background: var(--colorSecondary);
          color: var(--colorWhite);
        `;
      case "solid3":
        return css`
          background: var(--colorDarkPrimary);
          color: var(--colorWhite);
        `;
      //Outlines
      case "outline1":
        return css`
          background: transparent;
          color: var(--colorWhite);
          border: 2px solid var(--colorWhite);
          &:hover {
            background: var(--colorWhite);
            color: var(--colorDarkPrimary);
          }
        `;
      case "outline2":
        return css`
          background: transparent;
          color: var(--colorPrimary);
          border: 2px solid var(--colorPrimary);

          &:hover {
            background: var(--colorPrimary);
            color: var(--colorDarkPrimary);
          }
        `;
      case "outline3":
        return css`
          background: transparent;
          color: var(--colorSecondary);
          border: 2px solid var(--colorRed);

          &:hover {
            background: var(--colorSecondary);
            color: var(--colorDarkPrimary);
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
            color: var(--colorDarkPrimary);
          `;
        case "outline2":
          return css`
            background: var(--colorPrimary);
            color: var(--colorDarkPrimary);
          `;
        case "outline3":
          return css`
            background: var(--colorSecondary);
            color: var(--colorDarkPrimary);
          `;
      }
    }
  }}
`;
