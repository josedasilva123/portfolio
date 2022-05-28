import React from "react";

import Image from "next/image";

import { FlexRow } from "../../../../styles/grid";
import { ThemeTitle } from "../../../../styles/typography";

const LoadingScreen: React.FC = () => {
  return (
    <FlexRow
      alignItems={{ default: "center" }}
      flexDirection={{ default: "column" }}
      justifyContent={{ default: "center" }}
      rowMargin={{ top: "4rem", bottom: "4rem" }}
      gap={{ default: "3rem" }}
    >
      <Image
        src="/LoadingTransparent.svg"
        alt="Loading"
        width={40}
        height={40}
      />

      <ThemeTitle
        titleTag="h2"
        titleSize="title3"
        titleColor="primary"
        titleAlign="center"
      >
        Enviando...
      </ThemeTitle>
    </FlexRow>
  );
};

export default LoadingScreen;
