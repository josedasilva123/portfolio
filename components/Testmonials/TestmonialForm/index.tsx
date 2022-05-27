/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";

import { TestmonialContext } from "../../../contexts/TestmonialContext";

import validateInput from "../../../hooks/form/validateInput";

import { ThemeButton } from "../../../styles/buttons";
import { Form, FormInput } from "../../../styles/form";
import { FlexRow } from "../../../styles/grid";
import { ThemeTitle } from "../../../styles/typography";

const TestmonialForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState(false);

  const { sendTestmonial } = useContext(TestmonialContext);

  async function formSubmit(formData: any) {
    const body = {
      ...formData,
      collection: "depoimentos",
    };
    console.log(body);
    
    sendTestmonial(body, {
      setLoading,
      setError,
      callback: () => setSucess(true),
    });
    
  }

  const name = validateInput({
    name: "name",
  });
  const title = validateInput({
    name: "title",
  });
  const text = validateInput({
    name: "text",
  });

  //Limpar os campos na desmontagem
  useEffect(() => {
    return () => {
      setLoading(false);
      [name, title, text].forEach((field) => {
        field.setValue("");
        field.setError(null);
        setSucess(false);
      });
    };
  }, []);

  return (
    <>
      {loading ? (
        <FlexRow
          alignItems={{ default: "center" }}
          flexDirection={{default: "column"}}
          justifyContent={{ default: "center" }}
          rowMargin={{ top: "4rem", bottom: "4rem" }}
          gap={{ default: "3rem"}}
        >
          <Image src="/LoadingTransparent.svg" alt="Loading" width={40} height={40} />

          <ThemeTitle
            titleTag="h2"
            titleSize="title3"
            titleColor="primary"
            titleAlign="center"
          >
            Enviando...
          </ThemeTitle>
        </FlexRow>
      ) : (
        <>
          {sucess && <h1>Deu boa</h1>}
        <Form
          gap="1rem"
          formFields={[name, text, title]}
          submitCallback={formSubmit}
        >
          <FormInput
            size="md"
            label="Nome"
            name="name"
            type="text"
            inputProps={name.inputProps}
          />
          <FormInput
            size="md"
            label="Quem é você?"
            placeholder="Ex: cargo - empresa"
            name="title"
            type="text"
            inputProps={title.inputProps}
          />
          <FormInput
            size="md"
            label="Depoimento"
            name="text"
            type="textarea"
            maxLength={300}
            textAreaHeight={100}
            textAreaMaxHeight={100}
            inputProps={text.inputProps}
          />
          <ThemeButton
            type="submit"
            buttonSize="lg"
            buttonStyle="solid1"
            fullWidth={true}
          >
            Enviar
          </ThemeButton>
        </Form>
        </>
      )}
    </>
  );
};

export default TestmonialForm;
