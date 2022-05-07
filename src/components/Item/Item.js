import React from "react";
import ItemCount from "../Itemcount/ItemCounter";

export default function Test({ product }) {
  return (
    <>
      <div>
        <div className="item product-list">
          <a href="" />
          <div className="padre">
            <div className="imageProductDiv">
              <img src={product.image} alt="" className="imgProduct" />
            </div>
            <div>
              <div className="info">
                <h3>{product.title}</h3>
                <div className="price">
                  ${product.price} <br />
                  <span className="price-promo">${product.oldprice}</span>
                </div>
                <div className="tags">
                  <span className="tag tag-stock">
                    Stock disponible: {product.stock}
                  </span>
                  <br />
                  <span className="tag tag-stock">
                    Deposito Externo Entrega 48 horas.
                  </span>
                </div>
                <div className="cta">
                  <ItemCount />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
