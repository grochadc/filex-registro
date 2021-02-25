import { GET_APPLICANT, REGISTER_STUDENT } from "../queries";
export interface Mock {
  request: { query: any; variables?: any };
  result: { data: any };
}

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
  schedule: "E4-1",
};

export const getApplicantMock: Mock = {
  request: { query: GET_APPLICANT, variables: { codigo: "1234567890" } },
  result: {
    data: {
      applicant: {
        ...applicantInfo,
        registering: true,
        schedules: [
          {
            teacher: "Gonzalo Rocha",
            group: "E4-1",
            serialized: "E4-1 Gonzalo Rocha",
          },
        ],
      },
    },
  },
};

export const registerStudentMock: Mock = {
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
        },
      },
    },
  },
};
