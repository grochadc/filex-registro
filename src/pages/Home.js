import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { isPast } from "date-fns";

function disableButton() {
  if (process.env.NODE_ENV === "production") {
    return !isPast(new Date(2020, 8, 8, 8, 59));
  } else {
    return false;
  }
}

export default function Home({ handleSubmit }) {
  const [code, setCode] = useState("220309342");
  const [ubicacion, setUbicacion] = useState(false);
  const handleClick = () => setUbicacion(!ubicacion);
  console.log("ubicacion", ubicacion);
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>FILEX 2020B</h1>
          <h3>INSCRIPCION</h3>
        </Container>
      </Jumbotron>
      <Container>
        <Form inline>
          <Form.Row>
            <Form.Group>
              <Form.Label>Codigo:</Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  value={code}
                  onChange={e => setCode(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Form.Row>
          <Button
            variant="primary"
            onClick={() => handleSubmit({ code, ubicacion })}
            disabled={disableButton()}
          >
            Enviar
          </Button>
        </Form>
        <Form>
          <Form.Row className="mt-2">
            <Form.Check
              type="checkbox"
              value={ubicacion}
              onClick={handleClick}
            />
            <Form.Label>Hice examen de Ubicacion</Form.Label>
          </Form.Row>
        </Form>
        <Alert variant="primary" className="mt-4 w-50">
          Si eres externo usa tu numero celular como codigo.
        </Alert>
      </Container>
    </div>
  );
}
