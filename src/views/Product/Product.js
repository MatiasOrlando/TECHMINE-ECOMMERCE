import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

const Product = () => {
  const { id } = useParams();
  return (
    <ItemDetailContainer id={id} titleDetalleProducto="Detalle del producto" />
  );
};

export default Product;
