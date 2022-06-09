import React from "react";

const CheckoutItem = ({ purchase }) => {
  return (
    <div
      style={{
        paddingLeft: "2px",
        paddingRight: "2px",
      }}
    >
      <div className="divCheckout">
        <div className="itemCheckout">
          <div className="titleItemCheckout">{purchase.title}</div>
          <div className="divImgCheckout">
            <img src={purchase.image} className="imgItemCheckout" />
          </div>
          <div className="detailItemCheckout">
            <p>Cantidad: {purchase.quantity}</p>
          </div>
          <div>
            <p className="detailItemCheckout">
              Precio: ${purchase.quantity * purchase.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
