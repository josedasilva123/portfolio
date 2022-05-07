import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, FlexRow, Col } from '../styles/grid'
import { ThemeTitle } from '../styles/typography'
const Home: NextPage = () => {
  return (
    <Container containerSize='sm' containerPadding='sm'>
      <FlexRow gap="2rem" flexWrap={{default: 'wrap'}} justifyContent={{default: 'space-between'}}>
        <Col size={{lg: "(100% - 2rem)/2", md: "100%"}}>
          <h1 style={{color: '#fff'}}>Teste</h1>
          <ThemeTitle titleTag="h1" titleSize='headline'>Teste</ThemeTitle>
        </Col>
        <Col size={{lg: "(100% - 2rem)/2", md: "100%"}}>
          <h1 style={{color: '#fff'}}>Teste</h1>
        </Col>
      </FlexRow>
    </Container>
  )
}

export default Home
