import React, { ChangeEventHandler } from "react";

interface iInputProps {
  value?: string | number;
  onChange: (event: any) => void;
  onKeyUp: () => void;
  onBlur: () => boolean;
  error?: string | null;
}

interface iInput {
  className?: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "number" | "textarea";
  size: "sm" | "md" | "lg";
  name: string;
  maxLength?: number;
  textAreaHeight?: number;
  textAreaMaxHeight?: number;
  inputProps: iInputProps;
}

const BaseInput: React.FC<iInput> = ({
  className,
  label,
  type,
  name,
  maxLength,
  placeholder,
  inputProps,
}) => {
  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          {...inputProps}
        ></textarea>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          {...inputProps}
        />
      )}
      {inputProps.error && <p className="error">{inputProps.error}</p>}
    </div>
  );
};

export default BaseInput;
