import React, { useContext, useEffect, useState } from "react";
import { contexto } from "../CustomProvider/CustomProvider";

const CartItemCounter = ({ purchase }) => {
  const { reduceQty, addToCartCounter, cart, removeProduct } =
    useContext(contexto);
  const [cartCounter, setCartCounter] = useState(purchase.quantity);
  useEffect(() => {
    setCartCounter(purchase.quantity);
  }, [cart]);

  const increaseQty = () => {
    if (cartCounter < purchase.stock) {
      addToCartCounter(purchase, 1);
      setCartCounter((count) => (count = purchase.quantity));
    }
  };
  const decreaseQty = () => {
    if (cartCounter > 1) {
      reduceQty(purchase, 1);
      setCartCounter((count) => (count = purchase.quantity));
    } else if (cartCounter === 1) {
      removeProduct(purchase.id);
    }
  };

  return (
    <div className="cartCounter">
      <button
        onClick={decreaseQty}
        className="buttonDecrease"
        style={{ fontSize: "50px" }}
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
      <button
        onClick={increaseQty}
        className="buttonDecrease"
        style={{ fontSize: "28px" }}
      >
        +
      </button>
    </div>
  );
};

export default CartItemCounter;
