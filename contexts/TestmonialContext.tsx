import axios from "axios";
import { useState, useEffect, createContext } from "react";

//Interfaces
interface iTestmonialStorage {
    children: React.ReactNode;
}
interface iSendTestmonial {
    emailTo: string;
    name: string;
    text: string;
}


export const TestmonialContext = createContext({});

export const TestmonialStorage: React.FC<iTestmonialStorage> = ({children}) => {
    const [testmonials, setTestmonials] = useState([]);

    async function sendTestmonial(body: iSendTestmonial, callback: () => void){
        try {
            const response = await axios.post('https://alex-conder-portfolio-api.herokuapp.com/', {
                body,
            })  
            console.log(response)
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