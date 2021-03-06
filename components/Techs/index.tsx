import React, { useEffect, useState } from "react";

import { techCategories, techList } from "../../data/techs";

import { iTech } from "../../interfaces/global";

import { ThemeButton } from "../../styles/buttons";
import { Container, FlexRow, Col } from "../../styles/grid";
import {
  ThemeParagraph,
  ThemeTextBox,
  ThemeTitle,
} from "../../styles/typography";
import { TechMenu } from "./styles";

import TechCard from "./TechCard";

import { motion } from "framer-motion";

const Techs: React.FC = () => {
  const [filter, setFilter] = useState<string | null>("front-end");
  const [filterList, setFilterList] = useState<iTech[] | null>(null);

  //Efeito de filtros de tecnologia
  useEffect(() => {
    if (filter) {
      const newFilterList = techList.filter((tech) => tech.category === filter);
      setFilterList(newFilterList);
    } else {
      setFilterList(null);
    }
  }, [filter]);

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.8}}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        <Container
          containerPadding="sm"
          paddingTop={{ xl: "4rem", lg: "3rem", md: "2rem" }}
          paddingBottom={{ xl: "5rem", lg: "4rem", md: "2rem" }}
        >
          <ThemeTitle titleTag="h2" titleSize="title1" titleColor="white" tabIndex={0}>
            Minhas Hardskills
          </ThemeTitle>

          <ThemeTextBox gap="1rem" textBoxMargin={{ top: "1rem" }}>
            <ThemeParagraph paragraphColor="white">
              Minha jornada me moldou um profissional muito versatil, tenho
              conhecimentos nas áreas de Marketing, UI/UX, Programação e Ensino.
            </ThemeParagraph>
            <ThemeTitle titleTag="p" titleColor="primary" titleSize="subtitle">
              Segue abaixo a lista das Hard Skills que mais utilizo hoje na
              minha atuação profissional:
            </ThemeTitle>
          </ThemeTextBox>

          <TechMenu>
            {techCategories.map((tech) => (
              <li key={tech}>
                <ThemeButton
                  buttonSize="sm"
                  buttonStyle="outline2"
                  buttonActive={
                    filter?.toLowerCase() === tech.toLowerCase() ? true : false
                  }
                  onClick={() => setFilter(tech.toLowerCase())}
                >
                  {tech}
                </ThemeButton>
              </li>
            ))}            
          </TechMenu>

          <FlexRow
            gap={{ default: "2rem" }}
            alignItems={{ default: "space-between" }}
            flexWrap={{ default: "wrap" }}
            rowMargin={{ top: "2rem" }}
            rowTag="ul"
          >
            {(filterList ? filterList : techList).map((tech) => (
              <Col
                key={tech.name}
                size={{
                  xs: "100%",
                  md: "(100% - 2rem)/2",
                  lg: "(100% - 4rem)/3",
                }}
              >
                <TechCard tech={tech} />
              </Col>
            ))}
          </FlexRow>
        </Container>
      </motion.div>
    </section>
  );
};

export default Techs;
