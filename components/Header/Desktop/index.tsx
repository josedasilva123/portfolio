import React from "react";

import { Col, Container, FlexRow } from "../../../styles/grid";
import { StyledHeader } from "./styles";

import Logo from "../Logo";
import NavMenu from "../NavMenu";
import DarkModeButton from "../DarkModeButton";


const DesktopHeader: React.FC = () => {
  return (
    <StyledHeader>
      <Container containerPadding="sm">
        <FlexRow
          alignItems={{ default: "center" }}
          justifyContent={{ default: "space-between" }}
        >
          <Col size={{ default: "100%" }}>
              <Logo />
          </Col>
          <Col size={{ default: "100%" }}>
            <FlexRow
              gap={{ default: '1rem'}}
              alignItems={{ default: "center" }}
              justifyContent={{ default: "flex-end" }}
            >
              <nav className="menu">
                <NavMenu />         
              </nav>  
              <DarkModeButton />
            </FlexRow>
          </Col>
        </FlexRow>
      </Container>
    </StyledHeader>
  );
};

export default DesktopHeader;
