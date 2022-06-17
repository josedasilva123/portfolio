import React from "react";

import Image from "next/image";

import { Col, Container, FlexRow } from "../../../styles/grid";
import {
  ThemeParagraph,
  ThemeTextBox,
  ThemeTitle,
} from "../../../styles/typography";

const Kenzie = () => {
  return (
    <Container paddingTop={{ xl: "4rem", md: "3rem" }}>
      <FlexRow
        gap={{ default: "2rem" }}
        alignItems={{ default: "center" }}
        justifyContent={{ default: "space-between" }}
        flexDirection={{ sm: "column", md: "row" }}
      >
        <Col size={{ default: "100%" }}>
          <FlexRow
            flexDirection={{ default: "column" }}
            alignItems={{ default: "center" }}
            justifyContent={{ default: "center" }}
          >
            <Image
              src="/KenzieAcademy2.svg"
              width={500}
              height={500}
              alt="Devolpement Teacher"
            />
          </FlexRow>
        </Col>
        
        <Col size={{ default: "100%" }}>
          <ThemeTitle titleTag="h3" titleSize="title1" titleColor="white">
            Kenzie Academy
          </ThemeTitle>
          <ThemeTitle titleTag="h4" titleSize="subtitle" titleColor="primary">
            Uma jornada de ensinar, aprender e evoluir
          </ThemeTitle>
          <ThemeTextBox gap="1rem" textBoxMargin={{ top: "1rem" }}>
            <ThemeParagraph paragraphColor="white">
              A Kenzie Academy Brasil vem sendo uma experiência fantástica, uma
              oportunidade de desenvolver ainda mais hard e softskills.
              Proporcionando a oportunidade de unir duas paixões:{" "}
              <b>programação e ensino</b>
            </ThemeParagraph>
          </ThemeTextBox>
        </Col>
      </FlexRow>
    </Container>
  );
};

export default Kenzie;
