import * as Yup from "yup";

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

const NuevoIngresoSchema = Yup.object().shape({
  APELLIDOM: Yup.string(),
  APELLIDOP: Yup.string(),
  CEL: Yup.string(),
  CICLO: Yup.string(),
  CODIGO: Yup.string(),
  CORREO: Yup.string().email("Ingresa un email valido"),
  DESCRIPLAN: Yup.string(),
  NOMBRE: Yup.string()
});

export { FormSchema, NuevoIngresoSchema };
