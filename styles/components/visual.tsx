import React from 'react'

interface iPercentBar{
    className?: string; 
    percentValue: number;
    backgroundColor?: 'white' | 'primary' | 'secondary';
}

export const BasePercentBar: React.FC<iPercentBar> = ({className}) => {
  return (
    <div className={className}>
        <span></span>    
    </div>
  )
}
