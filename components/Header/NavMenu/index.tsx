import React, { useContext } from "react";
import { ThemeButton } from "../../../styles/buttons";
import { GlobalContext } from "../../../contexts/GlobalContext";

const NavMenu = () => {
  const { mobile } = useContext(GlobalContext);

  return (
    <>
      <ul>
        <li>Sobre</li>
        <li>Projetos</li>
      </ul>
      {!mobile && (
        <ThemeButton
          buttonSize="md"
          buttonStyle="solid1"
          onClick={() => alert("Oi")}
        >
          QUERO CONTRATAR
        </ThemeButton>
      )}
    </>
  );
};

export default NavMenu;
