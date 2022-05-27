/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from "react";

const validateSelect = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate() {
    if (props?.optional) return true;
    if (!value) {
      setError("É necessário selecionar pelo menos um valor neste campo.");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  const onChange = (event) => {
    if(event.target.value || props?.optional){
      console.log(event.target.value)
      setValue(event.target.value);
      setError(null);
    } else {
      setValue("");
      setError("É necessário selecionar pelo menos um valor neste campo.");
    }    
  }

  return {
    selectProps: {
      value,
      name: props?.name,
      onChange,
      error,
    },
    type: 'select',
    setValue,
    setError,
    validate: () => validate(),
  };
};
export default validateSelect;
