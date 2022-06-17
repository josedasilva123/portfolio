import React, { useContext } from "react";
import { ThemeButton } from "../../../styles/buttons";
import { GlobalContext } from "../../../contexts/GlobalContext";
import Link from "next/link";

const NavMenu = () => {
  const { mobile } = useContext(GlobalContext);

  return (
    <>
      <ul>
        <li>
          <Link href="/#sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/#projetos">Projetos</Link>
        </li>
        <li>
          <Link href="/#depoimentos">Depoimentos</Link>
        </li>
      </ul>
      {!mobile && (
        <Link href="#contato">
        <ThemeButton
          buttonSize="md"
          buttonStyle="solid1"
        >
          QUERO CONTRATAR
        </ThemeButton>
        </Link>
        
      )}
    </>
  );
};

export default NavMenu;
