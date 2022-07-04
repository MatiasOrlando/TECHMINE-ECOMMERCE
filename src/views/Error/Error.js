import React from "react";
import { NavLink } from "react-router-dom";

const Error = ({ setShowNav, setShowFoot }) => {
  setShowNav(false);
  setShowFoot(false);
  return (
    <NavLink to="/home">
      <img
        src="images/page404.jpg"
        alt="Pagina no encontrada: Error 404"
        style={{ width: "100%", height: "100vh" }}
      />
    </NavLink>
  );
};

export default Error;
