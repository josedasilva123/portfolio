import {useState, useEffect, createContext} from 'React';

//Interfaces
interface iGlobalContext{
    darkMode: boolean,
    toggleDarkMode: () => void;
}

interface iGlobalStorage{
    children: React.ReactNode;
}

export const GlobalContext = createContext<iGlobalContext | null>(null);

export const GlobalStorage: React.FC<iGlobalStorage> = ({ children }) => {
    //Dark Mode DEFAULT
    const [darkMode, setDarkMode] = useState(true);

    //Efeito para carregar estilo selecionado
    useEffect(() => {
        const viewMode = localStorage.getItem('@portfolio:LIGHT_MODE');

        if(viewMode){
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }

    }, [])

    //Função de troca de estilo
    function toggleDarkMode(){
        if(darkMode){
            setDarkMode(false);
            localStorage.setItem('@portfolio:LIGHT_MODE', 'TRUE');
        } else {
            setDarkMode(true);
            localStorage.removeItem('@portfolio:LIGHT_MODE');
        }
    }

    return (
        <GlobalContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </GlobalContext.Provider>
    )
}