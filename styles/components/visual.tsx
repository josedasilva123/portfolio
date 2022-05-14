import React from 'react'
import { iPadding } from '../../interfaces/global';

interface iPercentBar{
    className?: string; 
    percentValue: number;
    backgroundColor?: 'white' | 'primary' | 'secondary';
}

interface iCard{
  children?: React.ReactNode;
  className?: string; 
  padding?: iPadding;
}

interface iTag{
  children?: React.ReactNode;
  className?: string; 
  tagType: 'solid' | 'outline',
  tagColor: string;
}

export const BasePercentBar: React.FC<iPercentBar> = ({className}) => {
  return (
    <div className={className}>
        <span></span>    
    </div>
  )
}

export const BaseCard: React.FC<iCard> = ({className, children}) => {
  return (
    <li className={className}>
      {children}
    </li>
  )
}

export const BaseTag: React.FC<iTag> = ({className, children}) => {
  return (
    <span className={className}>{children}</span>
  )
}