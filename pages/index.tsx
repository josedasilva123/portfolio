import type { NextPage } from 'next';
import AboutMe from '../components/AboutMe';
import MainBanner from '../components/MainBanner';

const Home: NextPage = () => {
  return (
    <>
      <MainBanner />
      <AboutMe />
    </>
  )
}

export default Home
