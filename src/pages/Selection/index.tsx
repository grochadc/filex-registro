import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Loading, Error } from "../../components/utils";
import { useParams, useHistory } from "react-router-dom";
import { gql } from "@apollo/client";
import {
  useGetApplicantQuery,
  useRegisterStudentMutation,
} from "generated/grapqhl-types";

import ApplicantEditor from "components/ApplicantEditor";
import ScheduleSelection from "components/ScheduleSelection";

export const RegisterStudent = gql`
  mutation RegisterStudent(
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
        grupo: $schedule
      }
    ) {
      nombre
      schedule {
        group
        teacher
        entry
      }
    }
  }
`;

export const GetApplicant = gql`
  query GetApplicant($codigo: ID!) {
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
      desertor
      registering
      registeredSchedule {
        teacher
        group
        entry
      }
      schedules {
        teacher
        group
        serialized(options: { teacher: true, group: true })
      }
    }
  }
`;

/*
const labels = {
  codigo: "Codigo:",
  nombre: "Nombre:",
  apellido_paterno: "Apellido Paterno:",
  apellido_materno: "Apellido Materno:",
  genero: "Genero:",
  carrera: "Carrera:",
  ciclo: "Ciclo de Ingreso:",
  telefono: "Telefono:",
  email: "Correo Electronico:",
  nivel: "Nivel:",
  curso: "Curso:",
};
*/

const composeInitialValues = (applicant: any) => {
  if (applicant === undefined) return [[], {}];
  const { schedules, registering, registeredSchedule, desertor, ...rest } =
    applicant;
  return [schedules, rest];
};

type SelectionProps = {
  submitSelection: (studentWithSchedule: any) => void;
  onAlreadyRegistered: (info: { nombre: string; schedule: any }) => void;
};
const Selection = (props: SelectionProps) => {
  const [student, setStudent] = useState({});
  //@ts-ignore
  const params: { code: string } = useParams();
  //const history = useHistory();
  const query = useGetApplicantQuery({ variables: { codigo: params.code } });
  const { data } = query;

  const [schedules, initialStudent] = composeInitialValues(
    data && data.applicant
  );

  const [showScheduleSelection, setShowScheduleSelection] = useState(false);
  const handleSubmit = (values: any) => {
    setStudent(values);
    setShowScheduleSelection(true);
  };
  const handleScheduleSelect = (index: number) => {
    props.submitSelection({
      ...student,
      schedule: data.applicant.schedules[index].group,
    });
  };
  const isInvalidCode = /^[0-9]+$/.test(params.code) ? false : true;

  useEffect(() => {
    if (data?.applicant.registeredSchedule) {
      props.onAlreadyRegistered({
        nombre: data.applicant.nombre,
        schedule: data.applicant.registeredSchedule,
      });
    }
  }, [data, props]);

  if (query.loading) return <Loading />;
  if (query.error) {
    return <Error err={query.error} />;
  }
  if (isInvalidCode)
    return <Alert variant="danger">Ese no es un codigo valido.</Alert>;
  if (data && !data.applicant.registering)
    return (
      <Alert variant="warning">
        Hoy no es dia de registro para nivel {data.applicant.nivel}. Por favor
        vuelve el dia indicado.
      </Alert>
    );
  if (schedules.length === 0)
    return (
      <Alert variant="warning">
        Lo sentimos, todos los grupos para nivel {data?.applicant.nivel} estan
        llenos.
      </Alert>
    );
  return (
    <div>
      {data?.applicant.desertor ? (
        <Alert variant="warning">
          Notamos que dertaste el ciclo anterior. Recuerda que solo puedes
          desertar dos veces!
        </Alert>
      ) : null}
      {showScheduleSelection ? (
        <ScheduleSelection
          schedules={data.applicant.schedules}
          onScheduleSelect={handleScheduleSelect}
        />
      ) : (
        <ApplicantEditor
          type="edit"
          admin={false}
          heading="Revisa tus datos:"
          initialValues={initialStudent}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Selection;
