/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from 'next'
import Head from 'next/head';
import React, {useContext, useEffect} from 'react'
import TestmonialFeed from '../components/Testmonials/TestmonialFeed';
import { iTestmonial, TestmonialContext } from '../contexts/TestmonialContext';

interface iDepoimentos {
    testmonials: iTestmonial[] | [];
}

const Depoimentos: NextPage<iDepoimentos> = ({testmonials}) => {
  const {setTestmonials} = useContext(TestmonialContext);
  
  useEffect(() => {
    setTestmonials(testmonials);
  }, [])

  return (
    <>
      <Head>
        <title>Alex Conder - Portfólio - Depoimentos</title>
      </Head>
       <TestmonialFeed />
    </>
  )
}

export async function getServerSideProps() {
    try { 
      //Fetch Testmonials
      const resTest = await fetch(
        `https://alex-conder-portfolio-api.herokuapp.com/sheets/rows/depoimentos`
      )
  
      const dataTest = await resTest.json();
      const filteredData = dataTest.filter((testmonial: any) => testmonial.approved === "yes");
  
      return { props: { testmonials: filteredData } };
    } catch (error) {
      console.log(error);
    }
  }

export default Depoimentos