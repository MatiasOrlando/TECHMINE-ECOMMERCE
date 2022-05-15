import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { dataBase } from "../../data/productos";
import { NavLink } from "react-router-dom";

const ItemDetailContainer = ({ titleDetalleProducto, id }) => {
  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(() => {
    dataBase
      .then((res) => res.find((item) => item.id === +id))
      .then((res) => setDetailProduct(res))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <div style={{ marginTop: "60px" }}>
        <div className="titleDetailProduct" style={{ marginBottom: "5px" }}>
          {titleDetalleProducto} /{" "}
          <NavLink
            className="linkProductsCategorys"
            to={`/category/${detailProduct.categoryId}`}
          >
            {detailProduct.categoryId}{" "}
          </NavLink>
          / {detailProduct.title}
        </div>
        <ItemDetail detailProduct={detailProduct} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
