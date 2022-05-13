import type { NextPage } from 'next';
import AboutMe from '../components/AboutMe';
import MainBanner from '../components/MainBanner';
import SoftSkills from '../components/SoftSkills';
import Techs from '../components/Techs';

const Home: NextPage = () => {
  return (
    <>
      <MainBanner />
      <AboutMe />
      <Techs />
      <SoftSkills />
    </>
  )
}

export default Home
