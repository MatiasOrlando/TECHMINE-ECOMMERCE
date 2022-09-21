import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Error = ({ setShowNav, setShowFoot }) => {
  useEffect(() => {
    setShowNav(false);
    setShowFoot(false);
  }, [setShowNav, setShowFoot]);

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
