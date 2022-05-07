import React, { useEffect, useState } from "react";
import ListItem from "../ItemList/ItemList";
import { dataBase } from "../../data/productos";

export default function ItemsListContainer({ title }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    dataBase
      .then((res) => setProductos(res))
      .catch((error) => console.log(error));
  }, []);

  console.log(productos);
  return (
    <>
      <h1 className="mainTitle">{title}</h1>
      <ListItem productos={productos} />
    </>
  );
}
