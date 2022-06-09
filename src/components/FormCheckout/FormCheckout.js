import React from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import SwiperTest from "../SwiperTest/SwiperTest";

const FormCheckout = ({ formData, validated, handleSubmit }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="personalDataOrder">
          <div
            style={{
              display: "flex",
              width: "1050px",
              marginTop: "40px",
              borderBottom: "1px solid rgb(230, 230, 230)",
            }}
          >
            <p className="textEmptyCart">Datos Personales</p>
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
                    Nombre ingresado válido
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
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
                  type="text"
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
    </>
  );
};

export default FormCheckout;
