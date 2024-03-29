import React from "react";
import { Button, Nav } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Item({ product }) {
  return (
    <>
      <Nav.Link as="div">
        <NavLink to={`/product/${product.id}`} className="linkToProductDetail">
          <div>
            <div className="itemList">
              <div className="padre">
                <div className="imageProductDiv">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="imgProduct"
                  />
                </div>
                <div>
                  <div className="info">
                    <div className="content-product">
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
                    </div>
                    <div className="buttonsToBuy">
                      <Button
                        style={{
                          color: "#0077f9",
                          backgroundColor: "white",
                          borderRadius: "4px",
                          marginRight: "1rem",
                        }}
                        className="add-button"
                      >
                        Añadir al carrito
                        <BsCart3
                          style={{
                            height: "15px",
                            width: "15px",
                            color: "0077f9",
                          }}
                        />
                      </Button>
                      <Button variant="primary">Comprar</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </Nav.Link>
    </>
  );
}
