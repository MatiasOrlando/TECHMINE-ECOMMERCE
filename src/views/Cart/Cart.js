import React, { useContext } from "react";
import { contexto } from "../../components/CustomProvider/CustomProvider";
import CartProduct from "../../components/CartProduct/CartProduct";
import { NavLink } from "react-router-dom";
export default function Cart() {
  const { cart, deleteAll } = useContext(contexto);

  return (
    <div className="carritoBack">
      <div className="carrito">
        <NavLink to="/home" className="linkToHome">
          Inicio
        </NavLink>{" "}
        / Carrito
      </div>
      {cart.map((purchase) => (
        <CartProduct purchase={purchase} key={purchase.id} title="Inicio" />
      ))}
      <div className="cartView">
        <div className="itemCart2">
          <p className="totalPrice">Productos: </p>
          <p className="totalPrice">Subtotal: $ </p>
          <p className="totalPrice">Total: $</p>
        </div>
      </div>
      <div className="cartView">
        <div className="itemCart3">
          <div className="stylesButtonsCart">
            <div>
              <button
                className="btn btn-outline"
                id="emptyCard"
                onClick={() => deleteAll()}
              >
                Vaciar Carrito
              </button>
            </div>
            <div>
              <button className="btn btn-outline" id="emptyCard">
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
