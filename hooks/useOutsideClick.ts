import { MutableRefObject, useEffect, useRef } from "react";

export const useClickOutisde = (callbackFunction: () => void) => {
  const ref = useRef<HTMLElement>(null);

  //Efeito de outsideClick
  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!ref.current?.contains(target)) {
        callbackFunction();
      }
    };
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  });

  return ref;
};
