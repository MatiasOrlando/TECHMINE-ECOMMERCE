import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import swal from "sweetalert";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { GiHouse } from "react-icons/gi";

const FormContacto = ({ setLoading }) => {
  let consultaUsuario = [];
  const fakeRequest = true;
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
    mail: "",
    ciudad: "",
    mensaje: "",
  });

  const formData = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      setLoading(true);
      setValidated(true);
      consultaUsuario.push(formValues);
      localStorage.setItem(
        "Informacion consulta usuario",
        JSON.stringify(consultaUsuario)
      );
      if (fakeRequest) {
        setTimeout(() => {
          setLoading(false);
          swal({
            title: `Mensaje enviado ${formValues.nombre}`,
            text: "Nos pondremos en contacto a la brevedad",
            icon: "success",
            button: "aceptar",
          });
        }, 1000);
      }
    }
  };

  function obtenerLocal() {
    consultaUsuario = JSON.parse(
      localStorage.getItem("Informacion consulta usuario")
    );
    consultaUsuario === null && (consultaUsuario = []);
  }

  obtenerLocal();

  return (
    <>
      <div style={{ display: "flex", marginBottom: "100px" }}>
        <div>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="formContact"
          >
            <Row className="mb-3">
              <Form.Group
                as={Row}
                md="3"
                controlId="validationCustom01"
                className="mb-3"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  name="nombre"
                  required
                  type="text"
                  placeholder="Nombre"
                  onChange={formData}
                  style={{ width: "700px", marginLeft: "10px" }}
                />
                <Form.Control.Feedback>Nombre válido!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Row}
                md="3"
                controlId="validationCustom02"
                className="mb-2"
              >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  name="apellido"
                  required
                  type="text"
                  placeholder="Apellido"
                  onChange={formData}
                  style={{ width: "700px", marginLeft: "10px" }}
                />
                <Form.Control.Feedback>Apellido válido!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Row}
                md="4"
                controlId="validationCustom03"
                className="mb-3"
              >
                <Form.Label>Mail</Form.Label>
                <Form.Control
                  name="mail"
                  type="text"
                  placeholder="Mail"
                  onChange={formData}
                  required
                  style={{ width: "700px", marginLeft: "10px" }}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese una mail válido
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Row}
                md="3"
                controlId="validationCustom04"
                className="mb-3"
              >
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  name="ciudad"
                  type="text"
                  placeholder="Ciudad"
                  onChange={formData}
                  required
                  style={{ width: "700px", marginLeft: "10px" }}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese una ciudad válida
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Label>Envíanos tu consulta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mensaje..."
                name="mensaje"
                onChange={formData}
                required
                style={{
                  width: "700px",
                  height: "80px",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              />
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Acepto terminos y condiciones"
                feedback="Debe aceptar los terminos y condiciones antes de enviar"
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Enviar</Button>
          </Form>
        </div>
        <div style={{ backgroundColor: "white", width: "650px" }}>
          <img
            style={{ width: "600px" }}
            src="/images/placaminera.jpg"
            alt="H110 PRO ASROCK "
          />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <span class="bold">
                <GiHouse style={{ marginBottom: "7px" }} />
                <span style={{ paddingLeft: "5px" }}>Dirección</span>
              </span>
              <p>
                <span>Paseo Colón 702 Local 170</span>
              </p>
            </div>
            <div>
              <span class="bold">
                <BsFillEnvelopeFill style={{ marginBottom: "2px" }} />
                <span style={{ paddingLeft: "5px" }}>Atención al cliente</span>
              </span>
              <p style={{ paddingTop: "1px" }}>
                <span>ventas@techmine.com.ar</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContacto;
