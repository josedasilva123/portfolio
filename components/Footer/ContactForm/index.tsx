import axios from "axios";
import React, { useState } from "react";

import validateInput from "../../../hooks/form/validateInput";

import { ThemeButton } from "../../../styles/buttons";
import { Form, FormInput } from "../../../styles/form";
import { FlexRow } from "../../../styles/grid";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);  

  const name = validateInput({
    name: "name",
  });

  const email = validateInput({
    name: "email",
    type: "email",
  });

  const whatsapp = validateInput({
    name: "whatsapp",
    mask: "telefone",
    type: "telefone",
  });

  const message = validateInput({
    name: "message",
  });

  async function onSubmit(formData: any){
      try {
          setLoading(true);
          const data = {
              emailTo: "alex.v.conder@nerdweb.com.br",
              name: formData.name,
              whatsapp: formData.whatsapp,
              message: formData.message,
          }
          const response = await axios.post('https://git.heroku.com/alex-conder-portfolio-api.git/email/send', data);
          console.log(response);
      } catch (error) {
          console.log(error);
      } finally {
          setLoading(false);
      }
  }

  return (
    <Form
      gap="1rem"
      formFields={[name, email, whatsapp, message]}
      submitCallback={onSubmit}
    >
      <FormInput
        size="md"
        label="Nome*"
        name="name"
        type="text"
        inputProps={name.inputProps}
      />
      <FormInput
        size="md"
        label="E-mail*"
        name="email"
        type="email"
        inputProps={email.inputProps}
      />
      <FormInput
        size="md"
        label="Whatsapp*"
        name="whatsapp"
        type="text"
        maxLength={15}
        inputProps={whatsapp.inputProps}
      />
      <FormInput
        size="md"
        label="Mensagem*"
        name="message"
        type="textarea"
        inputProps={message.inputProps}
      />
      <FlexRow
        justifyContent={{ lg: "flex-end", sm: "unset" }}
        flexDirection={{ lg: "row", sm: "column" }}
      >
        <ThemeButton buttonSize="md" buttonStyle="solid1" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar'}
        </ThemeButton>
      </FlexRow>
    </Form>
  );
};

export default ContactForm;
