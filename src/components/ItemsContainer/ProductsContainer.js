import React, { useEffect, useState } from "react";
import ListItem from "../ItemList/ItemList";
import { dataBase } from "../../data/productos";
import SpinnerLoader from "../LoadingSpinner/Spinner";
import { NavLink } from "react-router-dom";

export default function ItemsListContainer({ title, categoryId }) {
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
      <div style={{ marginTop: "40px" }}>
        <NavLink to="/tienda" className="linkATienda">
          <h1 className="mainTitle">{title}</h1>
        </NavLink>
      </div>
      {loading ? <SpinnerLoader /> : <ListItem productos={items} />}
    </>
  );
}
