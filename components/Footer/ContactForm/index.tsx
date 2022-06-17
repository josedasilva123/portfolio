import React, { useState } from "react";
import { api } from "../../../data/api/axios";

import { useAlert } from "../../../hooks/useAlert";

import { ThemeButton } from "../../../styles/buttons";
import { Alert, Form, FormInput } from "../../../styles/form";
import { FlexRow } from "../../../styles/grid";

import { useInput, useForm } from "lx-react-form";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const name = useInput({
    name: "name",
  });

  const email = useInput({
    name: "email",
    validation: "email",
  });

  const whatsapp = useInput({
    name: "whatsapp",
    mask: "telefone",
    validation: "telefone",
  });

  const message = useInput({
    name: "message",
  });

  const form = useForm({
    clearFields: true,
    formFields: [name, email, whatsapp, message],
    submitCallback: onSubmit,
  })

  const formAlert = useAlert();

  async function onSubmit(formData: any) {
    try {
      setLoading(true);
      const data = {
        emailTo: "alex.conder@nerdweb.com.br",
        name: formData.name,
        whatsapp: formData.whatsapp,
        message: formData.message,
      };

      const response = await api.post("email/send", data);

      formAlert.activeAlert({
        duration: 3000,
        type: 'sucess',
        text: 'Sua mensagem foi enviada com sucesso!'
      })

    } catch (error) {
      formAlert.activeAlert({
        duration: 3000,
        type: 'error',
        text: 'Ops, parece que um erro aconteceu! :c'
      })
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form
      gap="1rem"
      handleSubmit={form.handleSubmit}
    >
      <FormInput
        size="md"
        label="Nome*"
        name="name"
        type="text"
        inputProps={name.inputProps}
        error={name.error}
      />

      <FormInput
        size="md"
        label="E-mail*"
        name="email"
        type="email"
        inputProps={email.inputProps}
        error={email.error}
      />

      <FormInput
        size="md"
        label="Whatsapp*"
        name="whatsapp"
        type="text"
        maxLength={15}
        inputProps={whatsapp.inputProps}
        error={whatsapp.error}
      />

      <FormInput
        size="md"
        label="Mensagem*"
        name="message"
        type="textarea"
        inputProps={message.inputProps}
        error={message.error}
      />

      {formAlert.active && (
        <Alert alertType={formAlert.alertType} alertDuration={3000} fullWidth={true}>
          {formAlert.alertText}
        </Alert>
      )}

      <FlexRow
        justifyContent={{ lg: "flex-end", sm: "unset" }}
        flexDirection={{ lg: "row", sm: "column" }}
      >
        <ThemeButton buttonSize="md" buttonStyle="solid1" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </ThemeButton>
      </FlexRow>
    </Form>
  );
};

export default ContactForm;
