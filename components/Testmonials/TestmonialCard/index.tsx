import React from "react";
import { iTestmonial } from "../../../contexts/TestmonialContext";
import { FlexRow } from "../../../styles/grid";

import {
  ThemeLabel,
  ThemeParagraph,
  ThemeTitle,
} from "../../../styles/typography";
import { ThemeCard } from "../../../styles/visual";

interface iTestmonialCard {
  testmonial: iTestmonial;
}

const TestmonialCard: React.FC<iTestmonialCard> = ({ testmonial }) => {
  return (
    <ThemeCard padding={{ all: "2rem" }}>
      <FlexRow flexDirection={{ default: "column"}} justifyContent={{ default: 'space-between'}} height="100%">
      <ThemeParagraph
        paragraphColor="white"
        paragraphMargin={{ bottom: "1rem" }}
      >
        {testmonial.text}
      </ThemeParagraph>

      <div>
        <ThemeTitle
          titleTag="h3"
          titleSize="subtitle"
          titleColor="white"
          titleMargin={{ bottom: ".2rem" }}
        >
          {testmonial.name}
        </ThemeTitle>

        <ThemeLabel labelColor="primary" labelSize={14}>
          {testmonial.title}
        </ThemeLabel>
      </div>
      </FlexRow>
    </ThemeCard>
  );
};

export default TestmonialCard;
