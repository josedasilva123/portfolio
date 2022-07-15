/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

import { ThemeButton } from "../../styles/buttons";
import { Container, FlexRow, Col, Section } from "../../styles/grid";
import {
  ThemeLabel,
  ThemeParagraph,
  ThemeTitle,
} from "../../styles/typography";

import ContactForm from "./ContactForm";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contato">
      <Section
        alternativeTag="div"
        sectionBackgroundColor="var(--colorDarkPrimary)"
      >
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
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ThemeLabel labelColor="primary">
                  Contato profissional
                </ThemeLabel>

                <ThemeTitle
                  titleTag="h2"
                  titleSize="headline"
                  titleColor="white"
                  tabIndex={0}
                >
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
                  <ThemeButton
                    buttonSize="round"
                    buttonStyle="link"
                    link={true}
                    href="https://www.linkedin.com/in/alex-conder-b015a71a4/"
                    target="_blank"
                  >
                    <FaLinkedin size={24} />
                  </ThemeButton>

                  <ThemeButton
                    buttonSize="round"
                    buttonStyle="link"
                    link={true}
                    href="https://wa.me/5541991861989"
                    target="_blank"
                  >
                    <FaWhatsapp size={24} />
                  </ThemeButton>
                </FlexRow>
              </motion.div>
            </Col>
            <Col size={{ default: "100%" }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ContactForm />
              </motion.div>
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
