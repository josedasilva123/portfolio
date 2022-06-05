import { NextPage } from 'next'
import React, {useContext} from 'react'

interface iDepoimentos {
    testmonials: any[];
  }

const Depoimentos: NextPage<iDepoimentos> = ({testmonials}) => {
  return (
    <div>depoimentos</div>
  )
}

export async function getStaticProps() {
    try { 
      //Fetch Testmonials
      const resTest = await fetch(
        `https://alex-conder-portfolio-api.herokuapp.com/sheets/rows/depoimentos`
      )
  
      const dataTest = await resTest.json();
  
      return { props: { testmonials: dataTest } };
    } catch (error) {
      
    }
  }

export default Depoimentos