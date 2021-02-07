import { GET_APPLICANT, REGISTER_STUDENT } from "../../pages/Selection";
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
  nuevo_ingreso: false,
};

export const getApplicantMock: Mock = {
  request: { query: GET_APPLICANT, variables: { codigo: "1234567890" } },
  result: {
    data: {
      registeringLevel: [4],
      applicant: {
        ...applicantInfo,
        schedules: [
          {
            group: "E4-1",
            serialized: "E4-1 Gonzalo Rocha 07:00-08:00",
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
      nombre: applicantInfo.nombre,
      schedule: {
        group: "E4-1",
        teacher: "Gonzalo Rocha",
        time: "7:00-8:00",
      },
    },
  },
};
