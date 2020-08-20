import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function Home({ handleSubmit }) {
  const [code, setCode] = useState("220309342");
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
          <Button variant="primary" onClick={() => handleSubmit(code)}>
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  );
}
