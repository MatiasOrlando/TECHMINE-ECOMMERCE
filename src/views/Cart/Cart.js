import React, { useContext } from "react";
import { contexto } from "../../CustomProvider/CustomProvider";
import CartProduct from "../../components/CartProduct/CartProduct";
import { NavLink } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import SwiperTest from "../../components/SwiperTest/SwiperTest";
export default function Cart() {
  const { cart, deleteAll, addQty, totalSum } = useContext(contexto);

  const GoToStore = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="emptyCartView">
          <p className="textEmptyCart">
            Oops! Tu carrito se encuentra vacío... regresa a la tienda para
            seguir comprando
            <NavLink to="/tienda">
              <BiLinkExternal style={{ marginLeft: "5px" }} />
            </NavLink>
          </p>
        </div>
      </div>
    );
  };

  const OptionsCart = () => {
    return (
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
              <NavLink to="/checkout">
                <button className="btn btn-outline" id="emptyCard">
                  Siguiente
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="carritoBack">
        <div className="carrito">
          <NavLink to="/home" className="linkToHome">
            Inicio
          </NavLink>{" "}
          / Carrito
        </div>
        {cart.length >= 1 ? (
          cart.map((purchase) => (
            <CartProduct purchase={purchase} key={purchase.id} title="Inicio" />
          ))
        ) : (
          <GoToStore />
        )}

        <div className="cartView">
          <div className="itemCart2">
            <p className="totalPrice">Productos: {addQty(cart)}</p>
            <p className="totalPrice">Subtotal: $ {totalSum(cart)}</p>
            <p className="totalPrice">Total: $ {totalSum(cart)}</p>
          </div>
        </div>
        <div> {cart.length >= 1 && <OptionsCart />}</div>
      </div>
      <SwiperTest />
    </>
  );
}
