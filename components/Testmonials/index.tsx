import React, { useContext, useEffect, useState } from "react";

import {
  iTestmonial,
  TestmonialContext,
} from "../../contexts/TestmonialContext";

import { ThemeButton } from "../../styles/buttons";
import { Container, FlexRow, Col } from "../../styles/grid";
import { ThemeTitle } from "../../styles/typography";
import { ThemeModal } from "../../styles/modal";

import { MdSend } from "react-icons/md";

import TestmonialCard from "./TestmonialCard";
import TestmonialForm from "./TestmonialForm";

const Testmonials = () => {
  const { testmonials } = useContext(TestmonialContext);
  const [testShortList, setTestShotList] = useState<iTestmonial[]>([]);
  const [testmonialModal, setTestmonialModal] = useState(false);

  useEffect(() => {
    const newTestList: iTestmonial[] = testmonials.filter(
      (testmonial) => testmonial?.approved === "yes"
    );
    if (newTestList.length > 0) {
      newTestList.length = 3;
    }

    setTestShotList(newTestList);
  }, [testmonials]);

  return (
    <>
      {/* Bloco de depoimentos */}
      <section>
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
                    <TestmonialCard testmonial={testmonial} />
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
                  Parece que não temos nenhum depoimentos ainda, seja o primeira
                  a publicar! :D
                </ThemeTitle>
              </FlexRow>
            )}

            <FlexRow
              justifyContent={{ default: "center" }}
              rowMargin={{ top: "2rem" }}
            >
              <ThemeButton
                onClick={() => setTestmonialModal(true)}
                buttonStyle="solid1"
                buttonSize="lg"
              >
                <MdSend size={24} /> Enviar depoimento
              </ThemeButton>
            </FlexRow>
          </FlexRow>
        </Container>
      </section>

      {/* Modal de depoimentos */}
      <ThemeModal
        active={testmonialModal}
        setActive={setTestmonialModal}
        modalPadding={{ default: "2rem" }}
        modalPosition={{ h: "center", v: "center" }}
      >
        <TestmonialForm />
      </ThemeModal>
    </>
  );
};

export default Testmonials;
