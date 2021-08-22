import { ApolloError } from "@apollo/client";
import { GraphQLError } from "graphql";
import { GET_APPLICANT, REGISTER_STUDENT } from "../queries";
import { Mock } from "./types";
import { Applicant, RegisterMutation } from "../__generated__/grapqhl-types";

const applicantInfo = {
  codigo: "1234567890",
  nombre: "Juan",
  apellido_materno: "Preciado",
  apellido_paterno: "Paramo",
  genero: "M",
  carrera: "Agronegocios",
  ciclo: "1955B",
  telefono: "3411234567",
  email: "juan@lamedialuna.net",
  nivel: "4",
  curso: "en",
  externo: false,
  desertor: false,
  schedule: "E4-1",
};

type GetApplicantMockData = {
  applicant: Applicant;
};
export const getApplicantMock: Mock<GetApplicantMockData> = {
  request: { query: GET_APPLICANT, variables: { codigo: "1234567890" } },
  result: {
    data: {
      applicant: {
        desertor: false,
        ...applicantInfo,
        registering: true,
        registeredSchedule: null,
        schedules: [
          {
            teacher: "Gonzalo Rocha",
            group: "E4-1",
            serialized: "E4-1 Gonzalo Rocha",
            entry: "",
          },
        ],
      },
    },
  },
};

const APPLICANT_NOT_FOUND = "APPLICANT_NOT_FOUND";

export const getApplicantNotFound: Mock<any> = {
  request: {
    query: GET_APPLICANT,
    variables: { codigo: "1234509876" },
  },
  result: {
    errors: [
      new GraphQLError(
        "No applicant found with code 123450987",
        null,
        null,
        null,
        null,
        null,
        { code: APPLICANT_NOT_FOUND }
      ),
    ],
  },
};

export const levelsFullMock: Mock = {
  request: { query: GET_APPLICANT, variables: { codigo: "1234567890" } },
  result: {
    data: {
      applicant: {
        ...applicantInfo,
        registering: true,
        schedules: [],
      },
    },
  },
};

type RegisterStudentData = {
  registerStudent: Applicant;
};

export const registerStudentMock: Mock<RegisterMutation> = {
  request: {
    query: REGISTER_STUDENT,
    variables: { ...applicantInfo, schedule: "E4-1" },
  },
  result: {
    data: {
      registerStudent: {
        nombre: applicantInfo.nombre,
        schedule: {
          group: "E4-1",
          teacher: "Gonzalo Rocha",
          entry: "SOME_ENTRY_URL",
        },
      },
    },
  },
};

export const getRegisteredApplicantMock: Mock = {
  request: {
    query: GET_APPLICANT,
    variables: {
      codigo: "1234567890",
    },
  },
  result: {
    data: {
      applicant: {
        codigo: "1234567890",
        nombre: "Benito Antonio",
        apellido_materno: "Martinez",
        apellido_paterno: "Ocasio",
        genero: "M",
        carrera: "Abogado",
        ciclo: "2021A",
        telefono: "1234567890",
        email: "bad@bunny.pr",
        nivel: "4",
        curso: "en",
        externo: false,
        registering: true,
        registeredSchedule: {
          teacher: "GONZALO ROCHA",
          group: "E4-1",
          classroom: "https://classroom.google.com",
          chat: "https://chat.google.com",
          sesiones: "https://meet.google.com",
        },
        schedules: [
          {
            teacher: "GONZALO ROCHA",
            group: "E4-1",
            serialized: "E4-1 GONZALO ROCHA ",
          },
          {
            teacher: "GONZALO ROCHA",
            group: "E4-2",
            serialized: "E4-2 GONZALO ROCHA ",
          },
        ],
      },
    },
  },
};
