import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Selection from "./pages/Selection";
import Success from "./pages/Success";
//import EditApplicantPage from "./pages/EditApplicantPage";
import { gql } from "@apollo/client";
import {
  useRegisterStudentMutation,
  RegisterStudentMutationResult,
  RegisterStudentMutation,
} from "./generated/grapqhl-types";
import { useHistory } from "react-router-dom";
import { Error } from "./components/utils";

export const RegisterStudent = gql`
  mutation RegisterStudent(
    $codigo: ID!
    $nivel: Int!
    $curso: String!
    $groupId: String!
    $group: String!
  ) {
    registerStudent(
      groupId: $groupId
      input: {
        codigo: $codigo
        nivel: $nivel
        curso: $curso
        cicloActual: "2023A"
        grupo: $group
      }
    ) {
      nombre
      group {
        name
        time
        aula
        teacher
      }
    }
  }
`;

function App() {
  const history = useHistory();

  const [registeredInfo, setRegisteredInfo] = useState({
    nombre: "",
    group: { name: "", time: "", aula: "", teacher: "" },
  });

  const [registerStudent, { error }] = useRegisterStudentMutation();

  const handleSelection = (student) => {
    const { __typename, ...variables } = student;
    registerStudent({
      variables,
      onCompleted: (res) => {
        setRegisteredInfo(res.registerStudent);
        history.push("/success");
      },
    });
  };

  const handleAlreadyRegistered = (response) => {
    setRegisteredInfo(response);
    history.push("/success");
  };
  if (error) return <Error err={error} />;
  return (
    <div>
      <Jumbotron>
        <h1>FILEX 2022B</h1>
        <h2>INSCRIPCION</h2>
      </Jumbotron>
      <Container>
        <Switch>
          <Route path="/success">
            <Success info={registeredInfo} />
            <Link to="/">Elegir otro codigo</Link>
          </Route>
          <Route path="/selection/:code">
            <Selection
              submitSelection={handleSelection}
              onAlreadyRegistered={handleAlreadyRegistered}
            />
            <Link to="/">Elegir otro codigo</Link>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
