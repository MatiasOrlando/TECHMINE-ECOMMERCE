import React, { useEffect, useState } from "react";
import ListItem from "../ItemList/ItemList";
import { dataBase } from "../../data/productos";
import SpinnerLoader from "../LoadingSpinner/Spinner";

export default function ItemsListContainer({ title, title2, categoryId }) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    dataBase
      .then((res) => {
        if (!categoryId) {
          setItems(res);
        } else {
          setItems(res.filter((item) => item.categoryId === categoryId));
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <>
      <div style={{ marginTop: "40px" }} className="tienda">
        {title} / {title2}
      </div>
      {loading ? <SpinnerLoader /> : <ListItem productos={items} />}
    </>
  );
}
