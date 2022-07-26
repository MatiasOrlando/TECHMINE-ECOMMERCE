import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState("");
  const [buttonDecreaseActive, setButtonDecreaseActive] = useState(false);
  const [buttonAddActive, setButtonAddActive] = useState(false);
  const [activeAddToCartButton, setActiveAddToCartButton] = useState(0);
  const [blackBorder, setBlackBorder] = useState(false);
  const [maxStock, setMaxStock] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const navigateToCheckout = useNavigate();

  // Funcion que crea eventos interactivos una vez agregados productos al carrito
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
      setBlackBorder(!blackBorder);
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
      setBlackBorder(!blackBorder);
      setMaxStock("");
    }
  };

  // Funcion que agrega productos al carrito con su cantidad correspondiente y evita duplicidad de productos (se utiliza tanto como para el boton Agregar al carrito como para manipular y añadir cantidades desde la viewCart)
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

  // Funcion que agrega productos al carrito con su cantidad correspondiente y evita duplicidad de productos. Redirecciona directamente al checkout para agilizar el proceso de compra del usuario.
  const buyProduct = (product, count) => {
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
    navigateToCheckout("/checkout");
  };

  // Funcion que permite manipular y restar cantidades de los productos seleccionados desde la view Cart
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

  // Funcion que permite remover un determinado producto del carrito
  const removeProduct = (id) => {
    const newCart = cart.filter((productCart) => productCart.id !== id);
    setCart(newCart);
  };

  // Funcion que permite vaciar el carrito (Elimina todos los productos agregados)
  const deleteAll = () => {
    setCart([]);
  };

  // Funcion que verifica si un producto determinado ya se encuentra en el carrito o no
  const isInCart = (id) => {
    return cart.find((product) => product.id === id);
  };

  // Funcion que calcula el precio total de la compra en base a los productos agregados al carrito
  const totalSum = (cart) => {
    const totalPriceItems = cart
      .map((productCart) => productCart.price * productCart.quantity)
      .reduce((acc, el) => acc + el, 0);
    return totalPriceItems;
  };

  // Funcion que calcula la cantidad total de productos agregados al carrito
  const addQty = (cart) => {
    const qtyItems = cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return qtyItems;
  };

  // Valor del contexto
  const valueContext = {
    cart: cart,
    addToCart: addToCart,
    reduceQty: reduceQty,
    removeProduct: removeProduct,
    deleteAll: deleteAll,
    blackBorder: blackBorder,
    setBlackBorder: setBlackBorder,
    buttonAddActive: buttonAddActive,
    buttonDecreaseActive: buttonDecreaseActive,
    setButtonAddActive: setButtonAddActive,
    setButtonDecreaseActive: setButtonDecreaseActive,
    activeAddToCartButton: activeAddToCartButton,
    setActiveAddToCartButton: setActiveAddToCartButton,
    maxStock: maxStock,
    setMaxStock: setMaxStock,
    addQty: addQty,
    totalSum: totalSum,
    addedToCart: addedToCart,
    setAddedToCart: setAddedToCart,
    buyProduct: buyProduct,
    data: data,
    setData: setData,
  };

  return <Provider value={valueContext}>{children}</Provider>;
};

export default CustomProvider;
