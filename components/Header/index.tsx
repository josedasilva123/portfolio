import React from 'react'
import { Col, Container, FlexRow } from '../../styles/grid';

const Header: React.FC = () => {
  return (
    <header>
        <Container>
            <FlexRow justifyContent={{default: 'space-between'}}>
                <Col size={{ default: "100%"}}>
                    <h1>Alex <b>Conder</b></h1>
                </Col>
                <Col size={{ default: "100%"}}>
                    <nav className="menu">
                        <ul>
                            <li>Sobre</li>
                            <li>Projetos</li>
                        </ul>
                        
                    </nav>
                </Col>
            </FlexRow>
        </Container>
    </header>    
  )
}

export default Header;