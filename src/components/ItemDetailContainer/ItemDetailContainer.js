import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { dataBase } from "../../data/productos";
import { NavLink } from "react-router-dom";
import SpinnerLoader from "../LoadingSpinner/Spinner";
import { contexto } from "../CustomProvider/CustomProvider";

const ItemDetailContainer = ({ titleDetalleProducto, id }) => {
  const { setActiveAddToCartButton, setRedBorder } = useContext(contexto);
  const [detailProduct, setDetailProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dataBase
      .then((res) => res.find((item) => item.id === +id))
      .then((res) => setDetailProduct(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    setActiveAddToCartButton(0);
    setRedBorder(false);
  }, [id]);

  const { title, categoryId } = detailProduct;

  return (
    <>
      <div style={{ marginTop: "60px" }}>
        <div className="titleDetailProduct" style={{ marginBottom: "5px" }}>
          {titleDetalleProducto} /
          <NavLink
            className="linkProductsCategorys"
            to={`/category/${categoryId}`}
          >
            {categoryId}
          </NavLink>
          / {title}
        </div>
        {loading ? (
          <SpinnerLoader />
        ) : (
          <ItemDetail detailProduct={detailProduct} />
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
