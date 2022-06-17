import React from 'react'

interface iForm{
    children: React.ReactNode;
    className?: string;
    gap?: string;
    handleSubmit: (event: React.SyntheticEvent) => void;
}

const BaseForm: React.FC<iForm> = ({children, className, handleSubmit}) => {


  return (
    <form onSubmit={handleSubmit} className={className}>
        {children}
    </form>    
  )
}

export default BaseForm;