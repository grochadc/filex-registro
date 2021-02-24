import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_APPLICANT, REGISTER_STUDENT } from "../queries";

const labels = {
  codigo: "Codigo:",
  nombre: "Nombre:",
  apellido_paterno: "Apellido Paterno:",
  apellido_materno: "Apellido Materno:",
  genero: "Genero:",
  carrera: "Carrera:",
  ciclo: "Ciclo de Ingreso:",
  telefono: "Telefono:",
  email: "Correo Electronico:",
  nivel: "Nivel:",
  curso: "Curso:",
};

const composeInitialValues = (applicant) => {
  if (applicant === undefined) return [[], {}];
  const { schedules, __typename, ...rest } = applicant;
  return [schedules, rest];
};

const Selection = (props: { setMutationResponse: any }) => {
  const params: { code: string } = useParams();
  const history = useHistory();
  const query = useQuery(GET_APPLICANT, { variables: { codigo: params.code } });
  const { data } = query;
  const [schedules, initialValues] = composeInitialValues(
    data && data.applicant
  );
  const [registerStudent] = useMutation(REGISTER_STUDENT);
  const handleSubmit = (values) => {
    registerStudent({ variables: values })
      .then((res) => {
        props.setMutationResponse(res.data.registerStudent);
        history.push("/success");
      })
      .catch(console.error);
  };

  const Schema = Yup.object().shape({
    schedule: Yup.string().min(4).required("Elige un horario para continuar"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { ...initialValues, schedule: "" },
    validationSchema: Schema,
    onSubmit: handleSubmit,
  });
  const isInvalidCode = /^[0-9]+$/.test(params.code) ? false : true;

  if (query.loading) return <p>Loading...</p>;
  if (query.error) return <>{JSON.stringify(query.error)}</>;
  if (isInvalidCode)
    return <Alert variant="danger">Ese no es un codigo valido.</Alert>;
  if (!data.registeringLevel.includes(Number(data.applicant.nivel)))
    return (
      <Alert variant="warning">
        Hoy no es dia de registro para nivel {data.applicant.nivel}. Por favor
        vuelve el dia indicado.
      </Alert>
    );
  if (schedules.length === 0)
    return (
      <Alert variant="warning">
        Lo sentimos, todos los grupos pra nivel {data.applicant.nivel} estan
        llenos.
      </Alert>
    );
  return (
    <div>
      <h1>Selection</h1>
      <p>{params.code}</p>
      <Form onSubmit={formik.handleSubmit}>
        {Object.keys(formik.values).map((el: string, index: any) => {
          if (["schedule", "nuevo_ingreso", "externo"].includes(el))
            return null;
          return (
            <Form.Group key={index}>
              <Form.Label>{labels[el]}</Form.Label>
              <Form.Control
                type="text"
                value={formik.values[el]}
                onChange={formik.handleChange}
                disabled={["codigo", "nivel"].includes(el)}
              />
            </Form.Group>
          );
        })}
        <Form.Group>
          <Form.Label>Horario Filex:</Form.Label>
          <Form.Control
            as="select"
            id="schedule"
            value={formik.values.schedule}
            onChange={formik.handleChange}
          >
            <option value="">Elige un horario:</option>
            {schedules.map((item, index: number) => (
              <option key={index} value={item.group}>
                {item.serialized}
              </option>
            ))}
          </Form.Control>
          {formik.errors.schedule && (
            <Alert variant="warning">{formik.errors.schedule}</Alert>
          )}
        </Form.Group>
        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  );
};

export default Selection;
