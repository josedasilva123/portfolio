/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import MainBanner from "../components/MainBanner";
import Projects from "../components/Projects";
import SoftSkills from "../components/SoftSkills";
import Techs from "../components/Techs";
import Testmonials from "../components/Testmonials";
import { TestmonialContext } from "../contexts/TestmonialContext";
import { gitHubProjects } from "../data/project";
import { ThemeModal } from "../styles/modal";

interface iHome {
  repositories?: any[];
  testmonials: any[];
  repoError?: string;
}

const Home: NextPage<iHome> = ({ repositories, repoError, testmonials }) => {
  const {setTestmonials} = useContext(TestmonialContext);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    setTestmonials(testmonials);
  }, [])

  return (
    <>
      <MainBanner />
      <AboutMe />
      <Techs />
      <SoftSkills />
      <Projects repo={repositories} error={repoError} />
      <Testmonials />
      <ThemeModal active={modal} setActive={setModal}>
        teste
      </ThemeModal>
    </>
  );
};

export async function getStaticProps() {
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

    return { props: { repositories: filteredData, testmonials: dataTest.values } };
  } catch (error) {
    return { props: { repoError: "Não foi possível carregar o repositório" } };
  }
}

export default Home;
