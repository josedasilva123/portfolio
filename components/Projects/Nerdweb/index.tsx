import React from "react";
import { nerdwebProjects } from "../../../data/project";
import { Container, FlexRow, Col } from "../../../styles/grid";
import {
  ThemeTitle,
  ThemeParagraph,
  ThemeTextBox,
} from "../../../styles/typography";
import ProjectCard from "./ProjectCard";

const Nerdweb = () => {
  return (
    <Container paddingTop={{ xl: "4rem", md: "3rem" }}>
      <FlexRow
        gap={{ xl: "4rem", md: "2rem" }}
        flexDirection={{ lg: "row", md: "column" }}
      >
        <Col size={{ lg: "40%", md: "100%" }}>
          <ThemeTitle titleTag="h3" titleSize="title2" titleColor="white">
            Nerdweb
          </ThemeTitle>
          <ThemeTitle titleTag="h4" titleSize="subtitle" titleColor="primary">
            Aprendizado em diversos segmentos
          </ThemeTitle>
        </Col>
        <Col size={{ lg: "60%", md: "100%" }}>
          <ThemeTextBox gap="1rem">
            <ThemeParagraph paragraphColor="white">
              Atuando como UI/UX, front-end e back-end, tive a oportunidade de
              participar de diversos projetos de consolidas marcas, como:{" "}
              <b>
                Positivo, Caldo Bom, Vitao, Britania, Philco, Ndd Tech, entre
                outros.
              </b>{" "}
              Conheça alguns desses projetos:
            </ThemeParagraph>
          </ThemeTextBox>
        </Col>
      </FlexRow>

      <FlexRow
        gap={{ default: "2rem" }}
        flexWrap={{ default: "wrap" }}
        rowMargin={{ top: "2rem" }}
        rowTag="ul"
      >
        {nerdwebProjects.map((project) => (
          <Col key={project.name} size={{ lg: "(100% - 2rem)/2", md: "100%" }}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </FlexRow>
    </Container>
  );
};

export default Nerdweb;
