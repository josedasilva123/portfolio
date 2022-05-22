import React from 'react'
import { GlobalStorage } from './GlobalContext';
import { TestmonialStorage } from './TestmonialContext';

interface iProviders {
    children: React.ReactNode;
}   
const Providers: React.FC<iProviders> = ({children}) => {
  return (
    <GlobalStorage>
        <TestmonialStorage>
            {children}
        </TestmonialStorage>
    </GlobalStorage>   
  )
}

export default Providers