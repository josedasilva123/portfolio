import React, {useContext} from 'react'

import { GlobalContext } from '../../../contexts/GlobalContext';
import { MdDarkMode, MdLightMode } from 'react-icons/md'


const DarkModeButton: React.FC = () => {
  const {darkMode, toggleDarkMode} = useContext(GlobalContext);
  return (
    <button onClick={() => toggleDarkMode()} aria-label="darkmode">
        {darkMode ? (
            <MdDarkMode size={24} color="var(--colorWhite)"/>
        ) : (
            <MdLightMode size={24} color="var(--colorDarkMode)"/>
        )}
    </button>   
  )
}

export default DarkModeButton