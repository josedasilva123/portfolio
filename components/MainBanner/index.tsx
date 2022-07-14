import Link from "next/link";
import React from "react";
import { ThemeButton } from "../../styles/buttons";
import { Col, Container, FlexRow } from "../../styles/grid";
import {
  ThemeLabel,
  ThemeParagraph,
  ThemeTitle,
} from "../../styles/typography";
import { MainBannerGrid } from "./styles";
import { motion } from "framer-motion";

const MainBanner: React.FC = () => {
  return (
    <MainBannerGrid>
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
              <FlexRow
                flexDirection={{ default: "column" }}
                alignItems={{ xs: "unset", sm: "flex-start" }}
                justifyContent={{ default: "center" }}
              >
                <ThemeLabel labelColor="white">
                  UX / UI / Fullstack Developer
                </ThemeLabel>

                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <ThemeTitle
                    titleTag="h1"
                    titleColor="white"
                    titleSize="headline"
                    tabIndex={0}
                  >
                    &lt;UXEngineer/&gt;
                  </ThemeTitle>
                </motion.div>

                <ThemeTitle
                  titleTag="p"
                  titleColor="primary"
                  titleSize="subtitle"
                  titleMargin={{ top: ".2rem", bottom: ".6rem" }}               
                >
                  UX e desenvolvimento caminham juntos!
                </ThemeTitle>

                <ThemeParagraph
                  paragraphColor="white"
                  paragraphMargin={{ top: "1rem", bottom: "3rem" }}
                >
                  Meu trabalho é conectar UX/UI Design com desenvolvimento,
                  carregando a preocupação com qualidade de código e experiência
                  do usuário da criação até a entrega final.
                </ThemeParagraph>

                <motion.div
                  style={{ width: "100%"}}
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <FlexRow
                    gap={{ default: ".6rem" }}
                    flexDirection={{ sm: "column", md: "row" }}
                    alignItems={{ sm: "center", md: "flex-start" }}
                  >
                    <Link href="#contato">
                      <ThemeButton buttonStyle="solid1" buttonSize="md">
                        Contratar agora
                      </ThemeButton>
                    </Link>

                    <Link href="#sobre">
                      <ThemeButton buttonStyle="outline1" buttonSize="md">
                        Saiba mais
                      </ThemeButton>
                    </Link>
                  </FlexRow>
                </motion.div>
              </FlexRow>
            </Col>
            <Col size={{ default: "100%" }}>
              <FlexRow
                flexDirection={{ default: "column" }}
                alignItems={{ default: "center" }}
                justifyContent={{ default: "center" }}
              >
                <motion.img
                  width={500}
                  height={500}
                  drag
                  dragConstraints={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  src="/AstronautHelmet.svg"
                  alt="Astronaut Helmet"
                />
              </FlexRow>
            </Col>
          </FlexRow>
        </Container>
      </motion.div>
    </MainBannerGrid>
  );
};

export default MainBanner;
