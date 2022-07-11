import styled, { css } from "styled-components";
import { BaseButton } from "./components/buttons";

export const ThemeButton = styled(BaseButton)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  font-weight: 500;

  border-radius: var(--ButtonRadius);

  transition: 0.3s;

  white-space: nowrap;

  //Fullwidth
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

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
      case "round":
        return css`
          font-size: 0.825rem;
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
          color: var(--colorWhiteSolidButton);
        `;
      case "solid2":
        return css`
          background: var(--colorSecondaryButton);
          color: var(--colorWhiteSolidButton);
        `;
      case "solid3":
        return css`
          background: var(--colorDarkPrimaryButton);
          color: var(--colorWhiteSolidButton);
        `;
      //Outlines
      case "outline1":
        return css`
          background: transparent;
          color: var(--colorWhiteOutlineButton);
          border: 2px solid var(--colorWhiteOutlineButton);
          &:hover {
            background: var(--colorWhiteOutlineButton);
            color: var(--colorBlackOutlineButton);
          }
        `;
      case "outline2":
        return css`
          background: transparent;
          color: var(--colorPrimaryButton);
          border: 2px solid var(--colorPrimaryButton);

          &:hover {
            background: var(--colorPrimaryButton);
            color: var(--colorBlackOutlineButton);
          }
        `;
      case "outline3":
        return css`
          background: transparent;
          color: var(--colorSecondaryButton);
          border: 2px solid var(--colorSecondaryButton);

          &:hover {
            background: var(--colorSecondaryButton);
            color: var(--colorBlackOutlineButton);
          }
        `;
      case "link":
        return css`
          color: var(--colorWhite);

          &:hover {
            color: var(--colorPrimary);
          }
        `;
    }
  }}
  //Hover (Solid)
  ${(props) => {
    if (props.buttonStyle.includes("solid") && !props.disabled) {
      return css`
        &:hover {
          filter: brightness(1.05);
        }
      `;
    }
  }}
  //Hover (Outline)
  ${(props) => {
    if (!props.disabled) {
      switch (props.buttonStyle) {
        case "outline1":
          return css`
            &:hover {
              background: var(--colorWhiteOutlineButton);
              color: var(--colorBlackOutlineButton);
            }
          `;
        case "outline2":
          return css`
            &:hover {
              background: var(--colorPrimaryButton);
              color: var(--colorBlackOutlineButton);
            }
          `;
        case "outline3":
          return css`
            &:hover {
              background: var(--colorSecondaryButton);
              color: var(--colorBlackOutlineButton);
            }
          `;
      }
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
            background: var(--colorWhiteOutlineButton);
            color: var(--colorBlackOutlineButton);
          `;
        case "outline2":
          return css`
            background: var(--colorPrimaryButton);
            color: var(--colorBlackOutlineButton);
          `;
        case "outline3":
          return css`
            background: var(--colorSecondaryButton);
            color: var(--colorBlackOutlineButton);
          `;
      }
    }
  }}

  //Disabled (All)
  ${(props) => {
    if (props.disabled) {
      return css`
        cursor: not-allowed;
        opacity: 0.7;
      `;
    }
  }}
`;
