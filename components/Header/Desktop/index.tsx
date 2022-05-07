import React from "react";
import { ThemeButton } from "../../../styles/buttons";
import { Col, Container, FlexRow } from "../../../styles/grid";
import { StyledHeader } from "./styles";

const DesktopHeader: React.FC = () => {
  return (
    <StyledHeader>
      <Container containerPadding="sm">
        <FlexRow
          alignItems={{ default: "center" }}
          justifyContent={{ default: "space-between" }}
        >
          <Col size={{ default: "100%" }}>
            <h1>
              Alex <b>Conder</b>
            </h1>
          </Col>
          <Col size={{ default: "100%" }}>
            <FlexRow
              alignItems={{ default: "center" }}
              justifyContent={{ default: "flex-end" }}
            >
              <nav className="menu">
                <ul>
                  <li>Sobre</li>
                  <li>Projetos</li>
                </ul>
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
