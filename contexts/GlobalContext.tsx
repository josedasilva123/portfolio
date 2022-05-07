import {useState, useEffect, createContext} from 'React';

//Interfaces
interface iGlobalContext{
    darkMode: boolean,
    toggleDarkMode: () => void;
    mobile: boolean,
}

interface iGlobalStorage{
    children: React.ReactNode;
}

export const GlobalContext = createContext<iGlobalContext | null>(null);

export const GlobalStorage: React.FC<iGlobalStorage> = ({ children }) => {
    //Mobile 
    const [mobile, setMobile] = useState(false);
    //Dark Mode DEFAULT
    const [darkMode, setDarkMode] = useState(true);

    //Inserção do evento mobile na montagem
    useEffect(() => {
        function checkMobile(){
            if(window.innerWidth < 768){
                setMobile(true);
            } else {
                setMobile(false);
            }
        }
        //Checa a resolução na montagem e aplica o evento a verificação a janela
        checkMobile();
        window.addEventListener('resize', checkMobile);
    }, []);

    //Efeito para carregar estilo selecionado
    useEffect(() => {
        const viewMode = localStorage.getItem('@portfolio:LIGHT_MODE');

        if(viewMode){
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    }, []);

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
        <GlobalContext.Provider value={{darkMode, toggleDarkMode, mobile}}>
            {children}
        </GlobalContext.Provider>
    )
}