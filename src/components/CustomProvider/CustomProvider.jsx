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

  const deleteQtyFromCart = (id) => {
    if (isInCart(id)) {
      const updatedCart = cart.map((productCart) => {
        if (productCart.id === id) {
          if (productCart.quantity === 1) {
            removeProduct(productCart.id);
          } else {
            productCart.quantity--;
          }
          return productCart;
        }
      });
      setCart(updatedCart);
    }
  };

  const removeProduct = (id) => {
    const newCart = cart.filter((productCart) => productCart.id !== id);
    setCart(newCart);
  };

  const deleteAll = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((product) => product.id === id);
  };
  console.log(cart);

  const valueContext = {
    cart: cart,
    addToCart: addToCart,
    deleteQtyFromCart: deleteQtyFromCart,
    removeProduct: removeProduct,
    deleteAll: deleteAll,
    isInCart: isInCart,
  };

  return <Provider value={valueContext}>{children}</Provider>;
};

export default CustomProvider;
