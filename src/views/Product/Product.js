import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  return (
    <ItemDetailContainer
      id={id}
      titleDetalleProducto={
        <NavLink to="/tienda" className="linkToAllProducts">
          Tienda
        </NavLink>
      }
    />
  );
};

export default Product;
