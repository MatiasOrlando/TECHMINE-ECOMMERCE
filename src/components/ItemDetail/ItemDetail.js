import React from "react";
import ItemCount from "../Itemcount/ItemCounter";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";

const ItemDetail = ({ detailProduct }) => {
  const { image, imageb, imagec, title, price, oldprice, stock, description } =
    detailProduct;
  const navegarATienda = useNavigate();
  const navegarACart = useNavigate();
  const [count, setCount] = useState(1);
  const [buttonDecreaseActive, setButtonDecreaseActive] = useState(false);
  const [buttonAddActive, setButtonAddActive] = useState(false);
  const [maxStock, setMaxStock] = useState(null);
  const [activeAddToCartButton, setActiveAddToCartButton] = useState(0);
  const [redBorder, setRedBorder] = useState(false);

  const handleAddItem = (count) => {
    if (count < stock) {
      setCount(count + 1);
      setButtonDecreaseActive(true);
    }
    if (count === stock) {
      setMaxStock("Ha alcanzado el numero maximo de stock disponible");
      setButtonAddActive(true);
    }
  };

  const handleDecrementItem = (count) => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (count !== stock) {
      setButtonAddActive(false);
    }
    if (count === 1) {
      setButtonDecreaseActive(false);
    }
    if (count < stock) {
      setMaxStock(null);
    }
  }, [count]);

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
      setRedBorder(true);
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
      setRedBorder(true);
    }
  };

  // Componente de presentación
  const AddButton = ({ handleOnSubmit }) => {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingRight: "40px",
            marginTop: "30px",
          }}
        >
          <Button
            style={{
              color: "#0077f9",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            className="add-button"
            onClick={() => handleOnSubmit()}
          >
            Añadir al carrito
            <BsCart3
              style={{ height: "15px", width: "15px", color: "0077f9" }}
            />
          </Button>
          <Button variant="primary">Comprar</Button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="detailDivProduct">
        <div className="detailPictureProduct">
          <div className="imagesProduct">
            <div>
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={image} alt={title} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={imageb} alt={title} />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={imagec} alt={title} />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="smallImagesProduct">
              <div>
                <img
                  src={imageb}
                  alt={title}
                  style={{ heigth: "162px", width: "162px" }}
                />
              </div>
              <div>
                <img
                  src={imagec}
                  alt={title}
                  style={{ heigth: "162px", width: "162px" }}
                />
              </div>
            </div>
            <div className="shipping">
              LAS IMAGENES SON AL EFECTO MERAMENTE ILUSTRATIVO Y NO SON
              CONTRACTUALES
            </div>
          </div>
        </div>
        <div className="detailProduct">
          <div className="meta">
            <h2 className="tituloProducto">{title}</h2>
            <div className="price-main">
              <span className="priceInfo">
                Precio efectivo o transferencia: ${price}
              </span>
              <span className="price-old">${oldprice}</span>
            </div>
          </div>
          <div className="price-mp">
            <img
              src="/images/mercadopago.png"
              alt="mercadopago"
              style={{ height: "30px", width: "100px" }}
            />
          </div>
          <div className="price-main">
            ¡12 cuotas de ${(price / 12).toFixed(2)}!
          </div>
          <div className="tags">
            <span className="tag tag-stock">En stock</span>
          </div>
          <ItemCount
            count={count}
            stock={stock}
            handleAddItem={() => handleAddItem(count)}
            handleDecrementItem={() => handleDecrementItem(count)}
            buttonAddActive={buttonAddActive}
            buttonDecreaseActive={buttonDecreaseActive}
            maxStock={maxStock}
            redBorder={redBorder}
          />
          {activeAddToCartButton >= 1 ? (
            <div className="btnEndPurchase">
              <button
                className="btn btn-dark"
                onClick={() => navegarACart("/cart")}
                style={{ marginTop: "20px" }}
              >
                Finalizar Compra
              </button>
            </div>
          ) : (
            <AddButton handleOnSubmit={() => handleOnSubmit(count)} />
          )}
        </div>
      </div>
      <div className="infoProductDescription">
        <div className="productDescription">
          <p className="titleCharacteristics">Caracteristicas:</p>
          <p className="productCharacteristics">{description}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "20px",
          marginTop: "20px",
        }}
      >
        <button
          style={{ marginBottom: "20px" }}
          className="btn btn-success"
          onClick={() => navegarATienda("/tienda")}
        >
          Volver a la Tienda
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ItemDetail;
