/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import validateInput from "../../hooks/form/validateInput";

import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

import { ThemeButton } from "../../styles/buttons";
import { Container, FlexRow, Col, Section } from "../../styles/grid";
import {
  ThemeLabel,
  ThemeParagraph,
  ThemeTitle,
} from "../../styles/typography";

import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer>
      <Section alternativeTag="div" sectionBackgroundColor="var(--colorDarkPrimary)">
        <Container
          containerPadding="sm"
          paddingTop={{ lg: "4rem", md: "3rem" }}
          paddingBottom={{ lg: "4rem", md: "4rem" }}
        >
          <FlexRow
            gap={{ default: "4rem" }}
            flexDirection={{ lg: "row", sm: "column" }}
          >
            <Col size={{ default: "100%" }}>
              <ThemeLabel labelColor="primary">Contato profissional</ThemeLabel>

              <ThemeTitle titleTag="h2" titleSize="headline" titleColor="white">
                Fale comigo
              </ThemeTitle>

              <ThemeParagraph
                paragraphColor="white"
                paragraphMargin={{ top: "1rem" }}
              >
                Preencha o formulário ou escolha uma das opções disponíveis
                abaixo:
              </ThemeParagraph>

              <FlexRow gap={{ default: "1rem" }} rowMargin={{ top: "4rem" }}>
                <a
                  href="https://www.linkedin.com/in/alex-conder-b015a71a4/"
                  target="_blank"
                >
                  <ThemeButton buttonSize="round" buttonStyle="link">
                    <FaLinkedin size={24} />
                  </ThemeButton>
                </a>

                <a href="https://wa.me/5541991861989" target="_blank">
                  <ThemeButton buttonSize="round" buttonStyle="link">
                    <FaWhatsapp size={24} />
                  </ThemeButton>
                </a>
              </FlexRow>
            </Col>
            <Col size={{ default: "100%" }}>
              <ContactForm />
            </Col>
          </FlexRow>
        </Container>
        <Container containerPadding="md">
          <ThemeParagraph paragraphAlign="center" paragraphColor="white">
            &copy; Todos os direitos reservados - Alex Conder
          </ThemeParagraph>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
