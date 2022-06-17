
import React, { useContext, useState } from "react";

import Link from "next/link";

import { MdSend } from "react-icons/md";

import {
  iTestmonial,
  TestmonialContext,
} from "../../../contexts/TestmonialContext";

import { ThemeButton } from "../../../styles/buttons";
import { Col, Container, FlexRow } from "../../../styles/grid";
import { ThemeModal } from "../../../styles/modal";
import { ThemeTitle } from "../../../styles/typography";

import TestmonialCard from "../TestmonialCard";
import TestmonialForm from "../TestmonialForm";

const TestmonialFeed: React.FC = () => {
  const { testmonials } = useContext(TestmonialContext);
  const [testmonialModal, setTestmonialModal] = useState(false);
  return (
    <section>
      <Container
        containerPadding="sm"
        paddingTop={{ xl: "4rem", lg: "3rem", md: "2rem" }}
        paddingBottom={{ xl: "5rem", lg: "4rem", md: "2rem" }}
      >
        <ThemeTitle titleTag="h1" titleSize="title1" titleColor="white" titleMargin={{ bottom: "2rem"}}>
          <Link href="/">
            Home
          </Link> / Depoimentos
        </ThemeTitle>
        <FlexRow gap={{ default: "2rem" }} flexWrap={{ default: "wrap" }}>
          {testmonials?.length > 0 ? (
            <>
              {testmonials?.map((testmonial, index) => (
                <Col key={index} size={{ default: "100%" }}>
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
                Parece que não temos nenhum depoimentos ainda, seja o primeira a
                publicar! :D
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
      </Container>
    </section>
  );
};

export default TestmonialFeed;
