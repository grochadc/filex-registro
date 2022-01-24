import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import generateMock from "./testutils/generatedMocks";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter, Route } from "react-router-dom";

import App, { RegisterStudent } from "./App";
import { GetApplicant } from "./pages/Selection";

const baseApplicantForMocks = {
  codigo: "1234567890",
  email: "email@website.com",
  ciclo: "2022A",
  telefono: "3411234567",
  curso: "en",
  genero: "M",
  nivel: "4",
  externo: true,
  registering: true,
  schedules: [
    { teacher: "Gonzalo", group: "E4-1" },
    { teacher: "Alondra", group: "E4-2" },
  ],
};

export default {
  title: "Pages/App",
  component: App,
  parameters: {
    apolloClient: {
      MockedProvider,
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/selection/1234567890"]}>
        <Route path="/selection/:code">
          <Story />
        </Route>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Normal = Template.bind({});
Normal.parameters = {
  apolloClient: {
    mocks: [
      generateMock(
        GetApplicant,
        { codigo: "1234567890" },
        {
          data: {
            applicant: baseApplicantForMocks,
          },
        }
      ),
      generateMock(
        RegisterStudent,
        {
          codigo: "1234567890",
          nombre: "Applicant-nombre",
          apellido_materno: "Applicant-apellido_materno",
          apellido_paterno: "Applicant-apellido_paterno",
          genero: "M",
          carrera: "Applicant-carrera",
          ciclo: "2022A",
          telefono: "3411234567",
          email: "email@website.com",
          nivel: "4",
          curso: "en",
          externo: true,
          schedule: "E4-1",
        },
        {}
      ),
    ],
  },
};

export const AlreadyRegistered = Template.bind({});
AlreadyRegistered.parameters = {
  apolloClient: {
    mocks: [
      generateMock(
        GetApplicant,
        { codigo: "1234567890" },
        {
          data: {
            applicant: {
              ...baseApplicantForMocks,
              registeredSchedule: {},
            },
          },
        }
      ),
      generateMock(
        RegisterStudent,
        {
          codigo: "1234567890",
          nombre: "Applicant-nombre",
          apellido_materno: "Applicant-apellido_materno",
          apellido_paterno: "Applicant-apellido_paterno",
          genero: "M",
          carrera: "Applicant-carrera",
          ciclo: "2022A",
          telefono: "3411234567",
          email: "email@website.com",
          nivel: "4",
          curso: "en",
          externo: true,
          schedule: "E4-1",
        },
        {}
      ),
    ],
  },
};
