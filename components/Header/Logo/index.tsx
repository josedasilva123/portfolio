import React from "react";
import Link from "next/link";
import { StyledLogo } from "./styles";

interface iLogo {
  className?: string;
}

const Logo: React.FC<iLogo> = ({ className }) => {
  return (
    <Link href="/" tabIndex={0}>
      <a>
        <StyledLogo className={className}>
          &lt;Alex<b>Conder</b>/&gt;
        </StyledLogo>
      </a>
    </Link>
  );
};

export default Logo;
