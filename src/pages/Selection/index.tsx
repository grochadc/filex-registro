import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Loading, Error } from "../../components/utils";
import { useParams, useHistory } from "react-router-dom";
import { gql } from "@apollo/client";
import { useGetApplicantQuery } from "../../generated/grapqhl-types";

import ApplicantEditor from "../../components/ApplicantEditor";
import ScheduleSelection from "../../components/ScheduleSelection";

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
      institucionalEmail
      nivel
      curso
      externo
      desertor
      registering
      registeredGroup {
        ciclo
        name
        time
        aula
        teacher
      }
      groups {
        id
        ciclo
        name
        time
        aula
        teacher
      }
    }
  }
`;

const composeInitialValues = (applicant: any) => {
  if (applicant === undefined) return [[], {}];
  const { schedules, registering, registeredSchedule, desertor, ...rest } =
    applicant;
  return [schedules, rest];
};

type SelectionProps = {
  submitSelection: (studentWithSchedule: any) => void;
  onAlreadyRegistered: (info: { nombre: string; group: any }) => void;
};
const Selection = (props: SelectionProps) => {
  const [student, setStudent] = useState({});
  //@ts-ignore
  const params: { code: string } = useParams();
  //const history = useHistory();
  const query = useGetApplicantQuery({ variables: { codigo: params.code }, onCompleted: (data) => {

  } });
  const { data } = query;
  const [schedules, initialStudent] = composeInitialValues(
    data && data.applicant
  );

  const [showScheduleSelection, setShowScheduleSelection] = useState(false);
  useEffect(() => {}, [showScheduleSelection]);
  const handleSubmit = (values: any) => {
    setStudent(values);
    setShowScheduleSelection(true);
  };
  const handleScheduleSelect = (index: number) => {
    props.submitSelection({
      ...student,
      groupId: data?.applicant.groups[index].id,
    });
  };
  const isInvalidCode = /^[0-9]+$/.test(params.code) ? false : true;

  useEffect(() => {
    if (data?.applicant.registeredGroup) {
      console.log('found alreadyRegistered', data.applicant.registeredGroup)
      props.onAlreadyRegistered({
        nombre: data.applicant.nombre,
        group: data.applicant.registeredGroup,
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
  if (data && data.applicant.groups.length === 0)
    return (
      <Alert variant="warning">
        Lo sentimos, todos los grupos para nivel {data?.applicant.nivel} estan
        llenos.
      </Alert>
    );
  if (data)
    return (
      <div>
        {data.applicant.desertor ? (
          <Alert variant="warning">
            Notamos que dertaste el ciclo anterior. Recuerda que solo puedes
            desertar dos veces!
          </Alert>
        ) : null}
        {showScheduleSelection ? (
          <ScheduleSelection
            schedules={data.applicant.groups || []}
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
  return <>No DATA</>;
};

export default Selection;
