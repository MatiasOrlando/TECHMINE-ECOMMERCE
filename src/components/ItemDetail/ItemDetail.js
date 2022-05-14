import React from "react";
import ItemCount from "../Itemcount/ItemCounter";

const ItemDetail = ({ detailProduct }) => {
  return (
    <>
      <div></div>
      <div className="detailDivProduct">
        <div className="detailPictureProduct">
          <div className="imagesProduct">
            <div>
              <img src={detailProduct.image} alt="gforce gt 210" />
            </div>
            <div className="smallImagesProduct">
              <div>
                <img
                  src={detailProduct.imageb}
                  alt="gforce gt 210 2"
                  style={{ heigth: "162px", width: "162px" }}
                />
              </div>
              <div>
                <img
                  src={detailProduct.imagec}
                  alt="gforce gt 210 3"
                  style={{ heigth: "162px", width: "162px" }}
                />
              </div>
            </div>
            <div class="shipping">
              LAS IMAGENES SON AL EFECTO MERAMENTE ILUSTRATIVO Y NO SON
              CONTRACTUALES
            </div>
          </div>
        </div>

        <div className="detailProduct">
          <div className="meta">
            <h2 className="tituloProducto">{detailProduct.title}</h2>
            <div className="price-main">
              <span className="priceInfo">
                Precio efectivo o transferencia: ${detailProduct.price}
              </span>
              <span className="price-old">${detailProduct.oldprice}</span>
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
            ¡12 cuotas de ${(detailProduct.price / 12).toFixed(2)}!
          </div>
          <div className="tags">
            <span className="tag tag-stock">En stock</span>
          </div>
          <ItemCount stock={detailProduct.stock} />
        </div>
      </div>
      <div className="infoProductDescription">
        <div className="productDescription">
          <p className="titleCharacteristics">Caracteristicas:</p>
          <p className="productCharacteristics">{detailProduct.description}</p>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
