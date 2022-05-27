import React from 'react'

interface iForm{
    children: React.ReactNode;
    className?: string;
    gap?: string;
    formFields: any[];
    keepFieldsOnSubmit?: boolean;
    submitCallback: (valueList: any[]) => void;
}

const BaseForm: React.FC<iForm> = ({children, className, formFields, keepFieldsOnSubmit, submitCallback}) => {

  function handleSubmit(event: React.SyntheticEvent){
    event.preventDefault();

    //Executa todas as validações
    const validationList = formFields.map(field => field.validate());

    //Verifica se todas as validações são válidas
    if(validationList.every(validation => validation)){
        //Condensa os valores dos campos um objeto data (LX Hook Form)
        const formData = formFields.reduce((dataObject, currentItem) => {
          console.log(currentItem)
          dataObject[currentItem.inputProps.name] = currentItem.inputProps.value;     
          return dataObject;     
        }, {})
        
        submitCallback(formData); //Executa função de callback passando o formData
        
        //Função de limpeza de campos
        if(!keepFieldsOnSubmit){
            formFields.forEach(field => {
                const initialValue = field.type === "checkbox" ? false : "";
                field.setValue(initialValue);
            });
        }
    }
  } 

  return (
    <form onSubmit={handleSubmit} className={className}>
        {children}
    </form>    
  )
}

export default BaseForm;