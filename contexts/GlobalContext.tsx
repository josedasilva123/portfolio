import { useState, useEffect, createContext } from "react";

//Interfaces
interface iGlobalContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobile: boolean;
  loading: boolean;
}

interface iGlobalStorage {
  children: React.ReactNode;
}

export const GlobalContext = createContext<iGlobalContext>({
    darkMode: true,
    toggleDarkMode: () => {},
    mobile: true,
    loading: true,
});

export const GlobalStorage: React.FC<iGlobalStorage> = ({ children }) => {
  //Mobile
  const [loading, setLoading] = useState(true);
  const [mobile, setMobile] = useState(false);
  //Dark Mode DEFAULT
  const [darkMode, setDarkMode] = useState(true);

  //Inserção do evento mobile na montagem
  useEffect(() => {
    function checkMobile() {
      if (window.innerWidth < 850) {
        setMobile(true);
      } else {
        setMobile(false);
      }
      setLoading(false);
    }
    //Checa a resolução na montagem e aplica o evento a verificação a janela
    checkMobile();
    window.addEventListener("resize", checkMobile);
  }, []);

  //Efeito para carregar estilo selecionado
  useEffect(() => {
    const viewMode = localStorage.getItem("@portfolio:LIGHT_MODE");
    if (viewMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  //Função de troca de estilo
  function toggleDarkMode() {
    if (darkMode) {
      setDarkMode(false);
      localStorage.setItem("@portfolio:LIGHT_MODE", "TRUE");
    } else {
      setDarkMode(true);
      localStorage.removeItem("@portfolio:LIGHT_MODE");
    }
  }

  return (
    <GlobalContext.Provider value={{ darkMode, toggleDarkMode, mobile, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};
