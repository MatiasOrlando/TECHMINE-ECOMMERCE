import React, { useContext, useEffect, useState } from "react";
import { contexto } from "../../CustomProvider/CustomProvider";

const CartItemCounter = ({ purchase }) => {
  const [buttonActive, setButtonActive] = useState(true);
  const [decreaseBlock, setDecreaseBlock] = useState("");
  const { reduceQty, addToCart, cart } = useContext(contexto);
  const [cartCounter, setCartCounter] = useState(purchase.quantity);
  useEffect(() => {
    setCartCounter(purchase.quantity);
  }, [cart]);

  // Añade cantidad del producto seleccionado en carrito
  const increaseQty = () => {
    if (cartCounter < purchase.stock) {
      addToCart(purchase, 1);
      setCartCounter((count) => (count = purchase.quantity));
      setButtonActive(true);
      setDecreaseBlock("");
    }
  };

  // Reduce la cantidad del producto seleccionado  en carrito
  const decreaseQty = () => {
    if (cartCounter > 1) {
      reduceQty(purchase, 1);
      setCartCounter((count) => (count = purchase.quantity));
    } else if (cartCounter === 1) {
      setButtonActive(false);
      setDecreaseBlock(
        "Recuerda que la cantidad siempre debe ser como mínimo 1, de lo contrario elimina el producto."
      );
    }
  };

  return (
    <>
      <div className="cartCounter">
        <button
          onClick={decreaseQty}
          className="buttonDecrease"
          style={{ fontSize: "50px" }}
          disabled={!buttonActive}
        >
          -
        </button>
        <div>
          <p
            style={{
              color: "black",
              border: "1px solid #eaeaea",
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            {cartCounter}
          </p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "3px" }}
        >
          <button
            onClick={increaseQty}
            className="buttonDecrease"
            style={{ fontSize: "28px" }}
          >
            +
          </button>
        </div>
      </div>
      <p>{decreaseBlock}</p>
    </>
  );
};

export default CartItemCounter;
