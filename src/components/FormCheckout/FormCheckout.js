import React, { useContext } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import CheckoutItemForm from "../CheckoutItemForm/CheckoutItemForm";
import { contexto } from "../../CustomProvider/CustomProvider";
const FormCheckout = ({ formData, validated, handleSubmit, formValues }) => {
  const { cart, addQty, totalSum } = useContext(contexto);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ display: "flex", marginLeft: "157px" }}>
            <div className="personalDataOrder">
              <div
                style={{
                  display: "flex",
                  width: "875px",
                  marginTop: "20px",
                  borderBottom: "1px solid rgb(230, 230, 230)",
                }}
              >
                <div>
                  <p className="textEmptyCart">Datos Personales</p>
                </div>
              </div>
            </div>
          </div>
          <div className="checkoutView">
            <div className="checkout">
              <div className="goData">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        onChange={formData}
                      />
                      <Form.Control.Feedback>
                        Nombre ingresado válido
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Apellido"
                        name="apellido"
                        onChange={formData}
                      />
                      <Form.Control.Feedback>
                        Apellido ingresado válido
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label>Email</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          @
                        </InputGroup.Text>
                        <Form.Control
                          type="email"
                          placeholder="Mail"
                          aria-describedby="inputGroupPrepend"
                          name="mail"
                          onChange={formData}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Porfavor ingrese un email válido
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group
                      style={{ marginTop: "20px" }}
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                      mt="20px"
                    >
                      <Form.Label>Confirme su email</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          @
                        </InputGroup.Text>
                        <Form.Control
                          type="email"
                          placeholder="Mail"
                          aria-describedby="inputGroupPrepend"
                          name="mailConfirmation"
                          onChange={formData}
                          required
                        />
                        <Form.Control.Feedback
                          type={
                            formValues.mail === formValues.mailConfirmation
                              ? "valid"
                              : "invalid"
                          }
                        >
                          Porfavor debe coincidir con el mail ingresado
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="5" controlId="validationCustom03">
                      <Form.Label>País</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="País"
                        name="pais"
                        onChange={formData}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Porfavor ingrese una país válido
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                      <Form.Label>Ciudad</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ciudad"
                        name="ciudad"
                        onChange={formData}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Porfavor ingrese una ciudad válida
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>Código postal</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="C.P Zip"
                        name="codigoPostal"
                        onChange={formData}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Porfavor ingrese un código postal válido
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "30px",
                      marginTop: "40px",
                      borderBottom: "1px solid #e6e6e6",
                    }}
                  >
                    <div>
                      <p className="textPaymentMethod">Método de pago</p>
                    </div>
                  </div>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom06">
                      <Form.Label>Tarjeta</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Visa, Mastercard, Amex..."
                        name="tarjeta"
                        onChange={formData}
                      />
                      <Form.Control.Feedback>
                        Tarjeta ingresada válida
                      </Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Porfavor ingrese una tarjeta válida
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom07">
                      <Form.Label>N° de Tarjeta</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Ingrese el N° de su Tarjeta"
                        name="numeroTarjeta"
                        onChange={formData}
                      />
                      <Form.Control.Feedback>
                        Tarjeta ingresada válida
                      </Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Porfavor ingrese un N° de tarjeta válido
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom08">
                      <Form.Label>Fecha de vencimiento</Form.Label>
                      <Form.Control
                        required
                        type="month"
                        placeholder="Ingrese la fecha de vencimiento de su tarjeta"
                        name="fechaVencimiento"
                        onChange={formData}
                      />
                      <Form.Control.Feedback>
                        Fecha ingresada válida
                      </Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Porfavor ingrese una fecha de vencimiento válida
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom09">
                    <Form.Label>Código de seguridad</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Ingrese el código de seguridad"
                      name="codigoSeguridad"
                      onChange={formData}
                    />
                    <Form.Control.Feedback>
                      Código ingresado válido
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Porfavor ingrese un código de seguridad válido
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3 mt-5">
                    <Form.Check
                      required
                      label="Aceptar términos y condiciones"
                      feedback="Debe aceptar términos y condiciones antes de enviar."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <Button type="submit">Finalizar orden</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            {cart.map((purchase) => (
              <CheckoutItemForm purchase={purchase} key={purchase.id} />
            ))}
          </div>
          <div className="formCheckoutTotal">
            <div className="totalSum">Total </div>
            <p>Cantidad: {addQty(cart)}</p>
            <p>Total : $ {totalSum(cart)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCheckout;
