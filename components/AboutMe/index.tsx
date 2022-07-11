import Image from "next/image";
import React, { useEffect } from "react";
import { Col, Container, FlexRow } from "../../styles/grid";
import {
  ThemeLabel,
  ThemeParagraph,
  ThemeTextBox,
  ThemeTitle,
} from "../../styles/typography";

import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  return (
    <section id="sobre">
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
            flexDirection={{ sm: "column-reverse", md: "row" }}
          >
            <Col size={{ default: "100%" }}>
              <motion.div
                initial={{ opacity: 0, x: -100, y: 100 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <FlexRow
                  flexDirection={{ default: "column" }}
                  alignItems={{ default: "center" }}
                  justifyContent={{ default: "center" }}
                >
                  <Image
                    src="/Gamer.svg"
                    width={500}
                    height={500}
                    alt="Gamer"
                  />
                </FlexRow>
              </motion.div>
            </Col>
            <Col size={{ default: "100%" }}>
              <motion.div
                initial={{ opacity: 0, x: 100, y: 100}}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <ThemeLabel labelColor="white">Sobre mim</ThemeLabel>
                <ThemeTitle titleTag="h2" titleSize="title1" titleColor="white" tabIndex={0}>
                  Minha história
                </ThemeTitle>
                <ThemeTitle
                  titleTag="p"
                  titleSize="subtitle"
                  titleColor="primary"
                >
                  6 anos de carreira, 17 anos como programador
                </ThemeTitle>
                <ThemeTextBox gap="1rem" textBoxMargin={{ top: "1rem" }}>
                  <ThemeParagraph paragraphColor="white">
                    Olá, sou Alex Conder (ele/dele), muito prazer! Sou UI
                    Designer a 6 anos, desenvolvedor a 4 anos. Hoje trabalho
                    como facilitador de ensino da Kenzie Academy e presto
                    serviços a Nerdweb como UI/UX e Fullstack Developer.
                  </ThemeParagraph>
                  <ThemeParagraph paragraphColor="white">
                    Técnico de Administração, graduado em Marketing e
                    pós-graduando em Projetos de Sistemas da Informação.{" "}
                    <b>
                      {" "}
                      Encontrei minha paixão profissional em UI, programação e
                      ensino!
                    </b>
                  </ThemeParagraph>
                  <ThemeParagraph paragraphColor="white">
                    Minha história como programador começou muito cedo, meu
                    primeiro contato, foi aos 14 anos, criando meus próprios
                    módulos em um jogo chamado Nerverwinter Nights.
                  </ThemeParagraph>
                  <ThemeParagraph paragraphColor="white">
                    <b>
                      Embora uma diversão, o jogo e o contato com a comunidade
                      me ensinaram muito sobre lógica de programação e trabalho
                      em equipe.
                    </b>
                  </ThemeParagraph>
                </ThemeTextBox>
              </motion.div>
            </Col>
          </FlexRow>
        </Container>
      </motion.div>
    </section>
  );
};

export default AboutMe;
