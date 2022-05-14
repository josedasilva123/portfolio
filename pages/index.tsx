import type { NextPage } from 'next';
import AboutMe from '../components/AboutMe';
import MainBanner from '../components/MainBanner';
import Projects from '../components/Projects';
import SoftSkills from '../components/SoftSkills';
import Techs from '../components/Techs';

const Home: NextPage = () => {
  return (
    <>
      <MainBanner />
      <AboutMe />
      <Techs />
      <SoftSkills />
      <Projects />
    </>
  )
}

export default Home
