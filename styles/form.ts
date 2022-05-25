import styled, { css } from "styled-components";
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

  input {
    width: 100%;

    font-size: 16px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s;

    border: var(--InputBorder);
    ${(props) => props.inputProps.error && css`border: 1px solid red;`}

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

    &:focus,
    &:active {
      outline-color: var(--colorWhite);
      outline-style: double;
      filter: brightness(1.1);
    }
  }

  .error {
    margin-top: 0.4rem;
    color: red;
  }
`;
