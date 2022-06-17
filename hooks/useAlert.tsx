import { useState } from "react";

//Hook Type
type tUseAlert = () => iUseAlertReturn;

interface iUseAlertReturn {
  active: boolean,  
  alertText: string;  
  alertType?: "sucess" | "alert" | "error" | string;
  activeAlert: tActiveAlert;
}

//Alert Type
type tActiveAlert = (props: iActiveAlert) => void;

interface iActiveAlert {
  text: string;
  duration?: number;
  type: "sucess" | "alert" | "error" | string;
}


export const useAlert: tUseAlert = () => {
  const [active, setActive] = useState(false);
  const [alertType, setAlertType] = useState("alert");
  const [alertText, setAlertText] = useState("");

  const activeAlert: tActiveAlert = ({ text, duration, type }) => {
    if (!active) {
      setActive(true);
      setAlertText(text);
      setAlertType(type);

      setTimeout(() => {
        setActive(false);
        setAlertText("");
        setAlertType("");
      }, duration || 3000);
    }
  };

  return {
    active,
    alertText,
    alertType,
    activeAlert,
  };
};
