import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
//import * as Yup from "yup";

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

type ApplicantEditorProps = {
  initialValues: any;
  onSubmit: (values: any) => void;
};
export const ApplicantEditor = (props: ApplicantEditorProps) => {
  const formik = useFormik({
    //enableReinitialize: true,
    initialValues: { ...props.initialValues },
    //validationSchema: Schema,
    onSubmit: props.onSubmit,
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      {Object.keys(formik.values).map((el: string, index: any) => {
        return (
          <Form.Group key={index}>
            <Form.Label>{el}</Form.Label>
            <Form.Control
              name={el}
              type="text"
              value={formik.values[el]}
              onChange={formik.handleChange}
              disabled={["codigo"].includes(el)}
            />
          </Form.Group>
        );
      })}
      <Button type="submit">Enviar</Button>
    </Form>
  );
};
