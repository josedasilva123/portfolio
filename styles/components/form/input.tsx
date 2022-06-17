import React, { ChangeEventHandler } from "react";

interface iInputProps {
  value?: string | number;
  name?: string;
  onChange: (event: any) => void;
  onKeyUp: () => void;
  onBlur: () => void;
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
  error: string | null;
}

const BaseInput: React.FC<iInput> = ({
  className,
  label,
  type,
  name,
  maxLength,
  placeholder,
  inputProps,
  error,
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
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default BaseInput;
