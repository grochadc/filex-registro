import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ApplicantEditor from "./ApplicantEditor";
export default {
  title: "Pages/ApplicantEditor",
  component: ApplicantEditor,
  argTypes: { onSubmit: { action: "submitted" } },
} as ComponentMeta<typeof ApplicantEditor>;

const Template: ComponentStory<typeof ApplicantEditor> = (args) => (
  <ApplicantEditor {...args} />
);

const defaultApplicantValues = {
  codigo: "12344567890",
  nombre: "Benito Antonio",
  apellido_materno: "Martinez",
  apellido_paterno: "Ocasio",
  genero: "M",
  carrera: "Abogado",
  ciclo: "2021B",
  telefono: "3411234567",
  email: "bad@bunny.pr",
  nivel: "4",
  curso: "en",
  institucionalEmail: "",
  externo: false,
  desertor: false,
};

export const Student = Template.bind({});
Student.args = {
  type: "edit",
  admin: false,
  heading: "Revisa tus datos",
  initialValues: defaultApplicantValues,
};

export const ExternalStudent = Template.bind({});
ExternalStudent.args = {
  type: "edit",
  admin: false,
  heading: "Revisa tus datos",
  initialValues: { ...defaultApplicantValues, externo: true },
};

export const Edit = Template.bind({});
Edit.args = {
  type: "edit",
  admin: true,
  heading: "Editar Alumno",
  initialValues: defaultApplicantValues,
};

export const Create = Template.bind({});
Create.args = {
  heading: "Crear Nuevo Alumno",
  type: "create",
};
