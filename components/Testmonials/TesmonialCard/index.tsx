import React from "react";
import { iTestmonial } from "../../../contexts/TestmonialContext";

import { ThemeLabel, ThemeParagraph, ThemeTitle } from "../../../styles/typography";
import { ThemeCard } from "../../../styles/visual";

interface iTestmonialCard {
  testmonial: iTestmonial;
}

const TestmonialCard: React.FC<iTestmonialCard> = ({ testmonial }) => {
  return (
    <ThemeCard padding={{ all: "2rem" }} cardStyle="solid1">
      <ThemeParagraph
        paragraphColor="white"
        paragraphMargin={{ bottom: "1rem" }}
      >
        {testmonial.text}
      </ThemeParagraph>

      <ThemeTitle
        titleTag="h3"
        titleSize="subtitle"
        titleColor="white"
        titleMargin={{ bottom: ".2rem" }}
      >
        {testmonial.name}
      </ThemeTitle>

      <ThemeLabel labelColor="primary">{testmonial.title}</ThemeLabel>
    </ThemeCard>
  );
};

export default TestmonialCard;
