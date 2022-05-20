import styled, { css, CSSProp } from "styled-components";
import { BaseContainer, BaseFlexRow, BaseCol } from "./components/grid";
import { breakpoints } from "./globals";
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

  ${(props) => (
    breakpoints.map((breakpoint) => (
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
      `))
  )}

  //Tamanho do Container
  ${(props) => {
    switch (props.containerSize) {
      case "lg":
        return css`
          max-width: 1280px;
        `;
      case "sm":
        return css`
          max-width: 800px;
        `;
      default:
        return css`
          max-width: 1120px;
        `;
    }
  }}
`;

//Row com display flex configurável
export const FlexRow = styled(BaseFlexRow)`
  
  width: 100%;
  display: flex;
  gap: ${(props) => getSizeValue(props.gap, props.gap?.xl, LargerDefault)};

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
  
  //Criação de breakpoint conforme configuração
  ${(props) => (
    breakpoints.map((breakpoint) => (
      css`
        @media (max-width: ${breakpoint.break}px) {
          gap: ${getSizeValue(props.gap, props.gap?.[breakpoint.name], LargerDefault)};
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
        }
      `))
  )}

  margin-top: ${(props) => props.rowMargin?.top};
  margin-bottom: ${(props) => props.rowMargin?.bottom};
`;

//Col com largura orientada em %
export const Col = styled(BaseCol)`
  display: block;
  width: calc(
    ${(props) => getSizeValue(props.size, props.size?.xl, LargerDefault)}
  );

  //Criação de breakpoint conforme configuração
  ${(props) => (    
    breakpoints.map((breakpoint) => (
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
      `)) 
  )}
`;
