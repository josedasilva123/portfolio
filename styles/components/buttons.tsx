import React from 'react'

interface iButton{
    className?: string;
    disabled?: boolean;
    link?: boolean;
    href?: string;
    target?: "_blank";
    children: React.ReactNode;
    buttonActive?: boolean;
    fullWidth?: boolean;
    buttonSize:  "xs" | "sm" | "md" | "lg" | "xl" | "round";
    buttonStyle: "solid1" | "solid2" | "solid3" | "outline1" | "outline2" | "outline3" | "link";
    type?: "submit";
    onClick?: () => void;
}

export const BaseButton: React.FC<iButton> = ({children, className, disabled, onClick, type, link, href, target }) => {
  return (
    <>
      {link ? (
        <a className={className} href={href} target={target}>
          {children}
        </a>
      ): (
        <button className={className} disabled={disabled} onClick={onClick} type={type}>
        {children}
    </button>
      )}
    </>
    
  )
}

export default BaseButton;