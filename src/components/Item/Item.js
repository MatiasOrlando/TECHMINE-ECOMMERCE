import React from "react";
import { Button } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";

export default function Test({ product }) {
  return (
    <>
      <div>
        <div className="item product-list">
          <a href="#" />
          <div className="padre">
            <div className="imageProductDiv">
              <img src={product.image} alt="" className="imgProduct" />
            </div>
            <div>
              <div className="info">
                <h3 className="titulosProductosLista">{product.title}</h3>
                <div className="price-mainLista">
                  <span className="priceInfo">${product.price}</span>
                  <span className="price-old">${product.oldprice}</span>
                </div>
                <div className="tags">
                  <span className="tag tag-stock">
                    Stock disponible: {product.stock}
                  </span>
                  <span className="tag tag-stock">
                    Deposito Externo Entrega 48 horas.
                  </span>
                </div>
                <div className="buttonsToBuy">
                  <Button
                    style={{
                      color: "#0077f9",
                      backgroundColor: "white",
                      borderRadius: "4px",
                    }}
                    className="add-button"
                  >
                    Añadir al carrito
                    <BsCart3
                      style={{ height: "15px", width: "15px", color: "0077f9" }}
                    />
                  </Button>
                  <Button variant="primary">Comprar</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
