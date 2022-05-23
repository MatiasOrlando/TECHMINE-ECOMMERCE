import React, { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (isInCart(product.id)) {
      const updatedCart = cart.map((productCart) => {
        if (productCart.id === product.id) {
          productCart.quantity++;
        }
        return productCart;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const deleteFromCart = (id) => {
    if (isInCart(id)) {
      const updatedCart = cart.map((productCart) => {
        if (productCart.id === id) {
          if (productCart.quantity > 1) {
            productCart.quantity--;
          } else {
            let index = cart.findIndex((element) => element.id === id);
            console.log(index);
            cart.slice(index, 1);
            console.log(cart);
          }
        }
        return productCart;
      });
      setCart(updatedCart);
    }
  };

  const deleteAll = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((product) => product.id === id);
  };

  const valueContext = {
    cart: cart,
    addToCart: addToCart,
    deleteFromCart: deleteFromCart,
    deleteAll: deleteAll,
    isInCart: isInCart,
  };

  return <Provider value={valueContext}>{children}</Provider>;
};

export default CustomProvider;
