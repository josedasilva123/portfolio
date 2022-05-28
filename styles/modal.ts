import styled, { css } from "styled-components";

import BaseModal from "./components/modal";

import { getSizeValue, LargerDefault, SmallerDefault } from "./functions/sizes";
import { breakpoints } from "./config/breakpoints";

export const ThemeModal = styled(BaseModal)`
  position: fixed;
  inset: 0;

  .overlay {
    display: flex;
    ${(props) => {
      switch (props.modalPosition.v) {
        case "top":
          return css`
            align-items: flex-start;
          `;
        case "center":
          return css`
            align-items: center;
          `;
        case "bottom":
          return css`
            align-items: flex-end;
          `;
      }
    }}

    ${(props) => {
      switch (props.modalPosition.h) {
        case "left":
          return css`
            justify-content: flex-start;
          `;
        case "center":
          return css`
            justify-content: center;
          `;
        case "right":
          return css`
            justify-content: flex-end;
          `;
      }
    }}
    
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
  }
  .box {
    position: relative;

    //Altura
    width: 100%;
    max-width: ${(props) =>
      props.modalMaxWidth ? props.modalMaxWidth : "600px"};

    //Largura
    height: ${(props) => props.modalHeight};
    max-height: ${(props) => props.modalMaxHeight};

    //Overflow scroll
    ${(props) =>
      props.modalScroll &&
      css`
        overflow-y: scroll;
        &::-webkit-scrollbar {
          width: 10px;
        }

        &::-webkit-scrollbar-track {
          background: var(--colorWhite);
        }

        &::-webkit-scrollbar-thumb {
          background: var(--colorPrimary);
        }
      `}

    background: var(--colorBlack);

    //Padding responsivo
    padding: ${(props) =>
      getSizeValue(props.modalPadding, props.modalPadding?.xl, LargerDefault)};

    ${(props) =>
      breakpoints.map(
        (breakpoint) =>
          css`
            @media (max-width: ${breakpoint.break}px) {
              padding: calc(
                ${getSizeValue(
                  props.modalPadding,
                  props.modalPadding?.[breakpoint.name],
                  breakpoint.reverse ? SmallerDefault : LargerDefault
                )}
              );
            }
          `
      )};

    .close {
      position: absolute;
      right: 1rem;
      top: 1rem;
      opacity: 0.5;
      color: var(--colorWhite);

      transition: 0.3s;
      &:hover {
        opacity: 1;
      }
    }
  }
  z-index: 1001;
`;
