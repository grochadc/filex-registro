import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Selection from "./pages/Selection";
import Success from "./pages/Success";
import EditApplicantPage from "./pages/EditApplicantPage";
import { gql } from "@apollo/client";
import { useRegisterStudentMutation } from "./generated/grapqhl-types";
import { useHistory } from "react-router-dom";
import { Error } from "./components/utils";

export const RegisterStudent = gql`
  mutation RegisterStudent(
    $codigo: ID!
    $nombre: String!
    $apellido_materno: String!
    $apellido_paterno: String!
    $genero: String!
    $carrera: String!
    $ciclo: String!
    $telefono: String!
    $email: String!
    $institucionalEmail: String
    $nivel: String!
    $curso: String!
    $externo: Boolean!
    $schedule: String!
  ) {
    registerStudent(
      input: {
        codigo: $codigo
        nombre: $nombre
        apellido_materno: $apellido_materno
        apellido_paterno: $apellido_paterno
        genero: $genero
        carrera: $carrera
        ciclo: $ciclo
        telefono: $telefono
        email: $email
        institucionalEmail: $institucionalEmail
        nivel: $nivel
        curso: $curso
        externo: $externo
        grupo: $schedule
      }
    ) {
      nombre
      schedule {
        group
        teacher
        entry
      }
    }
  }
`;

function App() {
  const history = useHistory();

  const [mutationResponse, setMutationResponse] = useState({
    nombre: "",
    schedule: { group: "", teacher: "", entry: "" },
  });
  const [registerStudent, { error }] = useRegisterStudentMutation();

  const handleSelection = (student) => {
    const { __typename, ...variables } = student;
    registerStudent({
      variables,
      onCompleted: (res) => {
        setMutationResponse(res);
        history.push("/success");
      },
    });
  };

  const handleAlreadyRegistered = (response) => {
    setMutationResponse(response);
    history.push("/success");
  };
  if (error) return <Error err={error} />;
  return (
    <div>
      <Jumbotron>
        <h1>FILEX 2022A</h1>
        <h2>INSCRIPCION</h2>
      </Jumbotron>
      <Container>
        <Switch>
          <Route path="/success">
            <Success mutationResponse={mutationResponse} />
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
          <Route path="/editApplicant/:code">
            <EditApplicantPage />
            <Link to="/dashboard">Elegir otro codigo</Link>
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
