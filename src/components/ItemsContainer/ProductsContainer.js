import React from "react";
import ListItem from "../ItemList/ItemList";
import { products } from "../../data/productos";
// import Item from "../Item/Item";

export default function ItemsListContainer({ title }) {
  const task = new Promise((resolve, reject) => {
    const randNumber = Math.random();

    setTimeout(() => {
      if (randNumber < 0.9) {
        console.log("Congrats get your list of products");
        resolve(products);
      }
      reject("Request failed");
    }, 2000);
  });

  task
    .then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
    .catch((err) => console.log(err));

  return (
    <>
      <h1>{title}</h1>
      <ListItem />
      {/* <div>
        {products.map((product) => {
          return <Item product={product} key={product.id} />;
        })}
      </div> */}
    </>
  );
}
