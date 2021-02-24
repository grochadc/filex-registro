import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import history from "./utils/history";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Selection from "./pages/Selection";
import Success from "./pages/Success";

import { MutationResponse } from "./types";

function App() {
  const initialValues: MutationResponse = {
    nombre: "",
    schedule: { group: "", teacher: "", time: "" },
  };
  const [mutationResponse, setMutationResponse] = useState(initialValues);
  return (
    <Router history={history}>
      <Jumbotron>
        <h1>FILEX 2021A</h1>
        <h2>INSCRIPCION</h2>
      </Jumbotron>
      <Container>
        <Switch>
          <Route path="/success">
            <Success mutationResponse={mutationResponse} />
            <Link to="/">Elegir otro codigo</Link>
          </Route>
          <Route path="/selection/:code">
            <Selection setMutationResponse={setMutationResponse} />
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
    </Router>
  );
}

export default App;
