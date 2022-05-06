import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../Itemcount/ItemCounter";

export default function Item({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          <p>Precio : ${product.price}</p>
          <p>Stock : {product.stock}</p>
        </Card.Text>
        <ItemCount />
      </Card.Body>
    </Card>
  );
}
