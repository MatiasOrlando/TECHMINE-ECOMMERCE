import React from "react";
import Item from "../Item/Item";
import { products } from "../../data/productos";

export default function ListItem(products) {
  return (
    <>
      <div>
        {products.map((product) => {
          return <Item product={product} key={product.id} />;
        })}
      </div>
    </>
  );
}
