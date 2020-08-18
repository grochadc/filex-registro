import React, { useEffect, useState } from "react";
import { database, useFetch } from "../lib";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

const allSchedules = [
  [
    { group: "E1-1", teacher: "Gonzalo Rocha", time: "7:00 - 8:00" },
    { group: "E1-2", teacher: "Gonzalo Rocha", time: "8:00 - 9:00" },
    { group: "E1-3", teacher: "Gonzalo Rocha", time: "9:00 - 10:00" }
  ],
  [
    { group: "E2-1", teacher: "Gonzalo Rocha", time: "7:00 - 8:00" },
    { group: "E2-2", teacher: "Gonzalo Rocha", time: "8:00 - 9:00" }
  ],
  [
    { group: "E3-1", teacher: "Gonzalo Rocha", time: "7:00 - 8:00" },
    { group: "E3-2", teacher: "Gonzalo Rocha", time: "8:00 - 9:00" }
  ],
  [
    { group: "E4-1", teacher: "Gonzalo Rocha", time: "7:00 - 8:00" },
    { group: "E4-2", teacher: "Gonzalo Rocha", time: "8:00 - 9:00" }
  ],
  [
    { group: "E5-1", teacher: "Gonzalo Rocha", time: "7:00 - 8:00" },
    { group: "E5-2", teacher: "Gonzalo Rocha", time: "8:00 - 9:00" }
  ]
];

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
  useEffect(() => {
    const schedules = allSchedules[level - 1];
    database
      .ref("/registered")
      .once("value")
      .then(snapshot => {
        //if a particular key doesnt exist push it first to the availableKeys array
        let availableKeys = [];
        snapshot.forEach(childSnapshot => {
          if (childSnapshot.numChildren() <= 2) {
            availableKeys.push(childSnapshot.key);
          }
        });
        const availableSchedules = schedules.filter(
          schedule => availableKeys.filter(key => schedule.group === key).length
        );
        setSchedules(availableSchedules);
      });
  }, []);
  return schedules;
};

function Selection(props) {
  const { response, error, loading, status } = useFetch(
    `/students/${props.code}`
  );
  const student = response;
  const schedule = useAvailableSchedules(2);
  delete student.id;
  delete student.pass;
  return (
    <div>
      <Jumbotron>
        <h1> Bienvenido a Nivel {student.prev_level + 1}!</h1>
        <h2> Verifica que tus datos sean correctos y elige tu horario:</h2>
      </Jumbotron>
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
      ) : (
        <Formik
          initialValues={response}
          onSubmit={props.handleSubmit}
          validationSchema={FormSchema}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              {Object.keys(values).map((key, index) => {
                return (
                  <Form.Group controlId={key} key={index}>
                    <Form.Label>{`${key}: `}</Form.Label>
                    <Form.Control value={values[key]} onChange={handleChange} />
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
                  {schedule &&
                    schedule.map((item, index) => {
                      console.log("option", item);
                      return (
                        <option key={index} value={item.group}>
                          {`${item.group} ${item.teacher} ${item.time}`}
                        </option>
                      );
                    })}
                </Form.Control>
                {errors && errors.schedule ? errors.schedule : null}
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default Selection;
