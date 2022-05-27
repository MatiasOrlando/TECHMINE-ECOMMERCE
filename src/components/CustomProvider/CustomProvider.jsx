import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [buttonDecreaseActive, setButtonDecreaseActive] = useState(false);
  const [buttonAddActive, setButtonAddActive] = useState(false);
  const [activeAddToCartButton, setActiveAddToCartButton] = useState(0);
  const [redBorder, setRedBorder] = useState(false);
  const [maxStock, setMaxStock] = useState(null);

  const handleOnSubmit = (count) => {
    if (count === 1) {
      toast.success(`Has añadido ${count} item al carrito`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setActiveAddToCartButton(count);
      setButtonDecreaseActive(false);
      setButtonAddActive(true);
      setRedBorder(!redBorder);
      setMaxStock("");
    } else {
      toast.success(`Has añadido ${count} items al carrito`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setActiveAddToCartButton(count);
      setButtonDecreaseActive(false);
      setButtonAddActive(true);
      setRedBorder(!redBorder);
      setMaxStock("");
    }
  };

  const addToCart = (product, count) => {
    if (isInCart(product.id)) {
      const updatedCart = cart.map((productCart) => {
        if (productCart.id === product.id) {
          productCart.quantity++;
        }
        return productCart;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: +count }]);
    }
    handleOnSubmit(count);
  };

  const addToCartCounter = (product, count) => {
    if (isInCart(product.id)) {
      const updatedCart = cart.map((productCart) => {
        if (productCart.id === product.id) {
          productCart.quantity++;
        }
        return productCart;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: +count }]);
    }
  };

  const reduceQty = (product, quantity) => {
    if (isInCart(product.id)) {
      const newCart = cart.map((newPurchase) => {
        if (newPurchase.id === product.id) {
          return { ...newPurchase, quantity: newPurchase.quantity - quantity };
        } else {
          return newPurchase;
        }
      });
      setCart(newCart);
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

  const valueContext = {
    cart: cart,
    addToCart: addToCart,
    addToCartCounter: addToCartCounter,
    reduceQty: reduceQty,
    removeProduct: removeProduct,
    deleteAll: deleteAll,
    isInCart: isInCart,
    buttonAddActive: buttonAddActive,
    buttonDecreaseActive: buttonDecreaseActive,
    handleOnSubmit: handleOnSubmit,
    setButtonAddActive: setButtonAddActive,
    setButtonDecreaseActive: setButtonDecreaseActive,
    activeAddToCartButton: activeAddToCartButton,
    setActiveAddToCartButton: setActiveAddToCartButton,
    redBorder: redBorder,
    setRedBorder: setRedBorder,
    maxStock: maxStock,
    setMaxStock: setMaxStock,
  };

  return <Provider value={valueContext}>{children}</Provider>;
};

export default CustomProvider;
