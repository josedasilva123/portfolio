import React, { useEffect, useState } from "react";

import { techCategories, techList } from "../../data/techs";
import { iTech } from "../../interfaces/global";

import { ThemeButton } from "../../styles/buttons";
import { Container, FlexRow, Col } from "../../styles/grid";
import { ThemeTitle } from "../../styles/typography";
import { TechMenu } from "./styles";
import TechCard from "./TechCard";

const Techs: React.FC = () => {
  const [filter, setFilter] = useState<string | null>("front-end");
  const [filterList, setFilterList] = useState<iTech[] | null>(null);

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
      <Container containerPadding="sm" paddingTop="4rem" paddingBottom="5rem">
        <ThemeTitle titleTag="h2" titleSize="title1" titleColor="white">
          Minhas Hardskills
        </ThemeTitle>
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

          <ThemeButton
            buttonSize="sm"
            buttonStyle="outline2"
            buttonActive={!filter}
            onClick={() => setFilter(null)}
          >
            Todas
          </ThemeButton>
        </TechMenu>
        <FlexRow
          gap="2rem"
          alignItems={{ default: "space-between" }}
          flexWrap={{ default: "wrap" }}
          rowMargin={{ top: "2rem" }}
        >
          {(filterList ? filterList : techList).map((tech: any) => (
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
    </section>
  );
};

export default Techs;
