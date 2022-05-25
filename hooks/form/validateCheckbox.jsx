/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const validateCheckbox = (props) => {
  const [value, setValue] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function validate() {
    if (props?.optional) return true;
    if (!value) {
      setError("Marcar esta caixa é obrigátorio.");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (target.checked || props?.optional) {
      setValue(true);
      setError(null);
    } else {
      setValue(false);
      setError("Marcar esta caixa é obrigátorio.");
    }
  }

  return {
    checkProps: {
      onChange,
      error,
    },
    type: 'checkbox',
    value,
    setValue,
    setError,
    validate: () => validate(),
  };
};
export default validateCheckbox;
