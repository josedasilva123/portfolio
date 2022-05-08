import styled, { css } from "styled-components";
import { BaseContainer, BaseFlexRow, BaseCol } from "./components/grid";
import {
  XLDefault,
  LGDefault,
  MDDefault,
  SMDefault,
  XSDefault,
  getSizeValue,
} from "./functions/sizes";

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

  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};

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
  gap: ${(props) => props.gap};


  align-items: ${(props) =>
    getSizeValue(props.alignItems, props.alignItems?.xl, XLDefault)};
  justify-content: ${(props) =>
    getSizeValue(props.justifyContent, props.justifyContent?.xl, XLDefault)};
  flex-direction: ${(props) =>
    getSizeValue(props.flexDirection, props.flexDirection?.xl, XLDefault)};
  flex-wrap: ${(props) =>
    getSizeValue(props.flexWrap, props.flexWrap?.xl, XLDefault)};

  @media (max-width: 1368px) {
    align-items: ${(props) =>
      getSizeValue(props.alignItems, props.alignItems?.lg, LGDefault)};
    justify-content: ${(props) =>
      getSizeValue(props.justifyContent, props.justifyContent?.lg, LGDefault)};
    flex-direction: ${(props) =>
      getSizeValue(props.flexDirection, props.flexDirection?.lg, LGDefault)};
    flex-wrap: ${(props) =>
      getSizeValue(props.flexDirection, props.flexDirection?.lg, LGDefault)};
  }

  @media (max-width: 1024px) {
    align-items: ${(props) =>
      getSizeValue(props.alignItems, props.alignItems?.md, MDDefault)};
    justify-content: ${(props) =>
      getSizeValue(props.justifyContent, props.justifyContent?.md, MDDefault)};
    flex-direction: ${(props) =>
      getSizeValue(props.flexDirection, props.flexDirection?.md, MDDefault)};
    flex-wrap: ${(props) =>
      getSizeValue(props.flexWrap, props.flexWrap?.md, MDDefault)};
  }

  @media (max-width: 768px) {
    align-items: ${(props) =>
      getSizeValue(props.alignItems, props.alignItems?.sm, SMDefault)};
    justify-content: ${(props) =>
      getSizeValue(props.justifyContent, props.justifyContent?.sm, SMDefault)};
    flex-direction: ${(props) =>
      getSizeValue(props.flexDirection, props.flexDirection?.sm, SMDefault)};
    flex-wrap: ${(props) =>
      getSizeValue(props.flexWrap, props.flexWrap?.sm, SMDefault)};
  }

  @media (max-width: 425px) {
    align-items: ${(props) =>
      getSizeValue(props.alignItems, props.alignItems?.xs, XSDefault)};
    justify-content: ${(props) =>
      getSizeValue(props.justifyContent, props.justifyContent?.xs, XSDefault)};
    flex-direction: ${(props) =>
      getSizeValue(props.flexDirection, props.flexDirection?.xs, XSDefault)};
    flex-wrap: ${(props) =>
      getSizeValue(props.flexWrap, props.flexWrap?.xs, XSDefault)};
  }
  
  margin-top: ${(props) => props.rowMargin?.top};
  margin-bottom: ${(props) => props.rowMargin?.bottom};
`;

//Col com largura orientada em %
export const Col = styled(BaseCol)`
  display: block;
  width: calc(${(props) => getSizeValue(props.size, props.size?.xl, XLDefault)});
  @media (max-width: 1368px) {
    width: calc(${(props) => getSizeValue(props.size, props.size?.lg, LGDefault)});
  }
  @media (max-width: 1024px) {
    width: calc(${(props) => getSizeValue(props.size, props.size?.md, MDDefault)});
  }
  @media (max-width: 768px) {
    width: calc(${(props) => getSizeValue(props.size, props.size?.sm, SMDefault)});
  }
  @media (max-width: 425px) {
    width: calc(${(props) => getSizeValue(props.size, props.size?.xs, XSDefault)});
  }
`;

