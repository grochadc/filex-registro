import React, { useEffect, useState } from "react";
import { database, useFetch } from "../lib";
import { Formik } from "formik";
import * as Yup from "yup";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  firstLastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  secondLastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  code: Yup.number()
    .min(5, "Too short")
    .required("Required"),
  schedule: Yup.string().required("Porfavor elige tu horario")
});

const useAvailableSchedules = level => {
  const [schedules, setSchedules] = useState(null);
  useEffect(
    () => {
      if (level) {
        database
          .ref(`schedules/level${level}`)
          .once("value")
          .then(snapshot => {
            const availableSchedules = snapshot
              .val()
              .filter(schedule => schedule.registered < 35);
            setSchedules(availableSchedules);
          });
      }
    },
    [level]
  );
  return schedules;
};

function Selection(props) {
  const { response, loading, status } = useFetch(props.code, props.ubicacion);
  const student = response;
  let current_level;
  if (props.ubicacion) {
    current_level = student["NIVEL FINAL"];
  } else {
    current_level = student.pass ? student.prev_level + 1 : student.prev_level;
  }
  const schedule = useAvailableSchedules(current_level);
  delete student.id;
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1> Bienvenido a Nivel {current_level}!</h1>
          <h2> Verifica que tus datos sean correctos y elige tu horario:</h2>
        </Container>
      </Jumbotron>
      <Container>
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
            initialValues={response}
            onSubmit={props.handleSubmit}
            validationSchema={FormSchema}
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
                    prev_level: "Nivel Anterior"
                  };
                  return key === "pass" ? null : props.ubicacion ? (
                    <Form.Group controlId={key} key={index}>
                      <Form.Label>{`${key}: `}</Form.Label>
                      <Form.Control
                        value={values[key]}
                        onChange={handleChange}
                        disabled={
                          (key === "ESCRITO") |
                          (key === "ORAL") |
                          (key === "NIVEL FINAL")
                        }
                      />
                    </Form.Group>
                  ) : (
                    <Form.Group controlId={key} key={index}>
                      <Form.Label>{`${labels[key]}: `}</Form.Label>
                      <Form.Control
                        value={values[key]}
                        onChange={handleChange}
                      />
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
                  {errors && errors.schedule ? errors.schedule : null}
                </Form.Group>
                <Button variant="primary" type="submit" className="mb-3">
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

export default Selection;
