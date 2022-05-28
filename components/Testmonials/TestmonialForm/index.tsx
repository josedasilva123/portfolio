/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useContext, useState, useEffect, Dispatch } from "react";

import { TestmonialContext } from "../../../contexts/TestmonialContext";

import validateInput from "../../../hooks/form/validateInput";

import { ThemeButton } from "../../../styles/buttons";
import { Form, FormInput } from "../../../styles/form";
import { FlexRow } from "../../../styles/grid";
import { ThemeParagraph, ThemeTitle } from "../../../styles/typography";
import LoadingScreen from "./LoadingScreen";

interface iTestmonialForm {
  setTestmonialModal: Dispatch<React.SetStateAction<boolean>>;
}

const TestmonialForm: React.FC<iTestmonialForm> = ({ setTestmonialModal }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState(false);

  const { sendTestmonial } = useContext(TestmonialContext);

  async function formSubmit(formData: any) {
    const body = {
      ...formData,
      collection: "depoimentos",
    };

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
        <LoadingScreen />
      ) : (
        <>
          {sucess ? (
            <FlexRow
              gap={{ default: "1.5rem" }}
              alignItems={{ default: "center" }}
              justifyContent={{ default: "center" }}
              flexDirection={{ default: "column" }}
              rowPadding={{ lg: "2rem", sm: "1rem" }}
            >
              <Image
                src="/SucessGif.svg"
                alt="Sucesso"
                width={300}
                height={300}
              />

              <ThemeTitle
                titleTag="h2"
                titleSize="title2"
                titleColor="primary"
                titleAlign="center"
              >
                Deu tudo certo! :D
              </ThemeTitle>
              <ThemeParagraph paragraphColor="white" paragraphAlign="center">
                Sua mensagem foi enviada com sucesso! Seu depoimento será
                avaliado antes de ser aprovado...{" "}
              </ThemeParagraph>

              <ThemeButton
                buttonStyle="outline2"
                buttonSize="md"
                onClick={() => setTestmonialModal(false)}
              >
                Tudo bem!
              </ThemeButton>
            </FlexRow>
          ) : (
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
          )}
        </>
      )}
    </>
  );
};

export default TestmonialForm;
