import React, { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { DefaultColors, LightThemeColors } from "../../../styles/globals";

const Colors: React.FC = () => {
  const { darkMode } = useContext(GlobalContext);
  return <>{darkMode ? <DefaultColors /> : <LightThemeColors />}</>;
};

export default Colors;
