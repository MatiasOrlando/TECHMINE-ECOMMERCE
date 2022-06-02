import React, { createContext, useState } from "react";

export const contextoForm = createContext();
const { ProviderForm } = contextoForm;

const FormContext = ({ children }) => {
  const [validated, setValidated] = useState(false);

  const valueContextForm = { validated: validated, setValidated: setValidated };

  return <ProviderForm value={valueContextForm}>{children}</ProviderForm>;
};

export default FormContext;
