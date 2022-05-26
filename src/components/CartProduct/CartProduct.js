import React, { useContext } from "react";
import { VscTrash } from "react-icons/vsc";
import { NavLink, Link } from "react-router-dom";
import CartItemCounter from "../CartItemCounter/CartItemCounter";
import { contexto } from "../CustomProvider/CustomProvider";

const CartProduct = ({ purchase }) => {
  const totalPricePerItem = purchase.price * purchase.quantity;
  const { removeProduct } = useContext(contexto);
  return (
    <>
      <div className="cartView">
        <div className="itemCart">
          <div className="imageItemCart">
            <img
              className="imageItemCart"
              style={{ height: "160px", width: "160px", paddingLeft: "15px" }}
              src={purchase.image}
              alt={purchase.title}
            />
          </div>
          <div className="metal">
            <div className="itemCartTitle">
              <NavLink className="purchaseTitle" to={`/product/${purchase.id}`}>
                <h4>{purchase.title}</h4>
              </NavLink>
              <div className="options">
                <ul className="deleteItem">
                  <li
                    style={{
                      color: "black",
                      fontFamily: "Roboto",
                      paddingBottom: "10px",
                    }}
                  >
                    Cantidad : {purchase.quantity}
                  </li>
                  <CartItemCounter purchase={purchase} />
                  <li onClick={() => removeProduct(purchase.id)}>
                    <Link to="#" style={{ textDecoration: "none" }}>
                      Eliminar
                      <VscTrash />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="itemPrice">${totalPricePerItem}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
