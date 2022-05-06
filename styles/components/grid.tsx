import React from 'react'
import {tSizeList} from '../functions/sizes'

interface iContainer{
  className?: string;
  children: React.ReactNode;
  containerPadding?: "sm" | "md" | "lg";
  containerSize?: "sm" | "md" | "lg";
}

interface iFlexRow{
  className?: string;
  children: React.ReactNode;
  gap?: string;
  alignItems?: tSizeList;
  justifyContent?: tSizeList;
  flexDirection?: tSizeList;
  flexWrap?: tSizeList;
}

interface iCol{
  className?: string;
  children: React.ReactNode;
  size?: tSizeList;
}

//Componente base do Container
export const BaseContainer: React.FC<iContainer> = ({children, className}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

//Componente base do FlexRow
export const BaseFlexRow: React.FC<iFlexRow> = ({children, className}) => {
  return (
    <div className={className}>
      {children}
    </div>
  ) 
}

//Componente base do Col
export const BaseCol: React.FC<iCol> = ({children, className}) => {
  return (
    <div className={className}>
      {children}
    </div>
  ) 
}
