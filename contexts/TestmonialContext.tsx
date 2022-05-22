import axios from "axios";
import { useState, createContext } from "react";

//Interfaces
interface iTestmonialContext{
    testmonials: string[] | [];
    setTestmonials: React.Dispatch<React.SetStateAction<string[]>>
    sendTestmonial: (
        body: iSendTestmonialBody,
        callback: () => void
    ) => void;
}
interface iTestmonialStorage {
    children: React.ReactNode;
}

interface iSendTestmonialBody {
    emailTo: string;
    name: string;
    title: string;
    text: string;
}

export const TestmonialContext = createContext<iTestmonialContext>({
    testmonials: [],
    setTestmonials: () => {},
    sendTestmonial: () => {},
});

export const TestmonialStorage: React.FC<iTestmonialStorage> = ({children}) => {
    const [testmonials, setTestmonials] = useState<string[] | []>([]);

    async function sendTestmonial(body: iSendTestmonialBody, callback: () => void){
        try {
            const response = await axios.post('https://alex-conder-portfolio-api.herokuapp.com/', {
                body,
            })  
            console.log(response);
            //Função callback opcional
            callback();
        } catch (error) {
            console.log(error);
        }       
    }

    return (
        <TestmonialContext.Provider value={{ testmonials, setTestmonials, sendTestmonial }}>
            {children}
        </TestmonialContext.Provider>
    )
}