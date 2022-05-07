import React, { useContext }  from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

import DesktopHeader from "./Desktop";
import MobileHeader from "./Mobile";

const Header: React.FC = () => {
  const {mobile} = useContext(GlobalContext);
  return (
    <>
      {mobile ? (
        <MobileHeader />
      ) : (
        <DesktopHeader />
      )} 
    </>
  );
};

export default Header;
