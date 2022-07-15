import React, { useContext } from 'react'
import { GlobalContext } from '../../../contexts/GlobalContext'
import Loading from '../../Loading';

interface iPage{
    children: React.ReactNode;
}

const Page: React.FC<iPage> = ({children}) => {
  const {loading} = useContext(GlobalContext);  

  return (
    <>
        {loading ? (
            <Loading />
        ) : (
            <>
                {children}
            </>
        )}
    </>
  )
}

export default Page