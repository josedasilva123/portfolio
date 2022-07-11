import styled, { css } from "styled-components";
import {
  BaseContainer,
  BaseFlexRow,
  BaseCol,
  BaseSection,
} from "./components/grid";
import { breakpoints } from "./config/breakpoints";
import { getSizeValue, LargerDefault, SmallerDefault } from "./functions/sizes";

//Sistema de Grid
export const Container = styled(BaseContainer)`
  width: 100%;
  margin: 0 auto;

  //Padding
  ${(props) => {
    switch (props.containerPadding) {
      case "lg":
        return css`
          padding: 1.5rem;
        `;
      case "md":
        return css`
          padding: 1rem;
        `;
      case "sm":
        return css`
          padding: 0.5rem;
        `;
      default:
        return css`
          padding: 0;
        `;
    }
  }}

  padding-top: ${(props) =>
    getSizeValue(props.paddingTop, props.paddingTop?.xl, LargerDefault)};
  padding-bottom: ${(props) =>
    getSizeValue(props.paddingBottom, props.paddingBottom?.xl, LargerDefault)};

  //Criação de breakpoints conforme configuração
  ${(props) =>
    breakpoints.map(
      (breakpoint) =>
        css`
          @media (max-width: ${breakpoint.break}px) {
            padding-top: ${getSizeValue(
              props.paddingTop,
              props.paddingTop?.[breakpoint.name],
              breakpoint.reverse ? SmallerDefault : LargerDefault
            )};
            padding-bottom: ${getSizeValue(
              props.paddingBottom,
              props.paddingBottom?.[breakpoint.name],
              breakpoint.reverse ? SmallerDefault : LargerDefault
            )};
          }
        `
    )}

  //Tamanho do Container
  ${(props) => {
    switch (props.containerSize) {
      case "lg":
        return css`
          max-width: 1320px;
        `;
      case "sm":
        return css`
          max-width: 800px;
        `;
      default:
        return css`
          max-width: 1240px;
        `;
    }
  }}
`;

//Row com display flex configurável
export const FlexRow = styled(BaseFlexRow)`
  width: 100%;
  display: flex;
  gap: ${(props) => getSizeValue(props.gap, props.gap?.xl, LargerDefault)};

  height: ${(props) => props.height};

  align-items: ${(props) =>
    getSizeValue(props.alignItems, props.alignItems?.xl, LargerDefault)};
  justify-content: ${(props) =>
    getSizeValue(
      props.justifyContent,
      props.justifyContent?.xl,
      LargerDefault
    )};
  flex-direction: ${(props) =>
    getSizeValue(props.flexDirection, props.flexDirection?.xl, LargerDefault)};
  flex-wrap: ${(props) =>
    getSizeValue(props.flexWrap, props.flexWrap?.xl, LargerDefault)};

  padding: ${(props) =>
    getSizeValue(props.rowPadding, props.rowPadding?.xl, LargerDefault)};

  //Criação de breakpoints conforme configuração
  ${(props) =>
    breakpoints.map(
      (breakpoint) =>
        css`
          @media (max-width: ${breakpoint.break}px) {
            gap: ${getSizeValue(
              props.gap,
              props.gap?.[breakpoint.name],
              LargerDefault
            )};
            align-items: ${getSizeValue(
              props.alignItems,
              props.alignItems?.[breakpoint.name],
              breakpoint.reverse ? SmallerDefault : LargerDefault
            )};
            justify-content: ${getSizeValue(
              props.justifyContent,
              props.justifyContent?.[breakpoint.name],
              breakpoint.reverse ? SmallerDefault : LargerDefault
            )};
            flex-direction: ${getSizeValue(
              props.flexDirection,
              props.flexDirection?.[breakpoint.name],
              breakpoint.reverse ? SmallerDefault : LargerDefault
            )};
            flex-wrap: ${getSizeValue(
              props.flexDirection,
              props.flexDirection?.[breakpoint.name],
              breakpoint.reverse ? SmallerDefault : LargerDefault
            )};

            padding: ${getSizeValue(
              props.rowPadding,
              props.rowPadding?.[breakpoint.name],
              breakpoint.reverse ? SmallerDefault : LargerDefault
            )};
          }
        `
    )}

  margin-top: ${(props) => props.rowMargin?.top};
  margin-bottom: ${(props) => props.rowMargin?.bottom};
`;

//Col com largura orientada em %
export const Col = styled(BaseCol)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(
    ${(props) => getSizeValue(props.size, props.size?.xl, LargerDefault)}
  );

  //Criação de breakpoints conforme configuração
  ${(props) =>
    breakpoints.map(
      (breakpoint) =>
        css`
          @media (max-width: ${breakpoint.break}px) {
            width: calc(
              ${getSizeValue(
                props.size,
                props.size?.[breakpoint.name],
                breakpoint.reverse ? SmallerDefault : LargerDefault
              )}
            );
          }
        `
    )}
`;

export const Section = styled(BaseSection)`
  display: block;
  ${(props) => {
    switch(props.sectionBackgroundColor){
      case 'primary':
        return css`
          background-color: var(--colorPrimary);
        `
      case 'secondary':
        return css`
          background-color: var(--colorSecondary);
        `  
      case 'white':
        return css`
          background-color: var(--colorWhite);
        `  
      case 'white':
        return css`
          background-color: var(--colorBlack);
        `      
      default:
        return css`
          background-color: ${props.sectionBackgroundColor};
        `
    }
  }}
  background-image: ${(props) => props.sectionBackgroundImage};
  //Caso overlay ativo, o padding será aplicado do overlay
  ${(props) => {
    if (props.sectionOverlay) {
      return css`
        .overlay {
          background: ${props.sectionOverlayColor}
          padding: ${getSizeValue(
            props.sectionPadding,
            props.sectionPadding?.xl,
            LargerDefault
          )};
          ${breakpoints.map(
            (breakpoint) =>
              css`
                @media (max-width: ${breakpoint.break}px) {
                  width: calc(
                    ${getSizeValue(
                      props.sectionPadding,
                      props.sectionPadding?.[breakpoint.name],
                      breakpoint.reverse ? SmallerDefault : LargerDefault
                    )}
                  );
                }
              `
          )}
        }
      `;
    } else {
      return css`
        padding: ${getSizeValue(
          props.sectionPadding,
          props.sectionPadding?.xl,
          LargerDefault
        )};
        ${breakpoints.map(
          (breakpoint) =>
            css`
              @media (max-width: ${breakpoint.break}px) {
                width: calc(
                  ${getSizeValue(
                    props.sectionPadding,
                    props.sectionPadding?.[breakpoint.name],
                    breakpoint.reverse ? SmallerDefault : LargerDefault
                  )}
                );
              }
            `
        )}
      `;
    }
  }}
`;
