import React, { useEffect, useState } from "react";
import ListItem from "../ItemList/ItemList";
import { dataBase } from "../../data/productos";
import SpinnerLoader from "../LoadingSpinner/Spinner";

export default function ItemsListContainer({ title, categoryId }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    dataBase
      .then((res) => setProductos(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setItems(productos.filter((product) => product.categoryId === +categoryId));
  }, [categoryId]);

  return (
    <>
      <h1 className="mainTitle">{title}</h1>
      {loading ? <SpinnerLoader /> : <ListItem productos={productos} />}
    </>
  );
}
