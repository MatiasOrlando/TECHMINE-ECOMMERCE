import React, { useState, useContext } from "react";
import { contexto } from "../../CustomProvider/CustomProvider";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  runTransaction,
} from "firebase/firestore";
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
    mailConfirmation: "",
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

    if (form.checkValidity() === false) {
      event.stopPropagation();
      event.preventDefault();
    }

    if (formValues.mail !== formValues.mailConfirmation) {
      setValidated(false);
    }
    if (form.checkValidity() === true) {
      setValidated(true);
      event.preventDefault();
      const order = {
        buyer: formValues,
        items: cart,
        total: totalSum(cart),
        status: "generated",
        date: new Date().toLocaleString(),
      };
      const db = getFirestore();
      const orderCollection = collection(db, "orders");

      addDoc(orderCollection, order).then(({ id }) => {
        setOrderId(id);
      });

      setOrderDone(true);
    }
    updateStock();
  };

  //  Batch update stock una vez realizada la orden.
  const updateStock = async () => {
    const db = getFirestore();
    cart.forEach(async (product) => {
      const prodRef = doc(db, "productos", product.id);
      await runTransaction(db, async (transaction) => {
        const prod = await transaction.get(prodRef);
        if (!prod.exists()) {
          console.log("No existe el producto");
        }
        const newStock = prod.data().stock - product.quantity;
        transaction.update(prodRef, { stock: newStock });
      });
    });
  };

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
