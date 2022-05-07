import React from 'react'
import { GlobalStorage } from '../../contexts/GlobalContext';
import DesktopHeader from './Desktop';

const Header: React.FC = () => {
  return (
     <>
        <GlobalStorage>
            <DesktopHeader />
        </GlobalStorage>
     </>
  )
}

export default Header;