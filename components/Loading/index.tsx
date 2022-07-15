import Image from "next/image";
import React from "react";
import { StyledLoading } from "./style";

const Loading: React.FC = () => {
  return (
    <StyledLoading>
      <Image
        src="/LoadingTransparent.svg"
        alt="Loading"
        width={40}
        height={40}
      />
    </StyledLoading>
  );
};

export default Loading;
