import React, { useState } from "react";
import { MdMenu, MdClose, MdPhone } from "react-icons/md";

import { Container, FlexRow } from "../../../styles/grid";
import { MobileMenu, StyledMobileHeader } from "./styles";
import { ThemeButton } from "../../../styles/buttons";

import Logo from "../Logo";
import NavMenu from "../NavMenu";

const MobileHeader: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledMobileHeader>
      <Container containerPadding="sm">
        <FlexRow
          alignItems={{ default: "center" }}
          justifyContent={{ default: "space-between" }}
        >
          <Logo />  
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
          <NavMenu />          
        </MobileMenu>
      )}
    </StyledMobileHeader>
  );
};

export default MobileHeader;
