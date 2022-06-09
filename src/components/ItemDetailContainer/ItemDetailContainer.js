import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { NavLink } from "react-router-dom";
import SpinnerLoader from "../LoadingSpinner/Spinner";
import { contexto } from "../../CustomProvider/CustomProvider";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = ({ titleDetalleProducto, id }) => {
  const { setActiveAddToCartButton, setRedBorder } = useContext(contexto);
  const [detailProduct, setDetailProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setActiveAddToCartButton(0);
    setRedBorder(false);
    const db = getFirestore();
    const productRef = doc(db, "productos", id);
    getDoc(productRef)
      .then((doc) => setDetailProduct({ id: doc.id, ...doc.data() }))
      .finally(() => setLoading(false));
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
            style={{ paddingLeft: "2px", paddingRight: "2px" }}
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
