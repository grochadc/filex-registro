import React, { useState, useReducer } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { isPast } from "date-fns";

function disableButton() {
  if (process.env.NODE_ENV === "production") {
    return !isPast(new Date(2020, 8, 7, 8, 59));
  } else {
    return false;
  }
}

const initialState = {
  nuevo_ingreso: false,
  reubicacion: false
};
const myReducer = (state, action) => {
  switch (action.type) {
    case "nuevo_ingreso":
      return { nuevo_ingreso: !state.nuevo_ingreso, reubicacion: false };
    case "reubicacion":
      return { reubicacion: !state.reubicacion, nuevo_ingreso: false };
    default:
      return state;
  }
};

export default function Home({ handleSubmit }) {
  const [state, dispatch] = useReducer(myReducer, initialState);
  const studentStatus = state.nuevo_ingreso
    ? "freshmen"
    : state.reubicacion
      ? "reubicacion"
      : "students";
  const [code, setCode] = useState();
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
            onClick={() => handleSubmit({ code, studentStatus })}
            disabled={disableButton()}
          >
            Enviar
          </Button>
        </Form>
        <Form>
          <Form.Row className="mt-2">
            <Form.Check
              type="checkbox"
              checked={state.nuevo_ingreso}
              onClick={() => dispatch({ type: "nuevo_ingreso" })}
            />
            <Form.Label>Nuevo Ingreso</Form.Label>
            <span style={{ margin: "10px" }}> </span>
            <Form.Check
              type="checkbox"
              checked={state.reubicacion}
              onClick={() => dispatch({ type: "reubicacion" })}
            />
            <Form.Label>Reubicacion</Form.Label>
          </Form.Row>
        </Form>
        <Alert variant="primary" className="mt-4 w-50">
          Si eres externo usa tu numero celular como codigo.
        </Alert>
      </Container>
    </div>
  );
}
