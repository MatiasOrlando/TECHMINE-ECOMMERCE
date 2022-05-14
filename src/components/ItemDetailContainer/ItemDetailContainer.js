import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { dataBase } from "../../data/productos";

const ItemDetailContainer = ({ titleDetalleProducto }) => {
  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(() => {
    dataBase
      .then((res) => res.find((product) => product.id === 0))
      .then((res) => setDetailProduct(res))
      .catch((error) => console.log(error));
  }, []);

  console.log(detailProduct);
  return (
    <>
      <div className="titleDetailProduct">{titleDetalleProducto}</div>
      <div>
        <ItemDetail detailProduct={detailProduct} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
