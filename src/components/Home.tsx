import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [codigo, setCodigo] = useState("");
  return (
    <Form>
      <Form.Label>Codigo:</Form.Label>{" "}
      <Form.Control
        type="text"
        onChange={({ target }) => setCodigo(target.value)}
      />
      <Button onClick={() => history.push(`/selection/${codigo}`)}>
        Enviar
      </Button>
    </Form>
  );
};

export default Home;
