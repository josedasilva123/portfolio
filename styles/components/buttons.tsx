import React from 'react'

interface iButton{
    className?: string;
    disabled?: boolean
    children: React.ReactNode;
    buttonActive?: boolean;
    fullWidth?: boolean;
    buttonSize: | "xs" | "sm" | "md" | "lg" | "xl";
    buttonStyle: "solid1" | "solid2" | "solid3" | "outline1" | "outline2" | "outline3";
    type?: "submit";
    onClick?: () => void;
}

export const BaseButton: React.FC<iButton> = ({children, className, disabled, onClick, type }) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick} type={type}>
        {children}
    </button>
  )
}

export default BaseButton;