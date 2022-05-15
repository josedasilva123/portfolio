import styled, { css } from "styled-components";
import { BaseContainer, BaseFlexRow, BaseCol } from "./components/grid";
import {
  getSizeValue,
  LargerDefault,
  SmallerDefault,
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

  padding-top: ${(props) => getSizeValue(props.paddingTop, props.paddingTop?.xl, LargerDefault)};
  padding-bottom: ${(props) => getSizeValue(props.paddingBottom, props.paddingBottom?.xl, LargerDefault)};

  @media (max-width: 1368px){
    padding-top: ${(props) => getSizeValue(props.paddingTop, props.paddingTop?.lg, LargerDefault)};
    padding-bottom: ${(props) => getSizeValue(props.paddingBottom, props.paddingBottom?.lg, LargerDefault)};
  }

  @media (max-width: 1024px){
    padding-top: ${(props) => getSizeValue(props.paddingTop, props.paddingTop?.md, LargerDefault)};
    padding-bottom: ${(props) => getSizeValue(props.paddingBottom, props.paddingBottom?.md, LargerDefault)};
  }

  @media (max-width: 768px){
    padding-top: ${(props) => getSizeValue(props.paddingTop, props.paddingTop?.sm, SmallerDefault)};
    padding-bottom: ${(props) => getSizeValue(props.paddingBottom, props.paddingBottom?.sm, SmallerDefault)};
  }

  @media (max-width: 425px){
    padding-top: ${(props) => getSizeValue(props.paddingTop, props.paddingTop?.xs, SmallerDefault)};
    padding-bottom: ${(props) => getSizeValue(props.paddingBottom, props.paddingBottom?.xs, SmallerDefault)};
  }
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
    getSizeValue(props.justifyContent, props.justifyContent?.xl, LargerDefault)};
  flex-direction: ${(props) =>
    getSizeValue(props.flexDirection, props.flexDirection?.xl, LargerDefault)};
  flex-wrap: ${(props) =>
    getSizeValue(props.flexWrap, props.flexWrap?.xl, LargerDefault)};

  @media (max-width: 1368px) {
    gap: ${(props) => getSizeValue(props.gap, props.gap?.lg, LargerDefault)};

    align-items: ${(props) =>
      getSizeValue(props.alignItems, props.alignItems?.lg, LargerDefault)};
    justify-content: ${(props) =>
      getSizeValue(props.justifyContent, props.justifyContent?.lg, LargerDefault)};
    flex-direction: ${(props) =>
      getSizeValue(props.flexDirection, props.flexDirection?.lg, LargerDefault)};
    flex-wrap: ${(props) =>
      getSizeValue(props.flexDirection, props.flexDirection?.lg, LargerDefault)};
  }

  @media (max-width: 1024px) {
    gap: ${(props) => getSizeValue(props.gap, props.gap?.md, LargerDefault)};

    align-items: ${(props) =>
      getSizeValue(props.alignItems, props.alignItems?.md, LargerDefault)};
    justify-content: ${(props) =>
      getSizeValue(props.justifyContent, props.justifyContent?.md, LargerDefault)};
    flex-direction: ${(props) =>
      getSizeValue(props.flexDirection, props.flexDirection?.md, LargerDefault)};
    flex-wrap: ${(props) =>
      getSizeValue(props.flexWrap, props.flexWrap?.md, LargerDefault)};
  }

  @media (max-width: 768px) {
    gap: ${(props) => getSizeValue(props.gap, props.gap?.sm, SmallerDefault)};

    align-items: ${(props) =>
      getSizeValue(props.alignItems, props.alignItems?.sm, SmallerDefault)};
    justify-content: ${(props) =>
      getSizeValue(props.justifyContent, props.justifyContent?.sm, SmallerDefault)};
    flex-direction: ${(props) =>
      getSizeValue(props.flexDirection, props.flexDirection?.sm, SmallerDefault)};
    flex-wrap: ${(props) =>
      getSizeValue(props.flexWrap, props.flexWrap?.sm, SmallerDefault)};
  }

  @media (max-width: 425px) {
    gap: ${(props) => getSizeValue(props.gap, props.gap?.xs, SmallerDefault)};

    align-items: ${(props) =>
      getSizeValue(props.alignItems, props.alignItems?.xs, SmallerDefault)};
    justify-content: ${(props) =>
      getSizeValue(props.justifyContent, props.justifyContent?.xs, SmallerDefault)};
    flex-direction: ${(props) =>
      getSizeValue(props.flexDirection, props.flexDirection?.xs, SmallerDefault)};
    flex-wrap: ${(props) =>
      getSizeValue(props.flexWrap, props.flexWrap?.xs, SmallerDefault)};
  }
  
  margin-top: ${(props) => props.rowMargin?.top};
  margin-bottom: ${(props) => props.rowMargin?.bottom};
`;

//Col com largura orientada em %
export const Col = styled(BaseCol)`
  display: block;
  width: calc(${(props) => getSizeValue(props.size, props.size?.xl, LargerDefault)});
  @media (max-width: 1368px) {
    width: calc(${(props) => getSizeValue(props.size, props.size?.lg, LargerDefault)});
  }
  @media (max-width: 1024px) {
    width: calc(${(props) => getSizeValue(props.size, props.size?.md, LargerDefault)});
  }
  @media (max-width: 768px) {
    width: calc(${(props) => getSizeValue(props.size, props.size?.sm, SmallerDefault)});
  }
  @media (max-width: 425px) {
    width: calc(${(props) => getSizeValue(props.size, props.size?.xs, SmallerDefault)});
  }
`;

