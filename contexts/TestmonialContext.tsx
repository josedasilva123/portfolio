import { useState, createContext } from "react";
import { api } from "../data/api/axios";

//Interfaces
export interface iTestmonial{
    text: string;
    name: string;
    title: string;
    approved: 'yes' | 'no';
}

interface iTestmonialContext{
    testmonials: iTestmonial[] | [];
    setTestmonials: React.Dispatch<React.SetStateAction<iTestmonial[]>>
    sendTestmonial: tSendTestmonial;
}

interface iTestmonialStorage {
    children: React.ReactNode;
}

interface iSendTestmonialBody {
    name: string;
    title: string;
    text: string;
    collection: string;
}

export const TestmonialContext = createContext<iTestmonialContext>({
    testmonials: [],
    setTestmonials: () => {},
    sendTestmonial: () => {},
});

interface iSendTestmonialOptions{
    callback?: () => void;
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
    setError?: React.Dispatch<React.SetStateAction<string>>;
}
type tSendTestmonial = (
    body: iSendTestmonialBody,
    options: iSendTestmonialOptions,
    
) => void;

export const TestmonialStorage: React.FC<iTestmonialStorage> = ({children}) => {
    const [testmonials, setTestmonials] = useState<iTestmonial[] | []>([]);

    const sendTestmonial: tSendTestmonial = async (body, options) =>{
        try {
            options.setLoading?.(true);
            await api.post('sheets/rows', body)  
            //Função callback opcional
            options.callback?.();
        } catch (error) {
            console.log(error);
        } finally {
            options.setLoading?.(false);
        }      
    }

    return (
        <TestmonialContext.Provider value={{ testmonials, setTestmonials, sendTestmonial }}>
            {children}
        </TestmonialContext.Provider>
    )
}