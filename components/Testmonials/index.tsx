import React, { useContext, useEffect, useState } from "react";

import { TestmonialContext } from "../../contexts/TestmonialContext";

import { ThemeButton } from "../../styles/buttons";
import { Container, FlexRow, Col } from "../../styles/grid";
import {
  ThemeLabel,
  ThemeParagraph,
  ThemeTitle,
} from "../../styles/typography";
import { ThemeCard } from "../../styles/visual";

import { MdSend } from "react-icons/md";

const Testmonials = () => {
  const { testmonials } = useContext(TestmonialContext);
  const [testShortList, setTestShotList] = useState<string[]>([]);

  useEffect(() => {
    const newTestList: string[] = testmonials.filter(
      (testmonial) => testmonial[3] === "yes"
    );
    if (newTestList.length > 0) {
      newTestList.length = 3;
    }

    setTestShotList(newTestList);
  }, [testmonials]);

  return (
    <Container
      containerPadding="sm"
      paddingTop={{ default: "4rem" }}
      paddingBottom={{ default: "5rem" }}
    >
      <ThemeTitle
        titleTag="h2"
        titleSize="title1"
        titleColor="white"
        titleAlign="center"
      >
        Depoimentos
      </ThemeTitle>

      <ThemeTitle
        titleTag="h3"
        titleSize="subtitle"
        titleColor="primary"
        titleAlign="center"
        titleMargin={{ bottom: "2rem" }}
      >
        O que colegas, clientes e alunos tem a dizer sobre mim
      </ThemeTitle>

      <FlexRow gap={{ default: "2rem" }} flexWrap={{ default: "wrap" }}>
        {testShortList.length > 0 ? (
          <>
            {testShortList.map((testmonial, index) => (
              <Col key={index} size={{ lg: "(100% - 4rem)/3", md: "100%" }}>
                <ThemeCard padding={{ all: "2rem" }} cardStyle="solid1">
                  <ThemeParagraph
                    paragraphColor="white"
                    paragraphMargin={{ bottom: "1rem" }}
                  >
                    {testmonial[0]}
                  </ThemeParagraph>

                  <ThemeTitle
                    titleTag="h3"
                    titleSize="subtitle"
                    titleColor="white"
                    titleMargin={{ bottom: ".2rem" }}
                  >
                    {testmonial[1]}
                  </ThemeTitle>

                  <ThemeLabel labelColor="primary">{testmonial[2]}</ThemeLabel>
                </ThemeCard>
              </Col>
            ))}
          </>
        ) : (
          <FlexRow justifyContent={{ default: "center" }}>
            <ThemeTitle
              titleTag="h3"
              titleSize="subtitle"
              titleColor="secondary"
              titleAlign="center"
            >
              Parece que não temos nenhum depoimentos ainda, seja o primeira a
              publicar! :D
            </ThemeTitle>
          </FlexRow>
        )}

        <FlexRow
          justifyContent={{ default: "center" }}
          rowMargin={{ top: "2rem" }}
        >
          <ThemeButton buttonStyle="solid1" buttonSize="lg">
            <MdSend size={24} /> Enviar depoimento
          </ThemeButton>
        </FlexRow>
      </FlexRow>

    </Container>
  );
};

export default Testmonials;
