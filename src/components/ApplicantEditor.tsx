import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

type Applicant = {
  codigo: string;
  nombre: string;
  apellido_materno: string;
  apellido_paterno: string;
  genero: string;
  carrera: string;
  ciclo: string;
  telefono: string;
  email: string;
  institucionalEmail: string;
  nivel: string;
  curso: string;
  externo: boolean;
  desertor: boolean;
};

const ApplicantSchema = Yup.object().shape({
  codigo: Yup.string().required("Obligatorio"),
  nombre: Yup.string().required("Obligatorio"),
  apellido_materno: Yup.string().required("Obligatorio"),
  apellido_paterno: Yup.string().required("Obligatorio"),
  genero: Yup.mixed().oneOf(["M", "F"]).required("Obligatorio"),
  carrera: Yup.string().required("Obligatorio"),
  ciclo: Yup.string()
    .matches(
      /\d{4}(A|B)/,
      "El ciclo debe tener el formato de cuatro digitos para el año y la letra A o B en mayúscula. Ej. 2021A"
    )
    .required("Obligatorio"),
  telefono: Yup.number().min(10, "Numero muy corto").required("Obligatorio"),
  email: Yup.string()
    .email(
      "Email no valido. Asegurate de incluir el @ y escribir los .com .mx etc. de forma correcta."
    )
    .required("Obligatorio"),
  institucionalEmail: Yup.string()
    .email(
      "Email no valido. Asegurate de incluir el @ y escribir los .com .mx etc. de forma correcta."
    )
    .matches(
      /[\w\.]*@alumnos.udg.mx/,
      "El correo debe terminar en @alumnos.udg.mx"
    )
    .when("externo", {
      is: false,
      then: (schema) => schema.required("Obligatorio"),
    }),
  nivel: Yup.number(),
  curso: Yup.mixed().oneOf(["en", "fr"]),
  externo: Yup.boolean(),
  desertor: Yup.boolean(),
});

type ApplicantSelectionFormProps = {
  onSubmit: (codigo: string) => void;
};
export const ApplicantSelectionForm = (props: ApplicantSelectionFormProps) => {
  //const history = useHistory();
  const [codigo, setCodigo] = React.useState("");
  return (
    <Form>
      <Form.Label>Codigo:</Form.Label>{" "}
      <Form.Control
        type="text"
        onChange={({ target }) => setCodigo(target.value)}
      />
      <Button onClick={() => props.onSubmit(codigo)}>Enviar</Button>
    </Form>
  );
};

const EditorContainer = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 1.5em 0;
  width: 500px;
  margin: auto;
  padding: 1.5em;
`;

const Field = styled.div`
  @media screen (max-width: 1200px) {
    border: 1px dashed black;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1em 0;
  input {
    height: 2.3em;
  }
  select {
    height: 2.3em;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const CheckboxField = styled.div`
  display: flex;
  align-items: center;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

type ApplicantEditorProps = {
  initialValues: Applicant;
  type: "create" | "edit";
  admin?: boolean;
  heading: string;
  onSubmit: (values: any) => void;
};
const ApplicantEditor = (props: ApplicantEditorProps) => {
  const handleSubmit = (values) => {
    props.onSubmit(values);
  };
  const defaultValues: Applicant = {
    codigo: "",
    nombre: "",
    apellido_materno: "",
    apellido_paterno: "",
    genero: "",
    carrera: "",
    ciclo: "",
    telefono: "",
    email: "",
    institucionalEmail: "",
    nivel: "",
    curso: "",
    externo: false,
    desertor: false,
  };
  const formik = useFormik({
    validationSchema: ApplicantSchema,
    initialValues:
      props.type === "create" ? defaultValues : props.initialValues,
    onSubmit: handleSubmit,
  });
  return (
    <EditorContainer>
      <div>
        <h1>{props.heading}</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Field>
          <label htmlFor="codigo">Codigo:</label>
          <input
            id="codigo"
            type="text"
            value={formik.values.codigo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={Boolean(props.type === "edit")}
          />
          {formik.errors.codigo ? (
            <Alert variant="warning">{formik.errors.codigo}</Alert>
          ) : null}
        </Field>
        <Field>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.nombre ? (
            <Alert variant="warning">{formik.errors.nombre}</Alert>
          ) : null}
        </Field>
        <Field>
          <label htmlFor="apellido_paterno">Apellido Paterno:</label>
          <input
            id="apellido_paterno"
            type="text"
            value={formik.values.apellido_paterno}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.apellido_paterno ? (
            <Alert variant="warning">{formik.errors.apellido_paterno}</Alert>
          ) : null}
        </Field>
        <Field>
          <label htmlFor="apellido_materno">Apellido Materno:</label>
          <input
            id="apellido_materno"
            type="text"
            value={formik.values.apellido_materno}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.apellido_materno ? (
            <Alert variant="warning">{formik.errors.apellido_materno}</Alert>
          ) : null}
        </Field>
        <Field>
          <label htmlFor="genero">Genero:</label>
          <select
            id="genero"
            name="genero"
            value={formik.values.genero}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
          {formik.errors.genero ? (
            <Alert variant="warning">{formik.errors.genero}</Alert>
          ) : null}
        </Field>
        <Field>
          <label htmlFor="carrera">Carrera:</label>
          <input
            id="carrera"
            type="text"
            value={formik.values.carrera}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.carrera ? (
            <Alert variant="warning">{formik.errors.carrera}</Alert>
          ) : null}
        </Field>
        <Field>
          <label htmlFor="ciclo">Ciclo:</label>
          <input
            id="ciclo"
            type="text"
            value={formik.values.ciclo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.ciclo ? (
            <Alert variant="warning">{formik.errors.ciclo}</Alert>
          ) : null}
        </Field>
        <Field>
          <label htmlFor="telefono">Telefono:</label>
          <input
            id="telefono"
            type="tel"
            value={formik.values.telefono}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.telefono ? (
            <Alert variant="warning">{formik.errors.telefono}</Alert>
          ) : null}
        </Field>
        <Field>
          <label htmlFor="email">Correo Personal:</label>
          <input
            id="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email ? (
            <Alert variant="warning">{formik.errors.email}</Alert>
          ) : null}
        </Field>
        <Field>
          <label htmlFor="institucionalEmail">
            Correo Institucional (@alumnos.udg.mx):
          </label>
          <input
            id="institucionalEmail"
            type="email"
            value={formik.values.institucionalEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.institucionalEmail ? (
            <Alert variant="warning">{formik.errors.institucionalEmail}</Alert>
          ) : null}
        </Field>
        {props.type === "create" || props.admin ? (
          <>
            <FlexRow>
              <Field>
                <label htmlFor="nivel">Nivel:</label>
                <select
                  id="nivel"
                  name="nivel"
                  value={formik.values.nivel}
                  onChange={formik.handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </Field>
              <Field>
                <label htmlFor="curso">Curso:</label>
                <select
                  id="curso"
                  name="curso"
                  value={formik.values.curso}
                  onChange={formik.handleChange}
                >
                  <option value="en">Ingles</option>
                  <option value="fr">Frances</option>
                </select>
              </Field>
            </FlexRow>
            <Field>
              <CheckboxContainer>
                <CheckboxField>
                  <label htmlFor="externo">Externo:</label>
                  <input
                    id="externo"
                    type="checkbox"
                    checked={formik.values.externo}
                    onChange={formik.handleChange}
                  />
                </CheckboxField>
                <CheckboxField>
                  <label htmlFor="desertor">Desertor:</label>
                  <input
                    id="desertor"
                    type="checkbox"
                    checked={formik.values.desertor}
                    onChange={formik.handleChange}
                  />
                </CheckboxField>
              </CheckboxContainer>
            </Field>
          </>
        ) : undefined}
        <Button type="submit">Guardar</Button>
      </form>
    </EditorContainer>
  );
};

export default ApplicantEditor;
