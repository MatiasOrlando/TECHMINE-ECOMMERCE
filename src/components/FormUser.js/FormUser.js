import { useState } from "react";
import React from "react";

const FormUser = () => {
  let consultaUsuario = [];
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
            Porfavor ingrese una ciudad válida
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Label>Envianos tu consulta</Form.Label>
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
  );
};

export default FormUser;
