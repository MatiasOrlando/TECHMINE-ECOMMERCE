import React, { useState, useContext } from "react";
import { contexto } from "../../CustomProvider/CustomProvider";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import FormCheckout from "../../components/FormCheckout/FormCheckout";

import OrderConfirmed from "../../components/OrderConfirmed/OrderConfirmed";
import SwiperTest from "../../components/SwiperTest/SwiperTest";
const Checkout = () => {
  const { cart, totalSum, addQty } = useContext(contexto);
  const [validated, setValidated] = useState(false);
  const [orderDone, setOrderDone] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
    mail: "",
    pais: "",
    ciudad: "",
    codigoPostal: "",
    tarjeta: "",
    numeroTarjeta: "",
    fechaVencimiento: "",
    codigoSeguridad: "",
  });

  const formData = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setValidated(true);
    if (form.checkValidity() === false) {
      event.stopPropagation();
      event.preventDefault();
    }

    if (form.checkValidity() === true) {
      event.preventDefault();
      const order = {
        buyer: formValues,
        items: cart,
        total: totalSum(cart),
        date: new Date().toLocaleString(),
      };
      console.log(order);
      const db = getFirestore();
      const orderCollection = collection(db, "orders");

      addDoc(orderCollection, order).then(({ id }) => {
        setOrderId(id);
      });
      setOrderDone(true);
    }
  };

  console.log(orderId);

  return (
    <>
      <div>
        <div className="checkoutTitle">CHECKOUT /</div>
        {orderDone ? (
          <OrderConfirmed
            orderId={orderId}
            cart={cart}
            formValues={formValues}
            addQty={addQty}
            totalSum={totalSum}
          />
        ) : (
          <FormCheckout
            formData={formData}
            handleSubmit={handleSubmit}
            validated={validated}
          />
        )}
      </div>
      <SwiperTest />
    </>
  );
};

export default Checkout;
