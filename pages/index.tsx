/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";

import AboutMe from "../components/AboutMe";
import MainBanner from "../components/MainBanner";
import Projects from "../components/Projects";
import SoftSkills from "../components/SoftSkills";
import Techs from "../components/Techs";
import Testmonials from "../components/Testmonials";
import { TestmonialContext } from "../contexts/TestmonialContext";

import { gitHubProjects } from "../data/project";

interface iHome {
  repositories?: any[];
  testmonials: any[];
  repoError?: string;
}

const Home: NextPage<iHome> = ({ repositories, repoError, testmonials }) => {
  const {setTestmonials} = useContext(TestmonialContext);

  useEffect(() => {
    setTestmonials(testmonials);
  }, [])

  return (
    <>
      <Head>
        <title>Alex Conder - Portfólio - Home</title>
      </Head>
      <MainBanner />
      <AboutMe />
      <Techs />
      <SoftSkills />
      <Projects repo={repositories} error={repoError} />
      <Testmonials />
    </>
  );
};

export async function getServerSideProps() {
  try {
    //Fetch Github Repos
    const repoRes = await fetch(
      `https://api.github.com/users/josedasilva123/repos`
    );
    
    const dataRes = await repoRes.json();
    const filteredData = dataRes.filter((repo: any) =>
      gitHubProjects.find((ref) => ref === repo.name)
    );

    //Fetch Testmonials
    const resTest = await fetch(
      `https://alex-conder-portfolio-api.herokuapp.com/sheets/rows/depoimentos`
    )

    const dataTest = await  resTest.json();

    return { props: { repositories: filteredData, testmonials: dataTest } };
  } catch (error) {
    return { props: { repoError: "Não foi possível carregar o repositório" } };
  }
}

export default Home;
