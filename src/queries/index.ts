import { gql } from "@apollo/client";

export const SAVE_LEVELS_REGISTERING = gql`
  mutation saveLevels($levels: [Int]!) {
    saveRegisteringLevels(levels: $levels)
  }
`;

export const GET_LEVELS_REGISTERING = gql`
  {
    registeringLevels
  }
`;

export const GET_APPLICANT = gql`
  query info($codigo: ID!) {
    registeringLevels
    applicant(codigo: $codigo) {
      codigo
      nombre
      apellido_materno
      apellido_paterno
      genero
      carrera
      ciclo
      telefono
      email
      nivel
      curso
      externo
      nuevo_ingreso
      schedules {
        group
        serialized
      }
    }
  }
`;

export const REGISTER_STUDENT = gql`
  mutation register(
    $codigo: ID!
    $nombre: String!
    $apellido_materno: String!
    $apellido_paterno: String!
    $genero: String!
    $carrera: String!
    $ciclo: String!
    $telefono: String!
    $email: String!
    $nivel: String!
    $curso: String!
    $externo: Boolean!
    $nuevo_ingreso: Boolean!
    $schedule: String!
  ) {
    registerStudent(
      input: {
        codigo: $codigo
        nombre: $nombre
        apellido_materno: $apellido_materno
        apellido_paterno: $apellido_paterno
        genero: $genero
        carrera: $carrera
        ciclo: $ciclo
        telefono: $telefono
        email: $email
        nivel: $nivel
        curso: $curso
        externo: $externo
        nuevo_ingreso: $nuevo_ingreso
        grupo: $schedule
      }
    ) {
      nombre
      schedule {
        group
        teacher
        time
      }
    }
  }
`;
