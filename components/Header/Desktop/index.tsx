import React from "react";
import { ThemeButton } from "../../../styles/buttons";
import { Col, Container, FlexRow } from "../../../styles/grid";
import { StyledHeader } from "./styles";

import Logo from "../Logo";
import NavMenu from "../NavMenu";


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
              alignItems={{ default: "center" }}
              justifyContent={{ default: "flex-end" }}
            >
              <nav className="menu">
                <NavMenu />
                <ThemeButton
                  buttonSize="md"
                  buttonStyle="solid1"
                  onClick={() => alert("Oi")}
                >
                  QUERO CONTRATAR
                </ThemeButton>
              </nav>
            </FlexRow>
          </Col>
        </FlexRow>
      </Container>
    </StyledHeader>
  );
};

export default DesktopHeader;
