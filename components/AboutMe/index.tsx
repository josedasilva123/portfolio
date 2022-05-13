import Image from "next/image";
import React from "react";
import { Col, Container, FlexRow } from "../../styles/grid";
import {
  ThemeLabel,
  ThemeParagraph,
  ThemeTextBox,
  ThemeTitle,
} from "../../styles/typography";

const AboutMe: React.FC = () => {
  return (
    <section>
      <Container containerPadding="sm" paddingTop="4rem" paddingBottom="5rem">
        <FlexRow
          gap="2rem"
          alignItems={{ default: "center" }}
          justifyContent={{ default: "space-between" }}
          flexDirection={{ sm: "column-reverse", md: "row" }}
        >
          <Col size={{ default: "100%" }}>
            <FlexRow
              flexDirection={{ default: "column" }}
              alignItems={{ default: "center" }}
              justifyContent={{ default: "center" }}
            >
              <Image src="/Gamer.svg" width={500} height={500} alt="Gamer" />
            </FlexRow>
          </Col>
          <Col size={{ default: "100%" }}>
            <ThemeLabel labelColor="white">Sobre mim</ThemeLabel>
            <ThemeTitle titleTag="h2" titleSize="title1" titleColor="white">
              Minha história
            </ThemeTitle>
            <ThemeTitle titleTag="h3" titleSize="subtitle" titleColor="primary">
              6 anos de carreira, 17 anos como programador
            </ThemeTitle>
            <ThemeTextBox gap="1rem" textBoxMargin={{ top: "1rem" }}>
              <ThemeParagraph paragraphColor="white">
                Olá, sou Alex Conder (ele/dele), muito prazer! Sou UI Designer a 6 anos,
                desenvedor a 4 anos. Hoje trabalho como facilitador de ensino da
                Kenzie Academy e prestos serviços a Nerdweb como UI/UX e
                Fullstack.
              </ThemeParagraph>
              <ThemeParagraph paragraphColor="white">
                Técnico de Administração, graduado em Marketing e pós-graduando
                em Projetos de Sistemas da Informação. <b> Encontrei minha paixão 
                profissional em UI, programação e ensino!</b>                
              </ThemeParagraph>
              <ThemeParagraph paragraphColor="white">
                Minha história como programador começou muito cedo, me primeiro
                contato, foi aos 14 anos, criando meus próprios módulos em um
                jogo chamado Nerverwinter Nights.
              </ThemeParagraph>
              <ThemeParagraph paragraphColor="white">
                <b>
                  Embora uma diversão, o jogo e o contato com a comunidade me
                  ensinou muito sobre lógica de programação e trabalho em
                  equipe.
                </b>
              </ThemeParagraph>
            </ThemeTextBox>
          </Col>
        </FlexRow>
      </Container>
    </section>
  );
};

export default AboutMe;
