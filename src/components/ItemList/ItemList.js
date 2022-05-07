import React from "react";
import Item from "../Item/Item";

export default function ListItem({ productos }) {
  return (
    <>
      <div>
        {productos.map((product) => {
          return <Item product={product} key={product.id} />;
        })}
      </div>
    </>
  );
}
