import React, { useEffect, useState } from "react";
import ListItem from "../ItemList/ItemList";
import { dataBase } from "../../data/productos";
import SpinnerLoader from "../LoadingSpinner/Spinner";

export default function ItemsListContainer({ title, title2, categoryId }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const filteredProducts = productos.filter(
        (product) => product.categoryId === categoryId
      );
      setItems(filteredProducts);
    } else {
      setItems(productos);
    }
  }, [productos]);

  useEffect(() => {
    setLoading(true);
    dataBase
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div style={{ marginTop: "40px" }} className="tienda">
        {title} / {title2}
      </div>
      {loading ? <SpinnerLoader /> : <ListItem productos={items} />}
    </>
  );
}
