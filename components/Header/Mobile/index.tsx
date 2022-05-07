import React, { useState } from "react";
import { MdMenu, MdClose, MdPhone } from "react-icons/md";

import { Container, FlexRow } from "../../../styles/grid";
import { MobileMenu, StyledMobileHeader } from "./styles";
import { ThemeButton } from "../../../styles/buttons";

const MobileHeader: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledMobileHeader>
      <Container containerPadding="sm">
        <FlexRow
          alignItems={{ default: "center" }}
          justifyContent={{ default: "space-between" }}
        >
          <h1>
            Alex <b>Conder</b>
          </h1>   
          <div> 
            <button onClick={() => setOpen(!open)}>
                {open ? (
                    <MdClose size={26} />                
                ) : (
                    <MdMenu size={26} />   
                )}            
            </button>
            <ThemeButton buttonSize="xs" buttonStyle="solid1">
                <MdPhone size={21} color="var(--colorWhite)"/>
            </ThemeButton>   
          </div>  
        </FlexRow>
      </Container>
      {open && (
          <MobileMenu className="menu">
          <ul>
            <li>Sobre</li>
            <li>Projetos</li>
          </ul>
          <ThemeButton
            buttonSize="md"
            buttonStyle="solid1"
            onClick={() => alert("Oi")}
          >
            QUERO CONTRATAR
          </ThemeButton>
        </MobileMenu>
      )}
    </StyledMobileHeader>
  );
};

export default MobileHeader;
