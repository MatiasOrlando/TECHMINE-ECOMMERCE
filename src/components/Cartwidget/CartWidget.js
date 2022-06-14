import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { contexto } from "../../CustomProvider/CustomProvider";

export default function CartWidget() {
  const { cart, addQty } = useContext(contexto);

  return (
    <>
      <NavLink to="/cart">
        <img
          src="/images/cartImg.png"
          alt="Carrito"
          style={{ height: "32px", width: "32px" }}
        />
        {cart.length !== 0 && <div className="number">{addQty(cart)}</div>}
      </NavLink>
    </>
  );
}
