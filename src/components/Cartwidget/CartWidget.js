import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { contexto } from "../CustomProvider/CustomProvider";

export default function CartWidget() {
  const { cart } = useContext(contexto);

  return (
    <>
      <NavLink to={cart.length >= 1 ? "/cart" : "/tienda"}>
        <img
          src="/images/cartImg.png"
          alt="Carrito"
          style={{ height: "32px", width: "32px" }}
        />
        <div className="number">{cart.length}</div>
      </NavLink>
    </>
  );
}
