import type { NextPage } from 'next';
import AboutMe from '../components/AboutMe';
import MainBanner from '../components/MainBanner';
import Projects from '../components/Projects';
import SoftSkills from '../components/SoftSkills';
import Techs from '../components/Techs';
import { gitHubProjects } from '../data/project';

interface iHome{
  data?: any[],
  error?: string; 
}

const Home: NextPage<iHome> = ({ data, error }) => {
  return (
    <>
      <MainBanner />
      <AboutMe />
      <Techs />
      <SoftSkills />
      <Projects repo={data} error={error} />
    </>
  )
}

export async function getStaticProps() {
  try {
      const res = await fetch(`https://api.github.com/users/josedasilva123/repos`)
      const data = await res.json();
      const filteredData = data.filter(( repo: any ) => gitHubProjects.find((ref) => ref === repo.name));        
      return { props: { data: filteredData } };
  } catch (error) {
     return { props: { error: 'Não foi possível carregar o repositório'}} 
  }
}

export default Home
