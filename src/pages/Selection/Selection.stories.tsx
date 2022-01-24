import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import generateMock from "../../testutils/generatedMocks";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter, Route } from "react-router-dom";

import Selection, { RegisterStudent, GetApplicant } from "./index";
export default {
  title: "Pages/Selection",
  component: Selection,
  argTypes: {
    setMutationResponse: { action: "submitted" },
    onAlreadyRegistered: { action: "registered" },
    submitSelection: { action: "selection" },
  },
  parameters: {
    apolloClient: {
      mocks: [generateMock(RegisterStudent, {}, {})],
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
} as ComponentMeta<typeof Selection>;

const Template: ComponentStory<typeof Selection> = (args) => (
  <Selection {...args} />
);

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

export const WrongDay = Template.bind({});
WrongDay.parameters = {
  apolloClient: {
    mocks: [
      generateMock(
        GetApplicant,
        { codigo: "1234567890" },
        {
          data: {
            applicant: {
              ...baseApplicantForMocks,
              registering: false,
            },
          },
        }
      ),
    ],
  },
};

export const LevelsFull = Template.bind({});
LevelsFull.parameters = {
  apolloClient: {
    mocks: [
      generateMock(
        GetApplicant,
        { codigo: "1234567890" },
        {
          data: {
            applicant: { ...baseApplicantForMocks, schedules: [] },
          },
        }
      ),
    ],
  },
};
