/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ThemeButton } from "../../styles/buttons";
import { Container } from "../../styles/grid";
import {
  ThemeLabel,
  ThemeParagraph,
  ThemeTitle,
} from "../../styles/typography";
import { TechMenu } from "../Techs/styles";
import Nerdweb from "./Nerdweb";

const Projects = () => {
  const [currentTab, setCurrentTag] = useState("nerdweb");
  return (
    <Container containerPadding="sm" paddingTop="4rem" paddingBottom="5rem">
      <ThemeLabel labelColor="white" labelAlign="center">
        Um pouco da minha trajetoria
      </ThemeLabel>
      <ThemeTitle
        titleTag="h2"
        titleSize="title1"
        titleColor="white"
        titleAlign="center"
      >
        Atuação Profissional
      </ThemeTitle>
      <ThemeTitle
        titleTag="h3"
        titleSize="subtitle"
        titleColor="primary"
        titleAlign="center"
      >
        Já participei de mais 150 projetos incluindo sites e aplicações
      </ThemeTitle>
      <ThemeParagraph
        paragraphColor="white"
        paragraphMargin={{ top: "1rem" }}
        paragraphAlign="center"
      >
        Seguem abaixo alguns destes projetos, dividos por categoria:
      </ThemeParagraph>
      <TechMenu>
        <li>
          <ThemeButton
            buttonSize="sm"
            buttonStyle="outline2"
            buttonActive={currentTab.toLowerCase() === "nerdweb" ? true : false}
            onClick={() => setCurrentTag("nerdweb")}
          >
            Nerdweb
          </ThemeButton>
        </li>
        <li>
          <ThemeButton
            buttonSize="sm"
            buttonStyle="outline2"
            buttonActive={
              currentTab.toLowerCase() === "pessoais" ? true : false
            }
            onClick={() => setCurrentTag("pessoais")}
          >
            Projetos Pessoais
          </ThemeButton>
        </li>
      </TechMenu>
      {currentTab === "nerdweb" && (
        <Nerdweb />
      )}
    </Container>
  );
};

export default Projects;