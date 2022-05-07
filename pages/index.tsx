import type { NextPage } from 'next';
import { Container, FlexRow, Col } from '../styles/grid';
import { ThemeLabel, ThemeTitle } from '../styles/typography';

const Home: NextPage = () => {
  return (
    <Container containerSize='sm' containerPadding='sm'>
      <FlexRow gap="2rem" flexWrap={{default: 'wrap'}} justifyContent={{default: 'space-between'}}>
        <Col size={{lg: "(100% - 2rem)/2", md: "100%"}}>
          <h1 style={{color: '#fff'}}>Teste</h1>
          <ThemeLabel labelColor='primary'>Teste</ThemeLabel>
          <ThemeTitle titleTag="h1" titleSize='headline' titleColor='white'>Teste</ThemeTitle>
          <ThemeTitle titleTag="h2" titleSize='title1' titleColor='primary'>Teste</ThemeTitle>
          <ThemeTitle titleTag="h2" titleSize='title2' titleColor='secondary'>Teste</ThemeTitle>
          <ThemeTitle titleTag="h3" titleSize='title3'>Teste</ThemeTitle>
          
        </Col>
        <Col size={{lg: "(100% - 2rem)/2", md: "100%"}}>
          <h1 style={{color: '#fff'}}>Teste</h1>
        </Col>
      </FlexRow>
    </Container>
  )
}

export default Home
