import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { useNavigate } from "react-router-dom";

const OrderConfirmed = ({ orderId, cart, formValues, addQty, totalSum }) => {
  const navigateToHome = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "100px",
      }}
    >
      <div className="detailOrder">
        <div>
          <p className="orderConfirmed">
            ¡Felicitaciones su orden N°: {orderId} ha sido generada
            exitosamente!
          </p>
        </div>
        <div>
          <div className="detailOrderConfirmed">
            Importante <BsQuestionCircleFill />
          </div>
          <p className="reminder">
            Recordá que la facturación se realizará con la información aquí
            cargada. Verificá que la información concuerde con tu información
            personal y el detalle de tu compra. Te llegara a tu correo un mail
            de confirmación de compra.
          </p>
        </div>
        <div className="detailOrderConfirmed">Datos Ingresados:</div>
        <div className="dataCustomer">
          <p>
            Nombre y Apellido : {formValues.nombre} {formValues.apellido}
          </p>
          <p>Email: {formValues.mail}</p>
          <p>Ciudad: {formValues.ciudad}</p>
          <p>País: {formValues.pais}</p>
        </div>
        <div className="detailOrderConfirmed">Detalle de la orden:</div>
        <div>
          <div
            style={{
              display: "flex",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            {cart.map((purchase) => (
              <CheckoutItem purchase={purchase} key={purchase.id} />
            ))}
          </div>
          <div className="priceCheckout">
            <div>
              <p>Cantidad de Productos: {addQty(cart)}</p>
              <p>Total : $ {totalSum(cart)}</p>
            </div>
          </div>
          <div className="detailOrderConfirmed2">
            <div style={{ marginTop: "13px" }}>
              ¡Gracias por confiar en TECHMINE, te esperamos pronto!
            </div>
            <div>
              <button
                className="learn-more"
                style={{ marginRight: "20px" }}
                onClick={() => navigateToHome("/home")}
              >
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Inicio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
