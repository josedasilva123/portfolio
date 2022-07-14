import React from "react";

import Image from "next/image";

import { Container, FlexRow, Col } from "../../styles/grid";
import {
  ThemeParagraph,
  ThemeTitle,
  ThemeLabel,
  ThemeTextBox,
  ThemeList,
} from "../../styles/typography";

import { motion } from "framer-motion";

const SoftSkills: React.FC = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Container
          containerPadding="sm"
          paddingTop={{ xl: "4rem", lg: "3rem", md: "2rem" }}
          paddingBottom={{ xl: "5rem", lg: "4rem", md: "2rem" }}
        >
          <FlexRow
            gap={{ default: "2rem" }}
            alignItems={{ default: "center" }}
            justifyContent={{ default: "space-between" }}
            flexDirection={{ sm: "column", md: "row" }}
          >
            <Col size={{ default: "100%" }}>
              <ThemeTitle
                titleTag="h2"
                titleSize="title1"
                titleColor="white"
                tabIndex={0}
              >
                Minhas Softskills
              </ThemeTitle>
              <ThemeTitle
                titleTag="p"
                titleSize="subtitle"
                titleColor="primary"
              >
                Criatividade, dedicação e iniciativa
              </ThemeTitle>
              <ThemeTextBox gap="1rem" textBoxMargin={{ top: "1rem" }}>
                <ThemeParagraph paragraphColor="white">
                  Sou um profissional com bastante criatividade e iniciativa,
                  vejo um problema e busco uma solução, vejo uma oportunidade e
                  aproveito da melhor forma.
                </ThemeParagraph>
                <ThemeList
                  gap="1rem"
                  listTag="ul"
                  listItemColor="secondary"
                  listStyle="circle"
                  paddingLeft="1rem"
                >
                  <li>
                    É bem fácil se comunicar comigo, já trabalhei liderando
                    equipes, treinando time e ensinando.
                  </li>
                  <li>
                    Sou versátil, estou em constante aprendizado e me coloco
                    sempre fléxivel a mudança
                  </li>
                  <li>
                    Sou criativo e proativo, gosto de resolver problemas, propor
                    ideias e ousar, ir além do requisito e entregar excelência.
                  </li>
                </ThemeList>
              </ThemeTextBox>
            </Col>
            <Col size={{ default: "100%" }}>
              <FlexRow
                flexDirection={{ default: "column" }}
                alignItems={{ default: "center" }}
                justifyContent={{ default: "center" }}
              >
                <Image
                  src="/SoftSkills2.svg"
                  width={500}
                  height={500}
                  alt="Gamer"
                />
              </FlexRow>
            </Col>
          </FlexRow>
        </Container>
      </motion.div>
    </section>
  );
};

export default SoftSkills;
