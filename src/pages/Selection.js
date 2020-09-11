import React, { useEffect, useState } from "react";
import { database, useFetch } from "../lib";
import { Formik } from "formik";
import { FormSchema } from "./ValidationSchemas";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Alert from "react-bootstrap/Alert";

const frenchSchedules = [
  { group: "F1-1", teacher: "Felipe", time: "NA" },
  { group: "F2-1", teacher: "Felipe", time: "NA" },
  { group: "F3-1", teacher: "Felipe", time: "NA" },
  { group: "F4-1", teacher: "Felipe", time: "NA" },
  { group: "F5-1", teacher: "Felipe", time: "NA" },
  { group: "F6-1", teacher: "Felipe", time: "NA" }
];

function hideInput(key) {
  if (key === "schedule" || key === "id") {
    return true;
  } else {
    return false;
  }
}

function Selection(props) {
  const endpoint = props.studentStatus; // either freshman, reubicacion, or students
  const { response, loading, status } = useFetch(props.code, endpoint);
  const student = response;
  const schedule = useAvailableSchedules(student.level, student.course);
  console.log("schedules", schedule);
  const current_schema = FormSchema;
  const levelNotRegistering = Boolean(
    (student.level === 2) | (student.level === 3)
  );
  const levelFull = schedule && schedule.length === 0;
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1> Bienvenido a Nivel {student.level}!</h1>
          <h2> Verifica que tus datos sean correctos y elige tu horario:</h2>
        </Container>
      </Jumbotron>
      <Container>
        {levelFull ? (
          <Alert variant="primary">
            Por el momento todos los grupos de nivel {student.level} estan
            llenos. Gracias por tu comprensión.
          </Alert>
        ) : null}
        {student.course === "english" && levelNotRegistering ? (
          <Alert variant="primary">
            El registro para nivel {student.level} no es hoy. Favor de regresar
            el dia asignado.
          </Alert>
        ) : null}
        {loading ? (
          <p>Cargando...</p>
        ) : status === 404 ? (
          <div>
            <p>Estudiante no encontrado</p>
            <Button
              variant="primary"
              onClick={() => props.handleRouteChange("home")}
            >
              Atrás
            </Button>
          </div>
        ) : status === 500 ? (
          <p>No se pudo conectar al servidor. Favor de intentar mas tarde.</p>
        ) : (
          <Formik
            initialValues={student}
            onSubmit={props.handleSubmit}
            validationSchema={current_schema}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                {Object.keys(values).map((key, index) => {
                  const labels = {
                    code: "Codigo",
                    name: "Nombre",
                    firstLastName: "Apellido Paterno",
                    secondLastName: "Appelido Materno",
                    ciclo: "Clico de Ingreso",
                    carrera: "Carrera",
                    genero: "Género",
                    email: "Correo Electronico",
                    celular: "Telefono Celular",
                    prev_level: "Nivel Anterior",
                    course: "Curso",
                    level: "Nivel"
                  };
                  return hideInput(key) ? null : (
                    <Form.Group controlId={key} key={index}>
                      <Form.Label>{`${labels[key]}: `}</Form.Label>
                      <Form.Control
                        value={values[key]}
                        onChange={handleChange}
                        disabled={key === "level"}
                      />
                      {errors && errors[key] ? (
                        <Alert variant="danger">{errors[key]}</Alert>
                      ) : null}
                    </Form.Group>
                  );
                })}
                <Form.Group controlId="schedule">
                  <Form.Label>Elige tu horario:</Form.Label>
                  <Form.Control
                    as="select"
                    value={values.schedule}
                    onChange={handleChange}
                  >
                    <option value="">Horarios:</option>
                    {schedule ? (
                      schedule.map((item, index) => {
                        return (
                          <option key={index} value={item.group}>
                            {`${item.group} ${item.teacher} ${item.time}`}
                          </option>
                        );
                      })
                    ) : (
                      <option>Cargando horarios...</option>
                    )}
                  </Form.Control>
                  {errors && errors.schedule ? (
                    <Alert variant="danger">{errors.schedule}</Alert>
                  ) : null}
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="mb-3"
                  disabled={levelNotRegistering | levelFull}
                >
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </Container>
    </div>
  );
}
const useAvailableSchedules = (level, course) => {
  const [schedules, setSchedules] = useState(null);
  useEffect(
    () => {
      if (level && course === "english") {
        database
          .ref(`schedules/level${level}`)
          .once("value")
          .then(snapshot => {
            const availableSchedules = snapshot
              .val()
              .filter(schedule => schedule.registered < 35);
            setSchedules(availableSchedules);
          });
      } else if (course === "french") {
        setSchedules([frenchSchedules[level - 1]]);
      }
    },
    [level, course]
  );
  return schedules;
};

export default Selection;
