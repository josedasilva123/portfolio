/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { iGithubRepoProps } from "../../interfaces/global";
import { ThemeButton } from "../../styles/buttons";
import { Container } from "../../styles/grid";
import {
  ThemeLabel,
  ThemeParagraph,
  ThemeTitle,
} from "../../styles/typography";
import { TechMenu } from "../Techs/styles";
import Kenzie from "./Kenzie";
import Nerdweb from "./Nerdweb";
import Personal from "./Personal";

import { motion } from "framer-motion";

const Projects: React.FC<iGithubRepoProps> = ({ repo, error }) => {
  const [currentTab, setCurrentTag] = useState("nerdweb");
  return (
    <section id="projetos">
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container
          containerPadding="sm"
          paddingTop={{ xl: "4rem", lg: "3rem", md: "2rem" }}
          paddingBottom={{ xl: "5rem", lg: "4rem", md: "2rem" }}
        >
          <ThemeLabel labelColor="white" labelAlign="center">
            Um pouco da minha trajetoria
          </ThemeLabel>
          <ThemeTitle
            titleTag="h2"
            titleSize="title1"
            titleColor="white"
            titleAlign="center"
            tabIndex={0}
          >
            Atuação Profissional
          </ThemeTitle>
          <ThemeTitle
            titleTag="p"
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
                buttonActive={
                  currentTab.toLowerCase() === "nerdweb" ? true : false
                }
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
                  currentTab.toLowerCase() === "kenzie" ? true : false
                }
                onClick={() => setCurrentTag("kenzie")}
              >
                Kenzie Academy
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
          {currentTab === "nerdweb" && <Nerdweb />}
          {currentTab === "kenzie" && <Kenzie />}
          {currentTab === "pessoais" && <Personal repo={repo} error={error} />}
        </Container>
      </motion.div>
    </section>
  );
};

export default Projects;
