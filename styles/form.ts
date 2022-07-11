import styled, { css } from "styled-components";
import BaseAlert from "./components/form/alert";
import BaseForm from "./components/form/form";
import BaseInput from "./components/form/input";

export const Form = styled(BaseForm)`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: ${(props) => props.gap};
`;

export const FormInput = styled(BaseInput)`
  width: 100%;

  label {
    display: block;

    font-family: var(--PrimaryFont);
    color: var(--colorPrimary);

    margin-bottom: 0.4rem;
  }

  textarea {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: ${(props) =>
      props.textAreaHeight ? props.textAreaHeight : 150}px;
    height: ${(props) => (props.textAreaHeight ? props.textAreaHeight : 150)}px;
    max-height: ${(props) =>
      props.textAreaMaxHeight ? props.textAreaMaxHeight : 200}px;

    padding: 1rem;

    font-size: 16px;

    line-height: 1.6;

    border: var(--InputBorder);
    ${(props) =>
      props.error &&
      css`
        border: 1px solid red;
      `}

    background: var(--colorInputBackground);
    color: var(--colorInputText);

    border-radius: var(--InputRadius);
  }

  input {
    width: 100%;

    font-size: 16px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s;

    border: var(--InputBorder);
    ${(props) =>
      props.error &&
      css`
        border: 1px solid red;
      `}

    background: var(--colorInputBackground);
    color: var(--colorInputText);

    border-radius: var(--InputRadius);
    padding: 0 1rem;

    ${(props) => {
      switch (props.size) {
        case "sm":
          return css`
            height: 42px;
          `;
        case "md":
          return css`
            height: 48px;
          `;
        case "lg":
          return css`
            height: 52px;
          `;
      }
    }}
  }

  .error {
    margin-top: 0.4rem;
    color: red;
  }
`;

export const Alert = styled(BaseAlert)`
  width: ${(props) => props.fullWidth && "100%"};
  .error {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.6rem;

    padding: 0 1.5rem;
    height: 52px;    

    color: var(--colorBlack);

    ${(props) => {
      switch (props.alertType) {
        case "sucess":
          return css`
            border-left: 3px solid var(--colorSucessSolid);
            background: var(--colorSucessBackground);
          `;
        case "alert":
          return css`
            border-left: 3px solid var(--colorAlertSolid);
            background: var(--colorAlertBackground);
          `;

        case "error":
          return css`
            border-left: 3px solid var(--colorErrorSolid);
            background: var(--colorErrorBackground);
          `;
      }
    }}
  }
  .progressBar{
    width: 100%;
    height: 4px;

    span{
      display: flex;
      height: 4px;
      animation: barAnimation ${(props) => props.alertDuration || 3000}ms forwards;
    }

    ${(props) => {
      switch (props.alertType) {
        case "sucess":
          return css`
            background: var(--colorSucessBackground);
            span{
              background: var(--colorSucessSolid);
            }
          `;
        case "alert":
          return css`            
            background: var(--colorAlertBackground);
            span{
              background: var(--colorAlertSolid);
            }
          `;

        case "error":
          return css`
            background: var(--colorErrorBackground);
            span{
              background: var(--colorErrorSolid);
            }
          `;
      }
    }}

    @keyframes barAnimation{
      from{
        width: 100%;
      } to {
        width: 0;
      }
    }
  }
`;
