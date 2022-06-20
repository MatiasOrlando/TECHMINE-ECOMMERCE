import React from "react";
import { Card } from "react-bootstrap";

const CheckoutItemForm = ({ purchase }) => {
  return (
    <Card
      bg="light"
      key={purchase.id}
      text="dark"
      style={{ width: "18rem" }}
      className="mb-2"
    >
      <Card.Header style={{ textAlign: "center" }}>
        {purchase.title}
      </Card.Header>
      <Card.Body>
        <div style={{ display: "flex" }}>
          <div>
            <Card.Title>
              <img
                src={purchase.image}
                alt={purchase.title}
                style={{ width: "110px", height: "100px" }}
              />
            </Card.Title>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingLeft: "25px",
            }}
          >
            <Card.Text>Cantidad: {purchase.quantity}</Card.Text>
            <Card.Text>Precio: ${purchase.quantity * purchase.price}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CheckoutItemForm;
