import type { NextPage } from 'next';
import AboutMe from '../components/AboutMe';
import MainBanner from '../components/MainBanner';
import Techs from '../components/Techs';

const Home: NextPage = () => {
  return (
    <>
      <MainBanner />
      <AboutMe />
      <Techs />
    </>
  )
}

export default Home
