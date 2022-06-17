import Image from "next/image";
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

const MainBanner: React.FC = () => {
  return (
    <MainBannerGrid>
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

              <ThemeTitle titleTag="h2" titleColor="white" titleSize="headline">
                &lt;UXEngineer/&gt;
              </ThemeTitle>

              <ThemeTitle
                titleTag="h3"
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
            </FlexRow>
          </Col>
          <Col size={{ default: "100%" }}>
            <FlexRow
              flexDirection={{ default: "column" }}
              alignItems={{ default: "center" }}
              justifyContent={{ default: "center" }}
            >
              <Image
                src="/CodeDeveloper.svg"
                width={500}
                height={500}
                alt="Fullstack Developer"
              />
            </FlexRow>
          </Col>
        </FlexRow>
      </Container>
    </MainBannerGrid>
  );
};

export default MainBanner;
