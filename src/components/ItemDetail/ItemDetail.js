import React from "react";
import ItemCount from "../Itemcount/ItemCounter";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ detailProduct }) => {
  const { image, imageb, imagec, title, price, oldprice, stock, description } =
    detailProduct;
  const navegarATienda = useNavigate();
  return (
    <>
      <div></div>
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
          <ItemCount stock={stock} />
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
    </>
  );
};

export default ItemDetail;
