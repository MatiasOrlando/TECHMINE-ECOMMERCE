import FormContacto from "../../components/FormContacto/FormContacto";
import React, { useState } from "react";
import SpinnerLoader from "../../components/LoadingSpinner/Spinner";
import { NavLink } from "react-router-dom";

export default function Contacto() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="linkToHome2">
        <NavLink to="/home" className="linkToAllProducts">
          Inicio /
        </NavLink>{" "}
        Contacto
      </div>
      {loading ? <SpinnerLoader /> : <FormContacto setLoading={setLoading} />}
    </>
  );
}
