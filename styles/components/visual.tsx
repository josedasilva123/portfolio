import React from 'react'
import { iPadding } from '../../interfaces/global';
import { motion } from "framer-motion";

interface iPercentBar{
    className?: string; 
    percentValue: number;
    backgroundColor?: 'white' | 'primary' | 'secondary';
}

interface iCard{
  children?: React.ReactNode;
  className?: string; 
  cardStyle?: 'solid1' | 'solid1b' | 'solid2' | 'solid2b';
  padding?: iPadding;
}

interface iTag{
  children?: React.ReactNode;
  className?: string; 
  tagType: 'solid' | 'outline',
  tagColor: string;
}

export const BasePercentBar: React.FC<iPercentBar> = ({className, percentValue}) => {
  return (
    <div className={className}>
        <motion.span
          initial={{ width: "1%" }}
          whileInView={{ width: `${percentValue}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}    
        >
        </motion.span>  
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