/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { MdLink } from "react-icons/md";
import { iGithubRepoProps } from "../../../interfaces/global";
import { ThemeButton } from "../../../styles/buttons";
import { Col, Container, FlexRow } from "../../../styles/grid";
import {
  ThemeList,
  ThemeParagraph,
  ThemeTextBox,
  ThemeTitle,
} from "../../../styles/typography";
import { ThemeCard, ThemeTag } from "../../../styles/visual";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

const Personal: React.FC<iGithubRepoProps> = ({ repo, error }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Container paddingTop={{ xl: "4rem", md: "3rem" }}>
        <FlexRow
          gap={{ xl: "4rem", md: "2rem" }}
          flexDirection={{ lg: "row", md: "column" }}
        >
          <Col size={{ lg: "40%", md: "100%" }}>
            <ThemeTitle
              titleTag="h3"
              titleSize="title2"
              titleColor="white"
              tabIndex={0}
            >
              Projeto Pessoais
            </ThemeTitle>
            <ThemeTitle titleTag="p" titleSize="subtitle" titleColor="primary">
              Meus experimentos favoritos &lt;3
            </ThemeTitle>
          </Col>
          <Col size={{ lg: "60%", md: "100%" }}>
            <ThemeTextBox gap="1rem">
              <ThemeParagraph paragraphColor="white">
                Meus projetos pessoais me ajudam muito no meu desenvolvimento
                como desenvolvedor. Eu costumo experimentar muitas coisas, mas
                gostaria de dar destaque a uma lista seleta:
              </ThemeParagraph>
              <ThemeList
                gap="2rem"
                listTag="ul"
                listStyle="circle"
                listItemColor="primary"
                paddingLeft="2rem"
              >
                <li>
                  <b>LX React Form:</b> uma bibleoteca de formulários para React
                  baseada em hooks, contendo diversas features, como validações
                  de campos (input, checkbox, radio, number, grupos de checkbox
                  e muito mais), mascarás, formulário de etapa e mais.
                </li>

                <li>
                  <b>BasicV2:</b> um framework simples e limpo de estilização
                  para agilizar o desenvolvimento de sites em HTML/CSS/JS
                  contendo uma diversidade de funcionalidades dividas em
                  módulos, como: validação de formulários, mascára de
                  formulário, etapas de formulários, drag and drop escalável,
                  animações de rolagem, modal, menu hamburguer e muito mais...
                </li>

                <li>
                  <b>portfolio:</b> este portfólio merece destaque, poís, muito
                  mais do que uma página contando sobre o meu trabalho, me
                  desafiei a construir um Design System escalável para outros
                  projetos.
                  <br /> <br />
                  Atualmente o Design System já contem: sistema de container e
                  grid dinâmico e responsivo, sistema de tipografia
                  configurável, criação de paleta de cores (possibilidando o
                  Dark Mode), hook para eventos de outClick, além de uma pequena
                  lista de componentes escaláveis com comportamento
                  diferenciado.
                </li>
                <li>
                  <b>pokedux:</b> o Pokedux une duas coisas que eu amo:
                  desenvolvimento e games. Iniciado como um estudo em redux, o
                  pokedux hoje conta com uma diversidade de features
                  interessantes, incluindo: montagem de times, ordenação de time
                  com drag-drop e sistema de batalhas.
                </li>
              </ThemeList>
              <ThemeParagraph paragraphColor="white">
                Confira estes e outros projetos abaixo:
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
          {repo?.map((r, index) => (
            <Col key={index} size={{ lg: "(100% - 2rem)/2", md: "100%" }}>
              <ThemeCard padding={{ all: "2rem" }}>
                <ThemeTag tagType="solid" tagColor="primary">
                  {r.language}
                </ThemeTag>
                <ThemeTitle
                  titleTag="h4"
                  titleSize="subtitle"
                  titleColor="white"
                  titleMargin={{ top: ".6rem", bottom: "2rem" }}
                  tabIndex={0}
                >
                  {r.name}
                </ThemeTitle>

                <ThemeButton
                  buttonStyle="outline2"
                  buttonSize="md"
                  link={true}
                  href={r.html_url}
                  target="_blank"
                >
                  <MdLink size={24} />
                  Acessar projeto
                </ThemeButton>
              </ThemeCard>
            </Col>
          ))}
        </FlexRow>
        <FlexRow
          justifyContent={{ default: "center" }}
          rowMargin={{ top: "2rem" }}
        >
          <ThemeButton
            buttonSize="md"
            buttonStyle="solid1"
            link={true}
            href="https://github.com/josedasilva123/"
            target="_blank"
          >
            <FaGithub size={24}></FaGithub>
            Acesse o meu Github
          </ThemeButton>
        </FlexRow>
      </Container>
    </motion.div>
  );
};

export default Personal;
