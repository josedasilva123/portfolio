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

import Link from "next/link";

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
      <section id="depoimentos">
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
            tabIndex={0}
          >
            Depoimentos
          </ThemeTitle>

          <ThemeTitle
            titleTag="p"
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
              gap={{ default: "1rem" }}
              flexDirection={{ lg: "row", sm: "column" }}
              justifyContent={{ lg: "center", sm: "unset" }}
              rowMargin={{ top: "2rem" }}
            >
              <ThemeButton
                onClick={() => setTestmonialModal(true)}
                buttonStyle="solid1"
                buttonSize="lg"
              >
                <MdSend size={24} /> Enviar depoimento
              </ThemeButton>
              <Link href="/depoimentos">
                <ThemeButton buttonStyle="outline1" buttonSize="lg">
                  Ver todos os depoimentos
                </ThemeButton>
              </Link>
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
        modalScroll={true}
        modalMaxHeight="100vh"
      >
        <TestmonialForm setTestmonialModal={setTestmonialModal} />
      </ThemeModal>
    </>
  );
};

export default Testmonials;
